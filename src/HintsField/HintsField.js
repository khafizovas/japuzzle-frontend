import './HintsField.css';

const HintsField = (props) => {
	const maxHintsCount = props.hints.reduce(
		(length, cur) => (cur.length > length ? cur.length : length),
		0
	);

	const hints =
		props.type === 'rows'
			? props.hints
			: props.type === 'columns'
			? [...Array(maxHintsCount)].map((_, colIndex) =>
					props.hints.map((column) => column[colIndex])
			  )
			: null;

	return (
		<table id='game-hints-field'>
			<tbody>
				{hints.map((hintsRow, i) => (
					<tr key={i}>
						{hintsRow.map((hint, j) => (
							<td key={i * j + j} className='game-hint-cell'>
								{hint}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default HintsField;
