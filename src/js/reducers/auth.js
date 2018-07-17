const authReducerDefaultState = {
  isLoggedIn: false
};

export default (state = authReducerDefaultState, action) => {
  switch (action.type) {

    case 'LOGIN_USER':
      return {
        isLoggedIn: true,
        rol: 'Estudiante',
        nombre: "Ivan",
        apellido: "De Menezes",
        cedula: "26.539.109",
        email: "ivandmenezes@gmail.com",
        carrera: "Ingenieria en computacion",
        semestre: "9no",
        cohorte: "39",
        password: "123456",
        promedio: "15.29",
        uc: "127",
        estado: "Activo",
        beca: "0%",
        username: "idemeneze14",
        ratificado: false
      };

    case 'LOGIN_PROFESOR':
      return {
        isLoggedIn: true,
        rol: 'Profesor',
        username: "pjpadron17",
        nombre: "Jesus",
        apellido: "Padron",
        email: "jesus@gmail.com",
        cedula: "26.158.168",
        password: "123456"
      };

    case 'LOGIN_PERSONAL':
      return {
        isLoggedIn: true,
        rol: 'Personal',
        username: "aalirio18",
        nombre: "Alirio",
        apellido: "Angel",
        email: "alirio@gmail.com",
        cedula: "24.828.518",
        password: "123456"
      };

    case 'RATIFICAR':
      return {
        ...state,
        ratificado: true
      };

    default:
      return state;
  }
};
