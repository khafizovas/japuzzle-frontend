import React, { useState } from 'react';

import Field from '../Field/Field';
import Palette from '../Palette/Palette';
import GameMenu from '../GameMenu/GameMenu';

import './Game.css';

const Game = () => {
	const task = {
		id: 'sampleID',
		colors: ['#000000'],
		hints: {
			rows: [
				[
					{ color: '#000000', count: 1 },
					{ color: '#000000', count: 1 },
				],
				[{ color: '#000000', count: 5 }],
				[
					{ color: '#000000', count: 1 },
					{ color: '#000000', count: 1 },
				],
				[{ color: '#000000', count: 5 }],
				[
					{ color: '#000000', count: 1 },
					{ color: '#000000', count: 1 },
				],
			],
			columns: [
				[
					{ color: '#000000', count: 1 },
					{ color: '#000000', count: 1 },
				],
				[{ color: '#000000', count: 5 }],
				[
					{ color: '#000000', count: 1 },
					{ color: '#000000', count: 1 },
				],
				[{ color: '#000000', count: 5 }],
				[
					{ color: '#000000', count: 1 },
					{ color: '#000000', count: 1 },
				],
			],
		},
	};

	const taskSize = {
		height: task.hints.rows.length,
		width: task.hints.columns.length,
	};

	const [solution, setSolution] = useState(
		Array(taskSize.height).fill(Array(taskSize.width).fill(null))
	);

	const [selectedColor, setSelectedColor] = useState(null);

	const changeSolution = (x, y) => {
		const newSolution = JSON.parse(JSON.stringify(solution));
		newSolution[x][y] = selectedColor;

		setSolution(newSolution);
	};

	const checkSolution = () => {
		console.log('Check solution:', solution);
	};

	const resetGame = () => {
		setSolution(Array(taskSize.height).fill(Array(taskSize.width).fill(null)));
	};

	//
	// fetch('https://japuzzle-backend.herokuapp.com/api/task/new?user=pojo')
	// 	.then((response) => {
	// 		return response.json();
	// 	})
	// 	.then((data) => {
	// 		console.log(data);
	// 	});
	//

	return (
		<div id='game'>
			<Field
				size={taskSize}
				hints={task.hints}
				curSolution={solution}
				changeSolution={changeSolution}
				checkSolution={checkSolution}
				resetGame={resetGame}
			/>

			<aside className='sidebar'>
				<Palette
					colors={task.colors}
					selectedColor={selectedColor}
					selectColor={setSelectedColor}
				/>

				<GameMenu checkSolution={checkSolution} resetGame={resetGame} />
			</aside>
		</div>
	);
};

export default Game;
