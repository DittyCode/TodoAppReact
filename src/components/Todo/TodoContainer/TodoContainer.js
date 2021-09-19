import React, { useState, useEffect } from 'react';
import TodoContext from './../../../store/todolist-context';

import TodoHeader from '../TodoHeader/TodoHeader';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

import styled from 'styled-components';
import { getFromTodos } from '../../UI/Storage/Storage';

const Todo = styled.div`
	margin: 0 auto;
	width: 50%;
	color: white;
	min-height: 40em;
	@media (max-width: 774px) {
		width: 70%;
	}
	@media (max-width: 500px) {
		width: 85%;
	}
`;

const TodoContainer = () => {
	const [todoItems, setTodoItems] = useState([]);
	const [filteredTodos, setFilteredTodos] = useState([]);

	useEffect(() => {
		setFilteredTodos(todoItems);
	}, [todoItems]);

	useEffect(() => {
		setTodoItems(getFromTodos('todos'));
	}, []);

	return (
		<TodoContext.Provider
			value={{ todoItems, setTodoItems, filteredTodos, setFilteredTodos }}
		>
			<Todo>
				<TodoHeader />
				<TodoForm />
				<TodoList />
			</Todo>
		</TodoContext.Provider>
	);
};
export default TodoContainer;
