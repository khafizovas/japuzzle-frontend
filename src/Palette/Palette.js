import './Palette.css';

const Palette = (props) => {
	return (
		<table id='palette'>
			<caption>Available colors</caption>
			<tbody>
				<tr>
					<td
						className='palette-cell'
						id={props.selectedColor === '' ? 'selected-color' : ''}
						onClick={() => props.selectColor('')}>
						X
					</td>
					{props.colors.map((color) => (
						<td
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
