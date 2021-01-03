import { utilService } from 'utilService.js';
import { storageService } from 'storageService.js';

export const todoService = {
    query,
    createTodo,
    toggleTodo,
    getTodos
}
var gTodos = ['Clean the trash', 'Prepare dinner', 'Prepare lunch', 'Feed the dog'].map(
    (name, idx, demoCharAt) => createTodo(name, idx, demoCharAt = (Date.now().toString().replace(3, (idx)))))

function query() {
    return _createTodos()
}

function getTodos(todos, filterBy) {
    let todoToReutrn = [...todos]
    if (filterBy.minStars) {
        todoToReutrn = todoToReutrn.filter(todo => todo.stars >= filterBy.minStars)
    }
    if (filterBy.maxStars) {
        todoToReutrn = todoToReutrn.filter(todo => todo.stars <= filterBy.maxStars)
    }
    if (filterBy.name) {
        todoToReutrn = todoToReutrn.filter(todo => todo.name.toLowerCase().includes(filterBy.name.toLowerCase()))
    }
    if (filterBy.select === 'all') todoToReutrn = todoToReutrn
    if (filterBy.select === 'active') todoToReutrn = todoToReutrn.filter((todo) => !todo.isDone)
    if (filterBy.select === 'done') todoToReutrn = todoToReutrn.filter((todo) => todo.isDone)
    return todoToReutrn
}

function toggleTodo(todo) {
    const todoToReutrn = {...todo }
    todoToReutrn.isDone = !todoToReutrn.isDone
    return todoToReutrn
}

function _createTodos() {
    let todos = storageService.loadFromStorage('todos') || gTodos
    storageService.saveToStorage('todos', todos)
    return todos;
}

function createTodo(name, idx, demoCharAt) {
    return {
        _id: utilService.makeId(),
        name,
        stars: utilService.getRandomInt(1, 6),
        charAt: (+demoCharAt) || Date.now(),
        isDone: false
    }
}