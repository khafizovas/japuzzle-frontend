import './InputField.css';

const InputField = (props) => {
	return (
		<table id='game-input-field'>
			<tbody>
				{[...Array(props.size.height)].map((_, i) => (
					<tr key={i}>
						{[...Array(props.size.width)].map((_, j) => (
							<td key={i * props.size.width + j} className='game-cell'></td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default InputField;
