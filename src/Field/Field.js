import './Field.css';

const Field = (props) => {
	return (
		<div id='field'>
			<table>
				<tbody>
					{[...Array(props.size.height)].map((_, i) => (
						<tr key={i}>
							{[...Array(props.size.width)].map((_, j) => (
								<td key={i * props.size.width + j}></td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Field;
