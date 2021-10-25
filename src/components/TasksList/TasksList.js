import Task from './Task';

import '../../styles/TasksList.css';

const TasksList = (props) => {
	return (
		<div id='tasks-list'>
			{props.tasks.map((task, i) => (
				<Task key={i} info={task} selectTask={props.selectTask} />
			))}
		</div>
	);
};

export default TasksList;
