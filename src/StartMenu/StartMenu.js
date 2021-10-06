const StartMenu = (props) => {
	const newGame = (e) => {
		e.preventDefault();

		const selectedMode = document.querySelector('input:checked').value;
		props.startGame(selectedMode);
	};

	return (
		<div>
			<form onSubmit={newGame}>
				<div>
					<input
						type='radio'
						id='modeChoice1'
						name='mode'
						value='list'
						defaultChecked
					/>
					<label htmlFor='modeChoice1'>All games list</label>
					<br />

					<input type='radio' id='modeChoice2' name='mode' value='random' />
					<label htmlFor='modeChoice2'>
						New random game with params settings
					</label>
					<br />

					<input type='radio' id='modeChoice3' name='mode' value='create' />
					<label htmlFor='modeChoice3'>New game from picture</label>
				</div>
				<div>
					<button type='submit'>Submit</button>
				</div>
			</form>
		</div>
	);
};

export default StartMenu;
