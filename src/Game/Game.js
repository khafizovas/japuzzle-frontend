import React, { useState } from 'react';

import Field from '../Field/Field';
import Palette from '../Palette/Palette';
import GameMenu from '../GameMenu/GameMenu';

import './Game.css';

const Game = (props) => {
	const [solution, setSolution] = useState(
		Array(props.task.field.height).fill(
			Array(props.task.field.width).fill(props.task.field['background-color'])
		)
	);

	const [selectedColor, setSelectedColor] = useState(null);

	const changeSolution = (x, y) => {
		const newSolution = JSON.parse(JSON.stringify(solution));
		newSolution[x][y] = selectedColor;

		setSolution(newSolution);
	};

	const checkSolution = () => {
		// TODO Add solution check request

		console.log('Check solution:', solution);

		fetch(
			`https://japuzzle-backend.herokuapp.com/api/task/check/${props.task.id}/?user=${props.user}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ solution: solution }),
			}
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				return data;
			})
			.then((result) => {
				console.log(result);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	const resetGame = () => {
		setSolution(
			Array(props.task.field.height).fill(
				Array(props.task.field.width).fill(props.task.field['background-color'])
			)
		);
	};

	return (
		<div id='game'>
			<Field
				size={{
					height: props.task.field.height,
					width: props.task.field.width,
				}}
				hints={props.task.hints}
				curSolution={solution}
				changeSolution={changeSolution}
				checkSolution={checkSolution}
				resetGame={resetGame}
			/>

			<aside className='sidebar'>
				<Palette
					background={props.task.field['background-color']}
					colors={props.task.field.colors}
					selectedColor={selectedColor}
					selectColor={setSelectedColor}
				/>

				<GameMenu
					checkSolution={checkSolution}
					resetGame={resetGame}
					newGame={props.newGame}
				/>
			</aside>
		</div>
	);
};

export default Game;
