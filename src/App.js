import React, { useState } from 'react';
import Field from './Field/Field';

const App = () => {
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

	return (
		<Field
			size={taskSize}
			colors={task.colors}
			hints={task.hints}
			curSolution={solution}
			selectColor={setSelectedColor}
			selectedColor={selectedColor}
			changeSolution={changeSolution}
			checkSolution={checkSolution}
			resetGame={resetGame}
		/>
	);
};

export default App;
