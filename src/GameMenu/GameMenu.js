import './GameMenu.css';

const GameMenu = (props) => {
	return (
		<div id='game-menu'>
			<button onClick={props.resetGame}>Reset</button>
			<button onClick={props.checkSolution}>Check solution</button>
			<button onClick={props.newGame}>New game</button>
		</div>
	);
};

export default GameMenu;
