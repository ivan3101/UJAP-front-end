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

const SolicitudEstudiantil = Loadable({
  loader: () => import('./components/solicitudes/peticionEst'),
  loading: Loading,
});

const SituacionAcademica = Loadable({
  loader: () => import('./components/datos-academicos/sitacdm'),
  loading: Loading,
});

const Adicion = Loadable({
  loader: () => import('./components/procesos/adicion'),
  loading: Loading,
});

const Adicion = Loadable({
  loader: () => import('./components/procesos/adicion'),
  loading: Loading,
});

const routes = [
  { path: '/', exact: true, name: 'Home', component: Layout },
  { path: '/login', name: 'Login', component: Login },
  { path: '/inicio', name: 'Inicio', component: Inicio },
<<<<<<< HEAD
  { path: '/adicion', name: 'Adicion', component: Adicion },
  { path: '/informacion', name: 'Informacion', component: Informacion },
  {path:'/datos/horario-seccion', name: 'Horario por Seccon', component: HorarioSeccion},
  {path:'/datos/historico-academico', name:'Historico Academico', component:HistoricoAcademico},
  {path: '/datos/sitacdm', name: 'Situacion Academica', component: SituacionAcademica },
  {path: '/solicitudes/peticionEst', name:'Peticion Estudiantil', component:SolicitudEstudiantil}
=======
  { path: '/adicion', name: 'Adicion', component: Adicion },    
>>>>>>> 3528576228a60f81a983bde1461648367226e5b8
];

export default routes;
