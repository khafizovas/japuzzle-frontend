import './GameMenu.css';

const GameMenu = (props) => {
	return (
		<div id='game-menu'>
			<button onClick={props.checkSolution}>Check solution</button>
		</div>
	);
};

export default GameMenu;
