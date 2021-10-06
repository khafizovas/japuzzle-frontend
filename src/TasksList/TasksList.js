import Task from '../Task/Task';

const TasksList = (props) => {
	return (
		<div>
			{props.tasks.map((task, i) => (
				<Task key={i} info={task} selectTask={props.selectTask} />
			))}
		</div>
	);
};

export default TasksList;
