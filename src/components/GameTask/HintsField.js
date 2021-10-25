import '../../styles/HintsField.css';

const HintsField = (props) => {
	const maxHintsCount = props.hints.reduce(
		(length, cur) => (cur.length > length ? cur.length : length),
		0
	);

	const hints =
		props.type === 'rows'
			? props.hints.map((hintsRow) =>
					Array(maxHintsCount - hintsRow.length)
						.fill('')
						.concat(hintsRow)
			  )
			: props.type === 'columns'
			? [...Array(maxHintsCount)].map((_, rowIndex) =>
					props.hints.map(
						(column) => column[column.length - (maxHintsCount - rowIndex)] || ''
					)
			  )
			: null;

	return (
		<table id='game-hints-field'>
			<tbody>
				{hints.map((hintsPart, i) => (
					<tr key={i}>
						{hintsPart.map((hint, j) => (
							<td
								key={i * j + j}
								className='game-hint-cell'
								style={{ color: hint.color }}>
								{hint.count}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default HintsField;
