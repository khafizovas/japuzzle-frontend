import React, { useEffect, useState } from 'react';
import Field from './Field/Field';

const App = () => {
	const task = {
		id: 'sampleID',
		colors: ['#000000'],
		hints: {
			rows: [
				[
					{ color: '#ffffff', count: 1 },
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

	return <Field size={taskSize} hints={task.hints} />;
};

export default App;
