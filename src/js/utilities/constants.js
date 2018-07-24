export const BASE_URL = 'http://localhost:3000/v1';

export const URL_LOGIN_ESTUDIANTE = `${BASE_URL}/usuarios/login`;

export const URL_LOGIN_PROFESOR = `${BASE_URL}/profesores/login`;

export const URL_GET_NOTICIAS = `${BASE_URL}/noticias`;

export const URL_HORARIO = id => `${BASE_URL}/usuarios/${id}/horario`;

export const URL_ARTICULO = (id, articulo) => `${BASE_URL}/usuarios/${id}/articulo?art=${articulo}`;
