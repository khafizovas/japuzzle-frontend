import './Field.css';
import InputField from '../InputField/InputField';
import HintsField from '../HintsField/HintsField';
import Palette from '../Palette/Palette';

const Field = (props) => {
	return (
		<div id='game-field'>
			<table>
				<tbody>
					<tr>
						<td></td>
						<td>
							<HintsField type='columns' hints={props.hints.columns} />
						</td>
					</tr>
					<tr>
						<td>
							<HintsField type='rows' hints={props.hints.rows} />
						</td>
						<td>
							<InputField
								width={props.size.width}
								height={props.size.height}
								curSolution={props.curSolution}
								changeSolution={props.changeSolution}
							/>
						</td>
					</tr>
				</tbody>
			</table>

			<Palette
				selectedColor={props.selectedColor}
				colors={props.colors}
				selectColor={props.selectColor}
			/>
		</div>
	);
};

export default Field;
