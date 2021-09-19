import { useContext } from 'react';
import TodoContext from '../../../store/todolist-context';
import icon from './../../../assets/images/icon-check.svg';
import iconDelete from './../../../assets/images/icon-cross.svg';

import styled from 'styled-components';
import Button from '../../UI/Button/Button';
import { saveToStorage } from '../../UI/Storage/Storage';

const Item = styled.div`
	display: flex;
	align-items: center;
	height: 70px;
	background-color: ${props => props.theme.background};
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const TodoValue = styled.h2`
	padding-left: 1em;
	color: ${props => props.theme.color};
	font-weight: normal;
	font-size: 2rem;
	width: 80%;
	@media (max-width: 500px) {
		font-size: 1.5rem;
		width: 70%;
	}
`;

const DeleteButton = styled.button`
	border: none;
	background: transparent;
	cursor: pointer;
`;

const TodoItem = ({ id, name, isComplete }) => {
	const { todoItems, setTodoItems } = useContext(TodoContext);

	const decoration = isComplete ? 'line-through' : 'none';

	const handleClick = () => {
		const changedItems = todoItems.map((todoItem, idx) => {
			if (todoItem.name === name) {
				todoItem.isComplete = !todoItem.isComplete;
				return { ...todoItem };
			}
			return todoItem;
		});
		saveToStorage(changedItems);
		setTodoItems(prevState => [...changedItems]);
	};

	const handleDeleteClick = () => {
		const withoutDeleteItem = todoItems.filter(todoItem => todoItem.id !== id);
		saveToStorage(withoutDeleteItem);
		setTodoItems(withoutDeleteItem);
	};

	return (
		<Item>
			<Button complete={isComplete} onClick={handleClick}>
				{isComplete && <img src={icon} alt='complete tasks icon' />}
			</Button>
			<TodoValue style={{ textDecoration: decoration }}>{name}</TodoValue>
			<DeleteButton onClick={handleDeleteClick}>
				<img src={iconDelete} alt='delete closest task icon' />
			</DeleteButton>
		</Item>
	);
};

export default TodoItem;
