import '../../styles/InputCell.css';

const InputCell = (props) => {
	return (
		<td
			className='game-input-cell'
			style={{
				width: props.size,
				height: props.size,
				background: props.color || '',
			}}
			onClick={() => props.paintCell(props.x, props.y)}></td>
	);
};

export default InputCell;
