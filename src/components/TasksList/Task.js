import './Task.css';

const Task = (props) => {
	return (
		<div className='task'>
			<p className='isSolved'>{!props.info.solved ? 'un' : ''}solved</p>
			<p>
				Size: {props.info.field.width}x{props.info.field.height}
			</p>
			<p>Colors count: {props.info.field.colors.length}</p>

			{props.info.solved ? (
				<table className='task-preview'>
					<tbody>
						{[...Array(props.info.field.height)].map((_, i) => (
							<tr key={i}>
								{[...Array(props.info.field.width)].map((_, j) => (
									<td
										key={i * props.info.field.width + j}
										style={{
											background: props.info.field.cells[i][j],
										}}></td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<div
					className='unsolved-task-preview'
					style={{
						background: `${props.info.field['background-color']}`,
						fontSize: `${props.info.field.width}vw`,
						width: `${props.info.field.width}vw`,
						height: `${props.info.field.height}vw`,
					}}>
					?
				</div>
			)}

			<button onClick={() => props.selectTask(props.info)}>Play</button>
		</div>
	);
};

export default Task;
