export const saveToStorage = key => {
	localStorage.setItem('todos', JSON.stringify(key));
};

export const getFromTodos = key => {
	return JSON.parse(localStorage.getItem(key)) || [];
};
