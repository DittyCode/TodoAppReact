import styled from 'styled-components';
import { useContext, useReducer } from 'react';
import TodoContext from '../../../store/todolist-context';
import { saveToStorage } from '../../UI/Storage/Storage';

const TodoActionWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: 70px;
	background-color: ${props => props.theme.background};
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const TodoValue = styled.h3`
	color: ${props => props.theme.color};
`;

const Buttons = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 30%;
	@media (max-width: 500px) {
		display: none;
	}
`;

const ButtonsMobile = styled.div`
	display: none;
	align-items: center;
	justify-content: space-around;
	height: 70px;
	background-color: ${props => props.theme.background};
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	margin-top: 1.5em;
	@media (max-width: 500px) {
		display: flex;
	}
`;

const Button = styled.button`
	border: none;
	background: transparent;
	cursor: pointer;
	color: ${props => props.theme.color};
	transition: 0.3s;
	&:hover {
		color: hsl(220, 98%, 61%);
	}
`;

const TodoActions = () => {
	const { todoItems, setTodoItems, filteredTodos, setFilteredTodos } =
		useContext(TodoContext);

	const filterReducer = (state, action) => {
		switch (action.type) {
			case 'All':
				return setFilteredTodos(todoItems);
			case 'Active':
				const activeTodos = todoItems.filter(todoItem => !todoItem.isComplete);
				return setFilteredTodos(activeTodos);
			case 'Completed':
				const completedTodos = todoItems.filter(
					todoItem => todoItem.isComplete
				);
				return setFilteredTodos(completedTodos);
			case 'Clear':
				const clearTodos = todoItems.filter(todoItem => !todoItem.isComplete);
				saveToStorage(clearTodos);
				return setTodoItems(clearTodos);
			default:
				console.log('Dont have this option');
				break;
		}
	};

	const [state, dispatch] = useReducer(filterReducer);

	return (
		<>
			<TodoActionWrapper>
				<TodoValue>{filteredTodos.length} items left</TodoValue>
				<Buttons>
					<Button onClick={() => dispatch({ type: 'All' })}>All</Button>
					<Button onClick={() => dispatch({ type: 'Active' })}>Active</Button>
					<Button onClick={() => dispatch({ type: 'Completed' })}>
						Completed
					</Button>
				</Buttons>
				<Button onClick={() => dispatch({ type: 'Clear' })}>
					Clear Completed
				</Button>
			</TodoActionWrapper>
			<ButtonsMobile>
				<Button onClick={() => dispatch({ type: 'All' })}>All</Button>
				<Button onClick={() => dispatch({ type: 'Active' })}>Active</Button>
				<Button onClick={() => dispatch({ type: 'Completed' })}>
					Completed
				</Button>
			</ButtonsMobile>
		</>
	);
};

export default TodoActions;
