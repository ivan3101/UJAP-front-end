import React from 'react';

const MateriaRow = props => (
  <tr>
    <td>{props.nombre.split('|')[0]}</td>
    <td>{props.profesor}</td>
    <td>noemail@noemail.com</td>
    <td>Nunca</td>
  </tr>
);

export default MateriaRow
