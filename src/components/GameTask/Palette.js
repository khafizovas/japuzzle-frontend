import '../../styles/Palette.css';

const Palette = (props) => {
	return (
		<>
			<p style={{ fontSize: '1em' }}>
				You can select (and unselect) a color here or just click a cell to set
				the next palette color to it.
			</p>
			<table id='palette'>
				<tbody>
					<tr>
						<td
							className='palette-cell'
							id={props.selectedColor === -1 ? 'selected-color' : ''}
							style={{
								width: props.cellSize,
								height: props.cellSize,
								background: props.background,
							}}
							onClick={() =>
								props.selectedColor === -1
									? props.selectColor(null)
									: props.selectColor(-1)
							}></td>

						{props.colors.map((color, i) => (
							<td
								key={i}
								style={{
									width: props.cellSize,
									height: props.cellSize,
									background: color,
								}}
								className='palette-cell'
								id={props.selectedColor === i ? 'selected-color' : ''}
								onClick={() =>
									i === props.selectedColor
										? props.selectColor(null)
										: props.selectColor(i)
								}></td>
						))}
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default Palette;
