const propiedades_arriendo = [
    {
    nombre: 'Departamento en el centro de la ciudad',
    src: 'https://www.momondo.com.co/himg/5f/bd/b5/expediav2-450429-9761aa-083937.jpg',
    descripcion: 'Este apartamento tiene mucho espacio y su ubicación es perfecta, cerca de todo.',
    ubicacion: 'AV. Paulista, 258, Rio de Janeiro',
    habitaciones: 2,
    bath: 2,
    costo:  3000,
    smoke: true,
    pets: false
    },
    {
    nombre: 'Casa al interior de Rio',
    src: 'https://pbs.twimg.com/media/Bp5FAg4IQAA0b14?format=jpg',
    descripcion: 'Casa amoblada al interior de Rio, residencial con seguridad.',
    ubicacion: 'Morango da rua, 789, Rio de janeiro',
    habitaciones: 3,
    bath: 2,
    costo:  3200,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: "https://tugranviaje.com/wp-content/uploads/2014/11/ipanema-630px.jpg",
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares al carnaval de Rio.',
    ubicacion: 'Sao Joao 1589, Rio de janeiro',
    habitaciones: 1,
    bath: 1,
    costo:  4200,
    smoke: true,
    pets: true
    },
];

const deptoArriendo = document.querySelector('#alquiler');
let canvasArriendo='';

for(let propiedad of propiedades_arriendo) {
  canvasArriendo+=`
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${propiedad.src}" class="card-img-top" alt="foto de departamento con jardin"/>
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i>
                        ${propiedad.ubicacion}
                    </p>
                    <p><i class="fas fa-bed"></i>
                        ${propiedad.habitaciones} Habitaciones |  Baños <i class="fas fa-bath"></i> ${propiedad.bath}</p>
                    <p>
                        <i class="fas fa-dollar-sign"></i> ${new Intl.NumberFormat('es-CL').format (propiedad.costo)}
                    </p>
                    <p class="${(propiedad.smoke) ? 'text-success' : 'text-danger'}">
                    <i class="${(propiedad.smoke) ? 'fas fa-smoking':'fas fa-smoking-ban'}"></i> ${(propiedad.smoke) ? 'Permitido fumar':'No se permite fumar'}
                    </p>
                    <p class="${(propiedad.pets) ? 'text-success':'text-danger'}">
                    <i class="${(propiedad.pets) ? 'fas fa-paw':'fa-solid fa-ban'}"></i> ${(propiedad.pets) ? 'Mascotas Permitidas':'No se permiten mascotas'}
                    </p>
                </div>
            </div>
        </div>`
}
deptoArriendo.innerHTML = canvasArriendo;