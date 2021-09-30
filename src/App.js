import React, { useEffect, useState } from 'react';
import Field from './Field/Field';

const App = () => {
	const task = {
		size: {
			width: 5,
			height: 5,
		},
		hints: {
			rows: [[1, 1], [5], [1, 1], [5], [1, 1]],
			columns: [[1, 1], [5], [1, 1], [5], [1, 1]],
		},
	};

	const [solution, setSolution] = useState(
		Array(task.size.height).fill(Array(task.size.width).fill(0))
	);

	return <Field size={task.size} hints={task.hints} />;
};

export default App;
