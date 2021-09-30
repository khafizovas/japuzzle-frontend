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
		Array(taskSize.height).fill(Array(taskSize.width).fill(''))
	);

	const [selectedColor, setSelectedColor] = useState('');

	const changeSolution = (x, y) => {
		const newSolution = JSON.parse(JSON.stringify(solution));
		newSolution[x][y] = selectedColor;

		setSolution(newSolution);
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
		/>
	);
};

export default App;
