// Configuración de los fragmentos del juego    
// 1. Lista de fragmentos cortados con WinRAR (sin compresión interna)
const urlsFragmentos = [
    'https://coderfunk.github.io/Mis_proyectos/Andy_PSX/isos_psx/RE1/REDirectorCut.part1.rar',
    'https://coderfunk.github.io/Mis_proyectos/Andy_PSX/isos_psx/RE1/REDirectorCut.part2.rar',
    'https://coderfunk.github.io/Mis_proyectos/Andy_PSX/isos_psx/RE1/REDirectorCut.part3.rar',
    'https://coderfunk.github.io/Mis_proyectos/Andy_PSX/isos_psx/RE1/REDirectorCut.part4.rar'
    ]; 

async function descargarYUnirJuego() {
  const statusElement = document.getElementById('loading-status');
  if (statusElement) statusElement.innerText = "Descargando fragmentos del juego...";

  try {
    // 2. Descargar todos los fragmentos en paralelo
    const promesasDescarga = urlsFragmentos.map(async (url) => {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`No se pudo descargar: ${url}`);
      return res.arrayBuffer();
    });

    const buffers = await Promise.all(promesasDescarga);
    
    if (statusElement) statusElement.innerText = "Uniendo fragmentos en memoria...";

    // 3. Unir los ArrayBuffers en un solo Blob binario
    const juegoCompletoBlob = new Blob(buffers, { type: 'application/octet-stream' });
    
    // 4. Crear la URL virtual temporal del archivo .chd completo
    const urlJuegoUnido = URL.createObjectURL(juegoCompletoBlob);
    
    if (statusElement) statusElement.innerText = "Iniciando emulador...";

    // 5. Declarar las variables globales que EmulatorJS necesita
    window.EJS_player = '#game';
    window.EJS_core = 'psx';
    window.EJS_biosUrl = 'https://github.io';
    window.EJS_gameUrl = urlJuegoUnido; // El blob virtual en memoria
    
    // TRUCO OBLIGATORIO PARA PROTOCOLO BLOB:
    // Fuerza al emulador a reconocer que el archivo final es un CHD sin importar la URL del blob.
    window.EJS_gameName = 'juego.chd'; 

    // 6. Insertar el cargador oficial de EmulatorJS dinámicamente
    const scriptEmulator = document.createElement('script');
    scriptEmulator.src = 'https://emulatorjs.com';
    scriptEmulator.async = true;
    document.body.appendChild(scriptEmulator);


  } catch (error) {
    console.error("Error en el cargador:", error);
    if (statusElement) statusElement.innerText = "Error al cargar los fragmentos. Revisa la consola (F12).";
  }
}

// Iniciar el proceso de inmediato al cargar la página
window.addEventListener('DOMContentLoaded', descargarYUnirJuego);

