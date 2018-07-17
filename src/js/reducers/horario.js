const horarioReducerDefaultState = [];

export default (state = horarioReducerDefaultState, action) => {
  switch (action.type){

    case 'HORARIO':
      return action.horario;

    default:
      return state
  }
}
