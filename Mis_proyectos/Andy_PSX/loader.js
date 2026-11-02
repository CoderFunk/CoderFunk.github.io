// Configuración de los fragmentos del juego
const urlsFragmentos = [
    'juegos/juego.chd.001',
    'juegos/juego.chd.002',
    'juegos/juego.chd.003'
    ]; 
    
    async function descargarYUnirJuego() {
    const statusElement = document.getElementById('loading-status');
    if (statusElement) statusElement.innerText = "Descargando fragmentos del juego (0%)..."; 
    
    try {
    // 1. Descargar todos los fragmentos en paralelo
    const promesasDescarga = urlsFragmentos.map(async (url, index) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error(No se pudo descargar el fragmento: ${url});
    return res.arrayBuffer();
    }); 
    
    const buffers = await Promise.all(promesasDescarga);
    
    if (statusElement) statusElement.innerText = "Uniendo archivos en memoria...";
    
    // 2. Unir los ArrayBuffers en un solo Blob binario
    const juegoCompletoBlob = new Blob(buffers, { type: 'application/octet-stream' });
    
    // 3. Crear la URL virtual temporal
    const urlJuegoUnido = URL.createObjectURL(juegoCompletoBlob);
    
    if (statusElement) statusElement.innerText = "¡Listo! Iniciando emulador...";
    
    // 4. Iniciar EmulatorJS pasando la URL del Blob
    iniciarEmulatorJS(urlJuegoUnido);
    
    } catch (error) {
    console.error("Error en el cargador:", error);
    if (statusElement) statusElement.innerText = "Error al cargar el juego. Revisa la consola.";
    }
    } 
    
    function iniciarEmulatorJS(urlDelJuego) {
    // Ajusta estas variables según los nombres exactos que use tu integración de EmulatorJS
    window.EJS_player = '#game-container'; // ID del contenedor HTML de tu emulador
    window.EJS_core = 'psx';
    window.EJS_gameUrl = urlDelJuego; // <--- Aquí asignamos el archivo unido en memoria 
    
    // Si usas rutas locales para las bios o el sistema de EmulatorJS, añádelas aquí:
    window.EJS_pathtodata = 'data/'; 
    
    // Si EmulatorJS requiere iniciar un script embebido después de declarar las variables:
    if (typeof loadEmulator === 'function') {
    loadEmulator();
    }
    } 
    
    // Iniciar el proceso automáticamente al cargar la página
    window.addEventListener('DOMContentLoaded', descargarYUnirJuego);