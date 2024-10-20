const propiedades_ventas = [
    {
    nombre: 'Apartamento frente a la playa',
    src: 'https://guiastours.cl/wp-content/uploads/2022/09/Reposta_305135395_1230195587827707_6635161177304676961_nwebp.jpg',
    descripcion: 'Este apartamento tiene mucho espacio y su ubicación es perfecta, cerca de todo.',
    ubicacion: 'AV. Paulista, 45678, Rio de Janeiro',
    habitaciones: 2,
    bath: 2,
    garage: true,
    piscina: false,
    costo:  84590000,
    },
    {
    nombre: 'Casa al interior de Rio',
    src: 'https://img.freepik.com/fotos-premium/bandera-brasil-pintada-escalera-cerro-concepcion-centro-rio-janeiro_63139-1245.jpg',
    descripcion: 'Casa amoblada al interior de Rio, residencial con seguridad.',
    ubicacion: 'Morango da rua, 789, Rio de janeiro',
    habitaciones: 3,
    bath: 2,
    garage: true,
    piscina: true,
    costo:  82990000,
    },
    {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: "https://wallpapercave.com/wp/wp3267838.jpg",
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares al carnaval de Rio.',
    ubicacion: 'Sao Joao 1589, Rio de janeiro',
    habitaciones: 1,
    bath: 1,
    garage: false,
    piscina: true,
    costo:  92990000,
    },
]

const deptosVenta = document.querySelector('#venta');
let canvasVenta='';

for (let propiedad of propiedades_ventas) {
    canvasVenta+=`
    <div class="col-md-4 mb-4">
        <div class="card">
            <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.descripcion}"/>
            <div class="card-body">
                <h5 class="card-title">${propiedad.nombre}</h5>
                <p class="card-text">${propiedad.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones<br>
                <i class="fas fa-bath"></i> ${propiedad.bath} Baños.</p>
                <p class="${(propiedad.garage) ? 'text-success':'text-danger'}">
                    <i class="${(propiedad.garage) ? 'fas fa-car':'fa-solid fa-ban'}"></i> ${(propiedad.garage) ? 'Con garage':'Sin garage'}
                </p>
                <p class="${(propiedad.piscina) ? 'text-success':'text-danger'}">
                    <i class="${(propiedad.piscina) ? 'fas fa-water':'fa-solid fa-ban'}"></i> ${(propiedad.piscina) ? 'Con piscina':'Sin piscina'}
                </p>
                
                <p><i class="fas fa-dollar-sign"></i> ${new Intl.NumberFormat('es-CL').format(propiedad.costo)}</p>
            </div>
        </div>
    </div>`
}
deptosVenta.innerHTML = canvasVenta;