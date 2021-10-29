import '../../styles/Task.css';

const Task = (props) => {
	return (
		<div className='task'>
			<p className='isSolved'>{!props.info.solved ? 'un' : ''}solved</p>
			<p>
				Size: {props.info.field.width}x{props.info.field.height}
			</p>
			<p>Colors count: {props.info.field.colors.length}</p>

			{props.info.solved ? (
				<table
					className='task-preview'
					style={{
						width:
							(10 * props.info.field.width) / props.info.field.height + 'vh',
					}}>
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
					className='task-preview'
					style={{
						width: '10vh',
						background: `${props.info.field['background-color']}`,
					}}>
					?
				</div>
			)}

			<button onClick={() => props.selectTask(props.info)}>Play</button>
		</div>
	);
};

export default Task;
