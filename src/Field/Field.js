import './Field.css';

const Field = (props) => {
	return (
		<table id='game-field'>
			<tbody>
				<tr>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td>
						<table id='game-input-field'>
							<tbody>
								{[...Array(props.size.height)].map((_, i) => (
									<tr key={i}>
										{[...Array(props.size.width)].map((_, j) => (
											<td key={i * props.size.width + j} class='game-cell'></td>
										))}
									</tr>
								))}
							</tbody>
						</table>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Field;
