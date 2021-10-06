const Task = (props) => {
	return (
		<div>
			{props.info.solved ? <p>Solved</p> : null}
			<p>
				Size: {props.info.field.width}x{props.info.field.height}
			</p>
			<p>Colors count: {props.info.field.colors.length}</p>
			<button onClick={() => props.selectTask(props.info)}>Start</button>
		</div>
	);
};

export default Task;
