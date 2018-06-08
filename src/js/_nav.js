export default {
  items: [
    {
      name: 'Inicio',
      url: '/inicio',
      icon: 'icon-graduation',
    },
    {
      name: 'Informacion',
      url: '/informacion',
      icon: 'icon-info',
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
      name: 'Liberacion Articulo 58',
      url: '/solicitudes/articulo-58',
      icon: 'icon-drop',
    },
    {
      name: 'Peticion Estudiantil',
      url: '/solicitudes/peticionEst',
      icon: 'icon-pencil',
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
      url: '/procesos/INGRESAURL',
      icon: 'icon-puzzle',
    },
    {
      name: 'Retiro academico',
      url: '/procesos/ret-acad',
      icon: 'icon-puzzle',
    },
    {
      name: 'Adicion, cambio o retiro',
      url: '/procesos/adicion',
      icon: 'icon-puzzle',
    },
    {
      name: 'Solicitud de retiro del semestre',
      url: '/procesos/sol-ret-sem',
      icon: 'icon-puzzle',
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
      url: '/datos',
      icon: 'icon-clock',
      children: [
        {
          name: 'Horario Por Seccion',
          url: '/datos/horario-seccion',
          icon: 'icon-clock',
        },
        {
          name: 'OPCIONES',
          url: '/INGRESAURL',
          icon: 'icon-cursor',
        },
        {
          name: 'OPCIONES',
          url: '/INGRESAURL',
          icon: 'icon-cursor',
        },
        {
          name: 'OPCIONES',
          url: '/INGRESAURL',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'Datos Academicos',
      url: '/datos',
      icon: 'icon-calendar',
      children: [
        {
          name: 'Historico Academico',
          url: '/datos/historico-academico',
          icon: 'icon-calendar',
        },
        {
          name: 'Situacion Academica',
          url: '/datos/situacion-academico1',
          icon: 'icon-cursor',
        },
        {
          name: 'Situacion Academica',
          url: '/datos/situacion-academico',
          icon: 'icon-cursor',
        },
        {
          name: 'Historico Administrativo',
          url: '/datos/historico-administrativo',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'Datos Administrativos',
      url: '/INGRESAURL',
      icon: 'icon-cursor',
      children: [
        {
          name: 'OPCIONES',
          url: '/INGRESAURL',
          icon: 'icon-cursor',
        },
        {
          name: 'OPCIONES',
          url: '/INGRESAURL',
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
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Cargar Notas',
          url: '/1',
          icon: 'icon-star',
        },
        {
          name: 'Secciones',
          url: '/2',
          icon: 'icon-star',
        },
        {
          name: 'Estudiantes Inscritos',
          url: '/3',
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
