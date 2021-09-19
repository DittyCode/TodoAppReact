import { useContext } from 'react';
import TodoContext from '../../../store/todolist-context';

import styled from 'styled-components';
import TodoItem from '../TodoItem/TodoItem';
import TodoActions from '../TodoActions/TodoActions';

const TodosList = styled.main`
	margin-top: 2em;
	min-height: 70px;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const TodoList = () => {
	const { filteredTodos } = useContext(TodoContext);
	return (
		<TodosList>
			{filteredTodos.map(todoItem => (
				<TodoItem
					key={todoItem.id}
					name={todoItem.name}
					isComplete={todoItem.isComplete}
					id={todoItem.id}
				/>
			))}
			<TodoActions />
		</TodosList>
	);
};

export default TodoList;
