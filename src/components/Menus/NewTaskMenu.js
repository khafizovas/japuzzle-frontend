const NewTaskMenu = (props) => {
	const newTask = (e) => {
		e.preventDefault();

		let inputs = document.querySelectorAll('input');

		const formData = new FormData();
		formData.append('picture', inputs[inputs.length - 1].files[0]);

		inputs = [...inputs]
			.slice(0, inputs.length - 1)
			.map((input) => input.value);

		props.createTask([inputs, formData]);
	};

	return (
		<div>
			<form onSubmit={newTask} encType='multipart/form-data'>
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
					max='5'
				/>
				<br />

				<label htmlFor='picture'>Choose an image file: </label>
				<input type='file' id='picture' name='picture' />
				<br />

				<button type='submit'>Submit</button>
			</form>
			<button onClick={props.goBack}>Go back</button>
		</div>
	);
};

export default NewTaskMenu;
