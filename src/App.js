import React, { useState } from 'react';
import Authorization from './Authorization/Authorization';

import Game from './Game/Game';
import StartMenu from './StartMenu/StartMenu';

import './App.css';

const App = () => {
	const [user, setUser] = useState(null);
	const [task, setTask] = useState(null);

	const startGame = () => {
		fetch(`https://japuzzle-backend.herokuapp.com/api/task/new?user=${user}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setTask(data);
			});
	};

	if (!user) {
		return <Authorization signIn={setUser} />;
	}

	if (!task) {
		return <StartMenu startGame={startGame} />;
	}

	return <Game task={task} newGame={() => setTask(null)} />;
};

export default App;
