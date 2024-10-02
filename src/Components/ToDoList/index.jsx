import { Link } from "react-router-dom";
import {
	Input,
	TodosList,
	Button,
} from "../Home.styles";
import { useCallback } from "react";
import { saveTodosToLocalStorage } from "../../utils/localStorageUtil";

const RenderTodoList = ({ todos = [], darkMode, toggleCheck, handleEdit, deleteToDo }) => {
	return todos.map((todo, ind) => (
		<p key={todo.id}>
			<i>{ind + 1}. </i>
			<label className={todo.checked ? "checked" : ""}>
				<Input
					type="checkbox"
					checked={todo.checked}
					onChange={() => toggleCheck(todo)}
				/>
			</label>
			<Link to={`todo/${todo.id}`}>{todo.text}</Link>
			<Button
				className="editBtn"
				darkMode={darkMode}
				onClick={() => handleEdit(todo)}
			>
				&#128393;
			</Button>
			<Button
				className="delBtn"
				darkMode={darkMode}
				onClick={() => deleteToDo(todo.id)}
			>
				&times;
			</Button>
		</p>
	));
}

export const ToDoList = ({
	searchTerm,
	todos,
	setToDos,
	darkMode,
}) => {
	const isSearch = searchTerm === '';

	const resultsText = isSearch ? 'All todos...' : 'Showing search results...';
	const todosToShow = isSearch ? todos.filter((todo) => todo.text.includes(searchTerm)) : todos;


	const deleteToDo = useCallback((delID) => {
		const newToDos = todos.filter((todo) => todo.id !== delID);
		setToDos(newToDos);
		saveTodosToLocalStorage(newToDos);
		// axios.delete(`${url}?id=${delID}`).then((res) => console.log(res));
	}, [todos]);

	const handleEdit = useCallback((todo) => {
		const editedText = prompt("Edit task", todo.text);
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
		// axios.put(url, { id: todo.id, newText: editedText, checked: todo.checked });
	}, [todos]);

	//toggle check function
	const toggleCheck = useCallback((checkToDo) => {
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
	}, [todos]);


	if (todosToShow.length === 0) {
		return (
			<TodosList darkMode={darkMode}>
				<p>{resultsText}</p>
				<p>No todos to show</p>
			</TodosList>
		)
	}

	return (
		<TodosList darkMode={darkMode}>
			<p>{resultsText}</p>
			<RenderTodoList todos={todosToShow} darkMode={darkMode} toggleCheck={toggleCheck} deleteToDo={deleteToDo} handleEdit={handleEdit} />
		</TodosList>
	);
};
