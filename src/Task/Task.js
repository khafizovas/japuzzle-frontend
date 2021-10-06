// TODO Remove inline styles
const Task = (props) => {
	return (
		<div>
			<p style={{ textTransform: 'capitalize' }}>
				{!props.info.solved ? 'un' : ''}solved
			</p>
			<p>
				Size: {props.info.field.width}x{props.info.field.height}
			</p>
			<p>Colors count: {props.info.field.colors.length}</p>
			{props.info.solved ? (
				<table
					style={{
						margin: '0 auto 10% auto',
						width: 'fit-content',
						border: 'solid 0.1vw',
					}}>
					<tbody>
						{[...Array(props.info.field.height)].map((_, i) => (
							<tr key={i}>
								{[...Array(props.info.field.width)].map((_, j) => (
									<td
										key={i * props.info.field.width + j}
										style={{
											width: '1vw',
											height: '1vw',
											background: props.info.field.cells[i][j],
										}}></td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<div
					style={{
						margin: '0 auto 10% auto',
						fontSize: `${props.info.field.width}vw`,
						width: `${props.info.field.width}vw`,
						height: `${props.info.field.height}vw`,
						border: 'solid 0.1vw',
					}}>
					?
				</div>
			)}

			<button onClick={() => props.selectTask(props.info)}>Play</button>
		</div>
	);
};

export default Task;
