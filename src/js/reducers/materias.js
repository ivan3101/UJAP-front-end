const materiasReducerDefaultState = [];

export default (state = materiasReducerDefaultState, action) => {
  switch (action.type){

    case 'MATERIAS':
      return [
        {
          nombre: 'Programacion Matematica',
          uc: '3',
          semestre: '9no',
          estado: 'Aprobada'
        },
        {
          nombre: 'Interfaces con el usuario',
          uc: '5',
          semestre: '9no',
          estado: 'Aprobada'
        },
        {
          nombre: 'Cultura',
          uc: '2',
          semestre: '9no',
          estado: 'Aprobada'
        }
      ];

    default:
      return state
  }
}
