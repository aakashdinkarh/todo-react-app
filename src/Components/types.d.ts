import { Dispatch, SetStateAction } from 'react';

export type TTodo = {
	id: number;
	text: string;
	checked: boolean;
};

export type TTodos = TTodo[];
export type TSetToDos = Dispatch<SetStateAction<TTodos>>;


export type TToDoList = {
	todos: TTodos;
	searchTerm: string;
	setToDos: TSetToDos;
};

export type TRenderTodoList = {
  todos: TTodos;
  toggleCheck: (todo: TTodo) => void;
  handleEdit: (todo: TTodo) => void;
  deleteToDo: (todoId: number) => void;
}

export type TSearchForm = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

export type TAddToDo = {
  setToDos: TSetToDos;
}