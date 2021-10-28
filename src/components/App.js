import React, { useState } from 'react';

import Game from './GameTask/Game';
import StartMenu from './Menus/StartMenu';
import Authorization from './Menus/Authorization';
import TasksList from './TasksList/TasksList';

import '../styles/App.css';

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
				console.log('in create', params);
				fetch(
					`https://japuzzle-backend.herokuapp.com/api/task/new?user=${user}&&rows=${params[0][0]}&columns=${params[0][1]}&colors=${params[0][2]}`,
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: params[1],
					}
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
		return (
			<TasksList
				tasks={tasks}
				selectTask={setTask}
				goBack={() => setTasks(null)}
			/>
		);
	}

	return <StartMenu startGame={startGame} />;
};

export default App;
