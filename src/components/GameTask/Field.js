import InputField from './InputField';
import HintsField from './HintsField';

import '../../styles/Field.css';

const Field = (props) => {
	const cellSize = Math.floor(
		(0.2 * document.documentElement.scrollHeight) /
			Math.max(props.size.width, props.size.height)
	);

	return (
		<table id='game-field'>
			<tbody>
				<tr>
					<td></td>
					<td>
						<HintsField
							type='columns'
							hints={props.hints.columns}
							cellSize={cellSize}
						/>
					</td>
				</tr>
				<tr>
					<td>
						<HintsField
							type='rows'
							hints={props.hints.rows}
							cellSize={cellSize}
						/>
					</td>
					<td>
						<InputField
							width={props.size.width}
							height={props.size.height}
							curSolution={props.curSolution}
							changeSolution={props.changeSolution}
							cellSize={cellSize}
						/>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Field;
