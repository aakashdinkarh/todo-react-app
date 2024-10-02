import { useCallback, useState } from "react";
import { Button, Input } from "../Home.styles";

export const AddToDo = ({ darkMode, setToDos }) => {
	const [newToDo, setNewToDo] = useState('');

	const addToDo = useCallback(() => {
		if (newToDo === '') {
		  return alert(`Todo can't be empty`);
		}
		// const id = await axios.post(url, { text: newToDo, checked: false });

		setToDos((prevTodos) => {
			const lastTodo = prevTodos[prevTodos.length - 1];

			return [...prevTodos, { id: lastTodo.id + 1, text: newToDo, checked: false }]
		});
		setNewToDo('');
	  }, [newToDo]);
	
	return (
	<div>
		<Input
			onChange={(e) => setNewToDo(e.target.value)}
			value={newToDo}
			placeholder="New Task..."
			type="text"
		/>

		<Button darkMode={darkMode} onClick={addToDo}>
			Add Task
		</Button>
	</div>
)
};
