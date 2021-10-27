import Task from './Task';

import '../../styles/TasksList.css';

const TasksList = (props) => {
	return (
		<div id='tasks-list'>
			{props.tasks.map((task, i) => (
				<Task key={i} info={task} selectTask={props.selectTask} />
			))}
			<button onClick={props.goBack}>Go back</button>
		</div>
	);
};

export default TasksList;
