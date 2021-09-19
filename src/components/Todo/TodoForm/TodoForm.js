import React, { useState, useContext } from 'react';
import { saveToStorage, getFromTodos } from '../../UI/Storage/Storage';
import TodoContext from '../../../store/todolist-context';
import nextId from 'react-id-generator';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';
import icon from './../../../assets/images/icon-check.svg';

const Form = styled.form`
	display: flex;
	align-items: center;
	margin-top: 2em;
	height: 70px;
	background-color: ${props => props.theme.background};
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Input = styled.input`
	width: 90%;
	height: 100%;
	padding-left: 1em;
	border: none;
	background: transparent;
	color: ${props => props.theme.color};
	font-size: 2rem;
	@media (max-width: 500px) {
		width: 80%;
		font-size: 1.5rem;
	}
`;

const Error = styled.div`
	margin-top: 2em;
	text-align: center;
	color: red;
`;

const TodoForm = props => {
	const { filteredTodos, setFilteredTodos, setTodoItems } =
		useContext(TodoContext);
	const [inputValue, setInputValue] = useState('');
	const [complete, setComplete] = useState(false);
	const [error, setError] = useState(false);
	const todoId = nextId();

	const handleSubmit = e => {
		e.preventDefault();
		if (!inputValue) setError(true);
		else {
			setError(false);
			setTodoItems(prevState => [
				...prevState,
				{ id: todoId, name: inputValue, isComplete: complete },
			]);

			if (getFromTodos('todos') === null) {
				saveToStorage([
					{
						id: todoId,
						name: inputValue,
						isComplete: complete,
					},
				]);
			} else {
				const items = [
					...getFromTodos('todos'),
					{
						id: todoId,
						name: inputValue,
						isComplete: complete,
					},
				];
				saveToStorage(items);
			}
			setInputValue('');
		}
	};
	const handleChange = e => {
		setInputValue(e.target.value);
	};
	const handleClick = () => {
		setComplete(!complete);
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Button onClick={handleClick} complete={complete}>
					{complete && <img src={icon} alt='complete tasks icon' />}
				</Button>
				<Input
					value={inputValue}
					type='text'
					placeholder='Create a new todo...'
					onChange={handleChange}
				/>
			</Form>
			{error && <Error>Input can't be empty</Error>}
		</>
	);
};
export default TodoForm;
