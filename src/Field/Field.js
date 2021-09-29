import './Field.css';
import InputField from '../InputField/InputField';

const Field = (props) => {
	return (
		<table id='game-field'>
			<tbody>
				<tr>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td>
						<InputField size={props.size} />
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Field;
