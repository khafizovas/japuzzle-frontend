import './Palette.css';

const Palette = (props) => {
	return (
		<table id='palette'>
			<tbody>
				<tr>
					<td
						className='palette-cell'
						id={
							props.selectedColor === props.background ? 'selected-color' : ''
						}
						style={{ background: props.background }}
						onClick={() => props.selectColor(props.background)}>
						X
					</td>
					{props.colors.map((color, i) => (
						<td
							key={i}
							style={{ background: color }}
							className='palette-cell'
							id={props.selectedColor === color ? 'selected-color' : ''}
							onClick={() => props.selectColor(color)}></td>
					))}
				</tr>
			</tbody>
		</table>
	);
};

export default Palette;
