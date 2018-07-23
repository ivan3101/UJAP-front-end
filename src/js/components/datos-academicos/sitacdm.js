import React  from 'react';
import CountUp from 'react-countup';
import { Table, Fade } from 'reactstrap';

export default class SituacionAcademica extends React.Component {
  render() {
    return (
	    <Fade in>
		  <Table hover>
			<thead>
			  <tr>
				<th>Sem.</th>
				<th>Asignatura</th>
				<th>Nota</th>
				<th>U.C.</th>
			  </tr>
			</thead>
			<tbody>
			  <tr>
				<th scope="row">1</th>
				<td>Matemática I</td>
				<td>18</td>
				<td>2</td>
			  </tr>
			  <tr>
				<th scope="row">1</th>
				<td>Lógica</td>
				<td>20</td>
				<td>4</td>
			  </tr>
			  <tr>
				<th scope="row">1</th>
				<td>Geometría Analítica</td>
				<td>16</td>
				<td>4</td>
			  </tr>
			  <tr>
				<th scope="row">2</th>
				<td>Programación I</td>
				<td>19</td>
				<td>5</td>
			  </tr>
			  <tr>
				<th scope="row">2</th>
				<td>Física I</td>
				<td>14</td>
				<td>4</td>
			  </tr>
			  <tr>
				<th scope="row">2</th>
				<td>Álgebra Lineal</td>
				<td>15</td>
				<td>3</td>
			  </tr>
			  <tr>
				<th scope="row">3</th>
				<td>Ecuaciones Diferenciales</td>
				<td>13</td>
				<td>3</td>
			  </tr>
			  <tr>
				<th scope="row">3</th>
				<td>Inglés</td>
				<td>20</td>
				<td>3</td>
			  </tr>
			  <tr>
				<th scope="row">3</th>
				<td>Física II</td>
				<td>14</td>
				<td>4</td>
			  </tr>
			  <tr>
				<th scope="row"></th>
				<td></td>
				<td> <CountUp start={0} end={16.5} decimals={2} duration={3.75} />
				</td>
				<td> <CountUp start={0} end={32} duration={6} /> </td>
			  </tr>
			</tbody>
		  </Table>
		</Fade>
    );
  }
}
