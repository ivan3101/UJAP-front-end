export const BASE_URL = 'http://localhost:3000/v1';

export const URL_LOGIN_ESTUDIANTE = `${BASE_URL}/usuarios/login`;

export const URL_LOGIN_PROFESOR = `${BASE_URL}/profesores/login`;

export const URL_GET_NOTICIAS = `${BASE_URL}/noticias`;

export const URL_HORARIO = (id, periodo = '20181CR') => `${BASE_URL}/usuarios/${id}/horario?periodo=${periodo}`;

export const URL_ARTICULO = (id, articulo = null) => `${BASE_URL}/usuarios/${id}/articulo?art=${articulo}`;

export const URL_MATERIAS_DISPONIBLES = (semestre, carrera) => `${BASE_URL}/usuarios/materias?semestre=${semestre}&carrera=${carrera}`;

export const URL_PAGOS = (id, periodo = '20181CR') => `${BASE_URL}/usuarios/${id}/pagos?periodo=${periodo}`;

export const URL_SECCIONES = carrera => `${BASE_URL}/materias/secciones?carrera=${carrera}`;

export const URL_MATERIAS_SECCION = (seccion, carrera) => `${BASE_URL}/materias/secciones/${seccion}?carrera=${carrera}`;

export const URL_HISTORICO = id => `${BASE_URL}/usuarios/${id}/historico`;

export const URL_PROFESOR_SECCION = id => `${BASE_URL}/profesores/${id}/materias/secciones`;

export const URL_MATERIAS_PROFESOR = (id, seccion) => `${BASE_URL}/profesores/${id}/materias/secciones/${seccion}`;
