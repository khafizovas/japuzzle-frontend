import InputCell from './InputCell';

const InputField = (props) => {
	return (
		<table id='game-input-field'>
			<tbody>
				{[...Array(props.height)].map((_, i) => (
					<tr key={i}>
						{[...Array(props.width)].map((_, j) => (
							<InputCell
								key={i * props.width + j}
								x={i}
								y={j}
								size={props.cellSize}
								color={props.curSolution[i][j]}
								paintCell={props.changeSolution}
							/>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default InputField;
