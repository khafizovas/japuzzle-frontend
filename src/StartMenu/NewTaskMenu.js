const NewTaskMenu = (props) => {
	const newTask = (e) => {
		e.preventDefault();

		const params = [...document.querySelectorAll('input')].map(
			(input) => input.value
		);

		props.createTask(params);
	};

	return (
		<div>
			<form onSubmit={newTask}>
				<div>
					<label htmlFor='rows'>Rows count: </label>
					<input type='number' id='rows' name='rows' defaultValue='5' />
					<br />

					<label htmlFor='columns'>Columns count: </label>
					<input type='number' id='columns' name='columns' defaultValue='5' />
					<br />

					<label htmlFor='colors'>Colors count: </label>
					<input
						type='number'
						id='colors'
						name='colors'
						defaultValue='2'
						min='2'
					/>
				</div>
				<div>
					<button type='submit'>Submit</button>
				</div>
			</form>
		</div>
	);
};

export default NewTaskMenu;