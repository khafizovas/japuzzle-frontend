import { useState } from 'react';

const Authorization = (props) => {
	// TODO: remove pojo
	const [user, setUser] = useState('pojo');
	const [message, setMessage] = useState('Sample');

	const signIn = (ev) => {
		ev.preventDefault();

		const login = document.querySelector('#user').value;

		fetch(
			`https://japuzzle-backend.herokuapp.com/api/user/register/?user=${user}`
		)
			.then((response) => {
				console.log(response.status);
				return [response.status, response.json()];
			})
			.then(([status, data]) => {
				if (status === 302 || status === 201) {
					setUser(login);
					setMessage(data);
				}
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
