import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Input, TodosList, Button } from '../Home.styled';
import { useCallback } from 'react';
import { saveTodosToLocalStorage } from '../../utils/localStorageUtil';
import { useThemeContext } from '../../hooks/useThemeContext';
import { TRenderTodoList, TTodo, TToDoList } from '../types';

const RenderTodoList = ({ todos = [], isDarkThemeEnabled, toggleCheck, handleEdit, deleteToDo }: TRenderTodoList) => {
	return <>
		{todos.map((todo, ind) => (
			<p key={todo.id}>
				<i>{ind + 1}. </i>
				<label className={todo.checked ? 'checked' : ''}>
					<Input type='checkbox' checked={todo.checked} onChange={() => toggleCheck(todo)} />
				</label>
				<Link to={`/todo/${todo.id}`}>{todo.text}</Link>
				<Button className='editBtn' isDarkThemeEnabled={isDarkThemeEnabled} onClick={() => handleEdit(todo)}>
					<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 121.48 122.88' xmlSpace='preserve'>
						<path
							d='m96.84 2.22 22.42 22.42c2.96 2.96 2.96 7.8 0 10.76l-12.4 12.4-33.18-33.18 12.4-12.4c2.96-2.96 7.8-2.96 10.76 0M70.18 52.19v.01c.92.92 1.38 2.14 1.38 3.34s-.46 2.41-1.38 3.34v.01l-.01.01-30.08 30.09h-.01c-.26.26-.55.48-.84.67h-.01q-.45.285-.93.45c-1.66.58-3.59.2-4.91-1.12h-.01v-.01c-.26-.26-.48-.55-.67-.84v-.01q-.285-.45-.45-.93c-.58-1.66-.2-3.59 1.11-4.91v-.01l30.09-30.09h.01c.92-.92 2.14-1.38 3.34-1.38s2.41.46 3.34 1.38zm-24.7 56.92c-8.98 2.78-17.95 5.55-26.93 8.33-21.1 6.53-21.01 10.88-15.25-9.44l9.07-32-.03-.03L67.4 20.9l33.18 33.18-55.07 55.07zM18.03 81.66l21.79 21.79c-5.9 1.82-11.8 3.64-17.69 5.45-13.86 4.27-13.8 7.13-10.03-6.22z'
							style={{ fillRule: 'evenodd', clipRule: 'evenodd' }}
						/>
					</svg>
				</Button>
				<Button className='delBtn' isDarkThemeEnabled={isDarkThemeEnabled} onClick={() => deleteToDo(todo.id)}>
					&times;
				</Button>
			</p>
		))}
	</>
};

export const ToDoList = ({ searchTerm, todos, setToDos }: TToDoList) => {
	const { isDarkThemeEnabled } = useThemeContext();
	const isSearch = searchTerm !== '';

	const resultsText = isSearch ? 'Showing search results...' : 'All todos...';
	const todosToShow = isSearch ? todos.filter((todo) => todo.text.includes(searchTerm)) : todos;

	const deleteToDo = useCallback(
		(delID: number) => {
			const newToDos = todos.filter((todo) => todo.id !== delID);
			setToDos(newToDos);
			saveTodosToLocalStorage(newToDos);
			// axios.delete(`${url}?id=${delID}`).then((res) => console.log(res));
		},
		[todos]
	);

	const handleEdit = useCallback(
		(todo: TTodo) => {
			const editedText = prompt('Edit task', todo.text);
			if (editedText === null) {
				return;
			}
			if (editedText === '') {
				return alert(`Todo can't be empty`);
			}
			const newTodos = todos.map((elem) => {
				if (elem.id !== todo.id) return elem;
				else return { id: elem.id, text: editedText, checked: elem.checked };
			});
			setToDos(newTodos);
			saveTodosToLocalStorage(newTodos);
			// axios.put(url, { id: todo.id, newText: editedText, checked: todo.checked });
		},
		[todos]
	);

	const toggleCheck = useCallback(
		(checkToDo: TTodo) => {
			const newToDos = todos.map((todo) => {
				if (todo.id !== checkToDo.id) {
					return todo;
				} else {
					// axios.put(`${url}/check`, {
					// 	id: todo.id,
					// 	newCheck: !todo.checked,
					// });
					return { id: todo.id, text: todo.text, checked: !todo.checked };
				}
			});
			setToDos(newToDos);
			saveTodosToLocalStorage(newToDos);
		},
		[todos]
	);

	if (todosToShow.length === 0) {
		return (
			<TodosList isDarkThemeEnabled={isDarkThemeEnabled}>
				<p>{resultsText}</p>
				<p>No todos to show</p>
			</TodosList>
		);
	}

	return (
		<TodosList isDarkThemeEnabled={isDarkThemeEnabled}>
			<p>{resultsText}</p>
			<RenderTodoList
				todos={todosToShow}
				isDarkThemeEnabled={isDarkThemeEnabled}
				toggleCheck={toggleCheck}
				deleteToDo={deleteToDo}
				handleEdit={handleEdit}
			/>
		</TodosList>
	);
};
