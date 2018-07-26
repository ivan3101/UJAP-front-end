import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Login = Loadable({
  loader: () => import('./components/login/login'),
  loading: Loading,
});

const Inicio = Loadable({
  loader: () => import('./components/inicio/inicio'),
  loading: Loading,
});
const Informacion = Loadable({
  loader: () => import('./components/informacion/informacion'),
  loading: Loading,
});

const Inscripcion = Loadable({
  loader: () => import('./components/procesos/inscripcion'),
  loading: Loading
});

const HorarioSeccion = Loadable({
  loader: () => import('./components/datos-academicos/horario-seccion'),
  loading:Loading,
});

const HistoricoAcademico = Loadable({
  loader: () => import('./components/datos-academicos/historial-academico'),
  loading: Loading,
});


const SituacionAcademico = Loadable({
  loader: () => import('./components/datos-academicos/situacion-academica'),
  loading: Loading,
});

const SituacionAcademico1 = Loadable({
  loader: () => import('./components/datos-academicos/sitacdm'),
  loading: Loading,
});

const SolicitudEstudiantil = Loadable({
  loader: () => import('./components/solicitudes/peticionEst'),
  loading: Loading,
});


const RetiroAcademico = Loadable({
  loader: () => import('./components/procesos/retiroAcademico'),
  loading: Loading,
});

const Adicion = Loadable({
  loader: () => import('./components/procesos/adicion'),
  loading: Loading,
});

const SolicitudRetiroSemestre = Loadable({
  loader: () => import('./components/procesos/solicitudRetiroSemestre'),
  loading: Loading,
});

const HistoricoAdministrativo = Loadable({
  loader: () => import('./components/datos-academicos/historico-administrativo'),
  loading:Loading,
});

const Articulo58 = Loadable({
  loader: () => import('./components/solicitudes/art58'),
  loading: Loading
});

const ServicioComunitario = Loadable({
  loader: () => import('./components/solicitudes/servicio'),
  loading: Loading
});

const art48 = Loadable({
  loader: () => import('./components/solicitudes/art48'),
  loading: Loading
});

const EstadoSolicitud = Loadable({
  loader: () => import('./components/solicitudes/estadoSol'),
  loading: Loading
});

const HorarioPersonal = Loadable({
  loader: () => import('./components/datos-academicos/horario-personal'),
  loading: Loading
});

const Secciones = Loadable({
  loader: () => import('./components/administrar/secciones'),
  loading: Loading
});

const Notas = Loadable({
  loader: () => import('./components/administrar/notas'),
  loading: Loading
});

const routes = [
  { path: '/home', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/login', name: 'Login', component: Login },
  { path: '/home/inicio', name: 'Inicio', component: Inicio },
  { path: '/home/informacion', name: 'Informacion', component: Informacion },
  { path: '/home/procesos/inscripcion', name: 'Inscripcion', component: Inscripcion},
  { path: '/home/procesos/ret-acad', name: 'RetiroAcademico', component: RetiroAcademico },
  { path: '/home/procesos/adicion', name: 'Adicion', component: Adicion },
  { path: '/home/procesos/sol-ret-sem', name: 'SolicitudRetiroSemestre', component: SolicitudRetiroSemestre },
  { path:'/home/datos/horario-seccion', name: 'Horario por Seccon', component: HorarioSeccion },
  { path: '/home/solicitudes/peticionEst', name:'Peticion Estudiantil', component:SolicitudEstudiantil },
  { path: '/home/solicitudes/articulo-58', name: 'Articulo 58', component: Articulo58},
  { path: '/home/solicitudes/servicio-comunitario', name: 'Servicio Comunitario', component: ServicioComunitario},
  { path: '/home/solicitudes/articulo-48', name: 'Articulo 48', component: art48},
  { path: '/home/solicitudes/estado-solicitud', name: 'Estado de solicitudes', component: EstadoSolicitud},
  { path: '/home/datos/horario-personal', name: 'Horario Personal', component: HorarioPersonal},
  { path:'/home/datos/horario-seccion', name: 'Horario por Seccon', component: HorarioSeccion },
  {path:'/home/datos/historico-academico', name:'Historico Academico', component:HistoricoAcademico},
  {path:'/home/datos/situacion-academico', name:'Situacion Academica', component:SituacionAcademico},
  {path:'/home/datos/situacion-academico1', name:'Situacion Academica', component:SituacionAcademico1},
  {path:'/home/datos/historico-administrativo', name:'Historico Administrativo', component:HistoricoAdministrativo},
  {path: '/home/administrar/secciones', name: 'Secciones', component: Secciones},
  {path: '/home/administrar/notas', name: 'Notas', component: Notas}
];

export default routes;
