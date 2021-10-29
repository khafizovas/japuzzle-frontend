import InputField from './InputField';
import HintsField from './HintsField';

import '../../styles/Field.css';

const Field = (props) => {
	return (
		<table id='game-field'>
			<tbody>
				<tr>
					<td></td>
					<td>
						<HintsField
							type='columns'
							hints={props.hints.columns}
							cellSize={props.cellSize}
						/>
					</td>
				</tr>
				<tr>
					<td>
						<HintsField
							type='rows'
							hints={props.hints.rows}
							cellSize={props.cellSize}
						/>
					</td>
					<td>
						<InputField
							width={props.size.width}
							height={props.size.height}
							curSolution={props.curSolution}
							changeSolution={props.changeSolution}
							cellSize={props.cellSize}
						/>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Field;
