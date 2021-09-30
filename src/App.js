import React, { useEffect, useState } from 'react';
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
		Array(taskSize.height).fill(Array(taskSize.width).fill(0))
	);

	// Hardcoded
	// TODO Palette component and using of state setter in it
	const [selectedColor, setSelectedColor] = useState('#000000');

	const changeSolution = (coordinate) => {
		const newSolution = JSON.parse(JSON.stringify(solution));
		newSolution[coordinate.x][coordinate.y] = selectedColor;

		setSolution(newSolution);
	};

	return (
		<Field size={taskSize} hints={task.hints} changeSolution={changeSolution} />
	);
};

export default App;
