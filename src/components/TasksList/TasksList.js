import Task from './Task';

import '../../styles/TasksList.css';

const TasksList = (props) => {
	return (
		<>
			<button id='tasks-goback' onClick={props.goBack}>
				Go back
			</button>
			<div id='tasks-list'>
				{props.tasks.map((task, i) => (
					<Task key={i} info={task} selectTask={props.selectTask} />
				))}
			</div>
		</>
	);
};

export default TasksList;
