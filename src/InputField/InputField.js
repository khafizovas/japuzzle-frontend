import './InputField.css';

const InputField = (props) => {
	return (
		<table id='game-input-field'>
			<tbody>
				{[...Array(props.height)].map((_, i) => (
					<tr key={i}>
						{[...Array(props.width)].map((_, j) => (
							<td key={i * props.width + j} className='game-input-cell'></td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default InputField;
