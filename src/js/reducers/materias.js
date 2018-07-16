const materiasReducerDefaultState = []

export default (state = materiasReducerDefaultState, action) => {
  switch (action.type){

    case 'MATERIAS':
      return [
        {
          nombre: 'Programacion Matematica',
          uc: '3',
          semestre: '9no',
          horario: [{
            profesor: 'Jesus Padron',
            bloque: [
              {
                dia: 'Lunes',
                inicio: '2018-07-15 16:00:00.000',
                fin: '2018-07-15 18:25:00.000'
              },
              {
                dia: 'Miercoles',
                inicio: '2018-07-15 15:25:00.000',
                fin: '2018-07-15 17:00:00.000'
              }
            ]
          }]
        }
      ];

    default:
      return state
  }
}
