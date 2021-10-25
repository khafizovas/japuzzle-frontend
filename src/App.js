import React, { useState } from 'react';
import Authorization from './Authorization/Authorization';

import Game from './Game/Game';
import StartMenu from './StartMenu/StartMenu';

import './App.css';
import TasksList from './TasksList/TasksList';

const App = () => {
	const [user, setUser] = useState(null);
	const [task, setTask] = useState(null);
	const [tasks, setTasks] = useState(null);

	const startGame = (mode, params) => {
		switch (mode) {
			case 'list':
				fetch(
					`https://japuzzle-backend.herokuapp.com/api/task/list?user=${user}`
				)
					.then((response) => {
						return response.json();
					})
					.then((data) => {
						setTasks(data);
					})
					.catch((err) => {
						console.error(err);
					});
				return;
			case 'random':
				fetch(
					`https://japuzzle-backend.herokuapp.com/api/task/new?user=${user}&rows=${params[0]}&columns=${params[1]}&colors=${params[2]}`
				)
					.then((response) => {
						return response.json();
					})
					.then((data) => {
						setTask(data);
					})
					.catch((err) => {
						console.error(err);
					});

				return;
			case 'create':
				// TODO Add CreateTask component
				return;
			default:
				return;
		}
	};

	//

	if (!user) {
		return <Authorization signIn={setUser} />;
	}

	if (task) {
		return (
			<Game
				user={user}
				task={task}
				newGame={() => {
					setTask(null);
					setTasks(null);
				}}
			/>
		);
	}

	if (tasks) {
		return <TasksList tasks={tasks} selectTask={setTask} />;
	}

	return <StartMenu startGame={startGame} />;
};

export default App;
