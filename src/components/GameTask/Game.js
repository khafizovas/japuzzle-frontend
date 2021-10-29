import React, { useState } from 'react';

import Field from './Field';
import Palette from './Palette';
import GameMenu from '../Menus/GameMenu';

import '../../styles/Game.css';

const Game = (props) => {
	const cellSize = Math.floor(
		(0.25 * window.innerHeight) /
			Math.max(props.task.field.width, props.task.field.height)
	);

	const [selectedColor, setSelectedColor] = useState(null);
	const [solution, setSolution] = useState(
		Array(props.task.field.height).fill(
			Array(props.task.field.width).fill(props.task.field['background-color'])
		)
	);
	const [isSolved, setIsSolved] = useState(null);

	const changeSolution = (x, y) => {
		const newSolution = JSON.parse(JSON.stringify(solution));

		let newColorInd = selectedColor;
		if (newColorInd === null) {
			const tmp = props.task.field.colors.indexOf(solution[x][y]) + 1;
			newColorInd = tmp === props.task.field.colors.length ? -1 : tmp;
		}

		newSolution[x][y] =
			newColorInd === -1
				? props.task.field['background-color']
				: props.task.field.colors[newColorInd];

		setSolution(newSolution);
	};

	const checkSolution = () => {
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
				setIsSolved(result.correctness);
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

	return isSolved === null ? (
		<div id='game'>
			<div className='menu'>
				<Palette
					cellSize={cellSize}
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
			</div>

			<Field
				cellSize={cellSize}
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
		</div>
	) : (
		<div>
			<p>{isSolved ? 'Victory!' : "You've lost!"}</p>
			<div id='game-menu'>
				<GameMenu
					resetGame={() => {
						setIsSolved(null);
						resetGame();
					}}
					newGame={() => {
						setIsSolved(null);
						props.newGame();
					}}
					noCheck={true}
				/>
			</div>
		</div>
	);
};

export default Game;
