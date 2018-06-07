import React from 'react';
import Loadable from 'react-loadable'

import { Layout } from './containers/index';

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

const routes = [
  { path: '/', exact: true, name: 'Home', component: Layout },
  { path: '/login', name: 'Login', component: Login },
  { path: '/inicio', name: 'Inicio', component: Inicio },

  {path:'/datos/horario-seccion', name: 'Horario por Seccon', component: HorarioSeccion},
    {path:'/datos/historico-academico', name:'Historico Academico', component:HistoricoAcademico},
    {path:'/datos/situacion-academico', name:'Situacion Academica', component:SituacionAcademico},
  { path: '/procesos/ret-acad', name: 'RetiroAcademico', component: RetiroAcademico },
  { path: '/procesos/adicion', name: 'Adicion', component: Adicion },
  { path: '/procesos/sol-ret-sem', name: 'SolicitudRetiroSemestre', component: SolicitudRetiroSemestre },
  { path: '/informacion', name: 'Informacion', component: Informacion },
  { path:'/datos/horario-seccion', name: 'Horario por Seccon', component: HorarioSeccion },
  { path: '/solicitudes/peticionEst', name:'Peticion Estudiantil', component:SolicitudEstudiantil }
];

export default routes;
