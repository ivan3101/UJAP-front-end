export default {
  items: [
    {
      name: 'Inicio',
      url: '/home/inicio',
      icon: 'icon-graduation',
    },
    {
      name: 'Informacion',
      url: '/home/informacion',
      icon: 'icon-info',
    },
    {
      title: true,
      name: 'Procesos',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Inscripcion academica',
      url: '/home/procesos/inscripcion',
      icon: 'icon-puzzle',
    },
    {
      name: 'Adicion, cambio o retiro',
      url: '/home/procesos/adicion',
      icon: 'icon-puzzle',
    },
    {
      name: 'Retiro academico',
      url: '/home/procesos/ret-acad',
      icon: 'icon-puzzle',
    },
    {
      name: 'Solicitud de retiro del semestre',
      url: '/home/procesos/sol-ret-sem',
      icon: 'icon-puzzle',
    },

    {
      title: true,
      name: 'Solicitudes',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Liberacion Articulo 48',
      url: '/home/solicitudes/articulo-48',
      icon: 'icon-drop'
    },
    {
      name: 'Liberacion Articulo 58',
      url: '/home/solicitudes/articulo-58',
      icon: 'icon-drop',
    },
    {
      name: 'Peticion Estudiantil',
      url: '/home/solicitudes/peticionEst',
      icon: 'icon-pencil',
    },
    {
      name: 'Servicio Comunitario',
      url: '/home/solicitudes/servicio-comunitario',
      icon: 'icon-pencil'
    },
    {
      name: 'Estado de Solicitudes',
      url: '/home/solicitudes/estado-solicitud',
      icon: 'icon-pencil'
    },
    {
      title: true,
      name: 'Consultas',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Horario Personal',
      url: '/home/datos/horario-personal',
      icon: 'icon-clock'
    },
    {
      name: 'Horario Por Seccion',
      url: '/home/datos/horario-seccion',
      icon: 'icon-clock',
    },
    {
      name: 'Historico Academico',
      url: '/home/datos/historico-academico',
      icon: 'icon-calendar',
    },
    {
      name: 'Entrega de Papeles',
      url: '/home/datos/papeles',
    },
    {
      divider: true,
    },
    {
      name: 'Desconectar',
      url: '/login',
      icon: 'icon-layers',
      variant: 'light-dark',
    },
  ],
};
