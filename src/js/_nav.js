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
      name: 'Horarios',
      url: '/home/datos',
      icon: 'icon-clock',
      children: [
        {
          name: 'Horario Por Seccion',
          url: '/home/datos/horario-seccion',
          icon: 'icon-clock',
        },
        {
          name: 'OPCIONES',
          url: '/home/INGRESAURL',
          icon: 'icon-cursor',
        },
        {
          name: 'OPCIONES',
          url: '/home/INGRESAURL',
          icon: 'icon-cursor',
        },
        {
          name: 'OPCIONES',
          url: '/home/INGRESAURL',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'Datos Academicos',
      url: '/home/datos',
      icon: 'icon-calendar',
      children: [
        {
          name: 'Historico Academico',
          url: '/home/datos/historico-academico',
          icon: 'icon-calendar',
        },
        {
          name: 'Situacion Academica',
          url: '/home/datos/situacion-academico1',
          icon: 'icon-cursor',
        },
        {
          name: 'Situacion Academica',
          url: '/home/datos/situacion-academico',
          icon: 'icon-cursor',
        },
        {
          name: 'Historico Administrativo',
          url: '/home/datos/historico-administrativo',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'Datos Administrativos',
      url: '/home/INGRESAURL',
      icon: 'icon-cursor',
      children: [
        {
          name: 'OPCIONES',
          url: '/home/INGRESAURL',
          icon: 'icon-cursor',
        },
        {
          name: 'OPCIONES',
          url: '/home/INGRESAURL',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      divider: true,
    },
    {
      title: true,
      name: 'Materias',
    },
    {
      name: 'Administracion',
      url: '/home/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Cargar Notas',
          url: '/home/1',
          icon: 'icon-star',
        },
        {
          name: 'Secciones',
          url: '/home/2',
          icon: 'icon-star',
        },
        {
          name: 'Estudiantes Inscritos',
          url: '/home/3',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Desconectar',
      url: '/login',
      icon: 'icon-layers',
      variant: 'light-dark',
    },
  ],
};
