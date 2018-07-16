import React from 'react';

const MateriaRow = props => (
  <tr>
    <td>{props.nombre}</td>
    <td>{props.horario[0].profesor}</td>
    <td>noemail@noemail.com</td>
    <td>Nunca</td>
  </tr>
);

export default MateriaRow
