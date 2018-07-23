import React from 'react';

const MateriaRow = props => (
  <tr>
    <td>{props.materia}</td>
    <td>{props.profesor}</td>
    <td>{props.email}</td>
    <td>Nunca</td>
  </tr>
);

export default MateriaRow
