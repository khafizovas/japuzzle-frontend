import '../../styles/InputCell.css';

const InputCell = (props) => {
	return (
		<td
			className='game-input-cell'
			style={{
				width: props.size + 'px',
				height: props.size + 'px',
				fontSize: 11,
				background: props.color || '',
			}}
			onClick={() => props.paintCell(props.x, props.y)}></td>
	);
};

export default InputCell;
