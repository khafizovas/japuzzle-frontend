import { useState } from 'react';

const Authorization = (props) => {
	const [user, setUser] = useState('');
	const [message, setMessage] = useState('');

	const signIn = (ev) => {
		ev.preventDefault();

		const login = document.querySelector('#user').value;

		fetch(
			`https://japuzzle-backend.herokuapp.com/api/user/register/?user=${login}`
		)
			.then((response) => {
				return [response.status, response.text()];
			})
			.then(([status, data]) => {
				if (status === 302 || status === 201) {
					setUser(login);
				}
				return data;
			})
			.then((responseMessage) => {
				setMessage(responseMessage);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	return (
		<div>
			{message.length ? (
				<>
					{message}
					<br />
					<button onClick={() => props.signIn(user)}>Continue</button>
				</>
			) : (
				<form onSubmit={signIn}>
					<label htmlFor='user'>Your username: </label>
					<input id='user' type='text' />
					<button type='submit'>Enter</button>
				</form>
			)}
		</div>
	);
};

export default Authorization;
