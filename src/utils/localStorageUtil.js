export const saveTodosToLocalStorage = (todos) => {
    try {
        localStorage.setItem('storedTodos', JSON.stringify(todos));
    } catch {
        alert('Could not save, try again');
    }
}

export const getTodosFromLocalStorage = () => {
    let storedTodos = []
    try {
        storedTodos = localStorage.getItem('storedTodos');
        if (storedTodos) {
            storedTodos = JSON.parse(storedTodos);
        }
        storedTodos = Array.isArray(storedTodos) ? storedTodos : [];
    } catch {
        storedTodos = [];
    }
    saveTodosToLocalStorage(storedTodos);
    return storedTodos;
}

export const saveDarkThemePreferenceToLocalStorage = (preference) => {
    try {
        localStorage.setItem('darkMode', JSON.stringify(preference));
    } catch {
        alert('Could not save theme preference, try again');
    }
}

export const getDarkThemePreferenceFromLocalStorage = () => {
    let storedDarkThemePreference = false;
    try {
        storedDarkThemePreference = localStorage.getItem('darkMode');
        if (storedDarkThemePreference) {
            storedDarkThemePreference = JSON.parse(storedDarkThemePreference);
        }
        storedDarkThemePreference = typeof storedDarkThemePreference === 'boolean' ? storedDarkThemePreference : false;
    } catch {
        storedDarkThemePreference = false;
    }
    saveDarkThemePreferenceToLocalStorage(storedDarkThemePreference);
    return storedDarkThemePreference;
}

export const getSingleTodo = (id) => {
    const todos = getTodosFromLocalStorage();
    const numberId = Number(id);

    const todo = todos.find((todo) => todo.id === numberId);

    return todo;
}
