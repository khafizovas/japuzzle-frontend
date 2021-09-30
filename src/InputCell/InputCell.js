import './InputCell.css';

const InputCell = (props) => {
	return (
		<td
			className='game-input-cell'
			style={{ background: props.color || '' }}
			onClick={() => props.paintCell(props.x, props.y)}></td>
	);
};

export default InputCell;
