import React, { useState } from 'react';
import Authorization from './Authorization/Authorization';

import Game from './Game/Game';
import StartMenu from './StartMenu/StartMenu';

import './App.css';

const App = () => {
	const [user, setUser] = useState(null);
	const [task, setTask] = useState(null);

	if (!user) {
		return <Authorization signIn={setUser} />;
	}

	if (!task) {
		return <StartMenu user={user} />;
	}

	return <Game />;
};

export default App;
