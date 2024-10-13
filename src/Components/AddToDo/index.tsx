import React from 'react';
import { useCallback, useState } from "react";
import { Button, Input } from "../Home.styled";
import { saveTodosToLocalStorage } from "../../utils/localStorageUtil";
import { useThemeContext } from "../../hooks/useThemeContext";
import { TAddToDo } from "../types";

export const AddToDo = ({ setToDos }: TAddToDo) => {
	const [newToDo, setNewToDo] = useState('');
	const { isDarkThemeEnabled } = useThemeContext();

	const addToDo = useCallback(() => {
		if (newToDo === '') {
		  return alert(`Todo can't be empty`);
		}
		// const id = await axios.post(url, { text: newToDo, checked: false });

		setToDos((prevTodos) => {
			const lastTodo = prevTodos[prevTodos.length - 1] || { id: 0 };

			const newTodos = [...prevTodos, { id: lastTodo.id + 1, text: newToDo, checked: false }];

			saveTodosToLocalStorage(newTodos);
			return newTodos;
		});
		setNewToDo('');
	  }, [newToDo, setToDos]);
	
	return (
	<div>
		<Input
			onChange={(e) => setNewToDo(e.target.value)}
			value={newToDo}
			placeholder="New Task..."
			type="text"
		/>

		<Button isDarkThemeEnabled={isDarkThemeEnabled} onClick={addToDo}>
			Add Task
		</Button>
	</div>
)
};
