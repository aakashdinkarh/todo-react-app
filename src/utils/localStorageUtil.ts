import { TTodos } from "../Components/types";
const darkModeLocalStorageKey = '--saved--isDarkThemeEnabled';

export const saveTodosToLocalStorage = (todos: TTodos) => {
    try {
        localStorage.setItem('storedTodos', JSON.stringify(todos));
    } catch {
        alert('Could not save, try again');
    }
}

export const getTodosFromLocalStorage = () => {
    let storedTodos: TTodos = [];
    try {
        let storedData = localStorage.getItem('storedTodos');
        if (storedData) {
            storedData = JSON.parse(storedData);
        }
        storedTodos = Array.isArray(storedData) ? storedData : [];
    } catch {
        storedTodos = [];
    }
    saveTodosToLocalStorage(storedTodos);
    return storedTodos;
}

export const saveDarkThemePreferenceToLocalStorage = (preference: boolean) => {
    try {
        localStorage.setItem(darkModeLocalStorageKey, JSON.stringify(preference));
    } catch {
        alert('Could not save theme preference, try again');
    }
}

export const getDarkThemePreferenceFromLocalStorage = () => {
    let storedDarkThemePreference = false;
    try {
        let storedData = localStorage.getItem(darkModeLocalStorageKey);
        if (storedData) {
            storedData = JSON.parse(storedData);
        }
        storedDarkThemePreference = typeof storedData === 'boolean' ? storedData : false;
    } catch {
        storedDarkThemePreference = false;
    }
    saveDarkThemePreferenceToLocalStorage(storedDarkThemePreference);
    return storedDarkThemePreference;
}

export const getSingleTodo = (id: string) => {
    const todos = getTodosFromLocalStorage();
    const numberId = Number(id);

    const todo = todos.find((todo) => todo.id === numberId);

    return todo;
}
