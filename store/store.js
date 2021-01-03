import { todoService } from '../services/todoService.js'
import { storageService } from '../services/storageService.js'

const { createStore } = Redux
const todos = todoService.query();
const initialState = {
    todos,
    filterBy: '',
    user: {
        fullName: (storageService.loadFromStorage('newUserName')) || 'Puki Ben David',
        fevBgc: (storageService.loadFromStorage('newUserBgc')) || 'white',
        fevTxtColor: (storageService.loadFromStorage('newUserTxtColor')) || 'black',
    }
}

function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
            const newState = {...state, todos: [...state.todos, action.todo] }
            storageService.saveToStorage('todos', newState.todos)
            return {...newState }
        case 'FILTER':
            return {...state, todos: state.todos.filter(todo => todo.name !== action.todoId) }
        case 'REMOVE_TODO':
            return {...state,
                todos: state.todos.filter(todo => {
                    return (action.id !== todo._id)
                })
            }
        case 'UPDATE_TODO':
            return {...state,
                todos: state.todos.map(todo => {
                    if (action.newTodo._id === todo._id) return action.newTodo
                    else return todo
                })
            }
        case 'EDIT_USER_NAME':
            const newUserName = {...state, user: {...state.user, fullName: action.fullName } }
            storageService.saveToStorage('newUserName', newUserName.user.fullName)
            return {...newUserName }
        case 'EDIT_USER_BGC':
            let newUserBgc = {...state, user: {...state.user, fevBgc: action.fevBgc } }
            storageService.saveToStorage('newUserBgc', newUserBgc.user.fevBgc)
            return {...newUserBgc }
        case 'EDIT_USER_TXT_COLOR':
            let newUserTxtColor = {...state, user: {...state.user, fevTxtColor: action.fevTxtColor } }
            storageService.saveToStorage('newUserTxtColor', newUserTxtColor.user.fevTxtColor)
            return {...newUserTxtColor }

        case 'EDIT_TODO_NAME':
            var strUrl = window.location.href
            var searchParams = new URLSearchParams(strUrl);
            var id = searchParams.get("id")
            for (let p of searchParams) {
                const id = p[1]
                let newTodoName = {...state,
                    todos: state.todos.map(todo => {
                        if (id === todo._id) {
                            todo.name = action.newTodo
                            return todo
                        } else return todo
                    })
                }
                return {...newTodoName }
            }
            storageService.saveToStorage('todos')
            return {...newTodoName }

        case 'EDIT_TODO_STAR':
            var strUrl = window.location.href
            var searchParams = new URLSearchParams(strUrl);
            for (let p of searchParams) {
                const id = p[1]
                let newTodoName = {...state,
                    todos: state.todos.map(todo => {
                        if (id === todo._id) {
                            console.log(todo.stars);
                            todo.stars = action.todoStars
                            return todo
                        } else return todo
                    })
                }
                return {...newTodoName }
            }
            storageService.saveToStorage('todos')
            return {...newTodoName }
        default:
            return state
    }
}

export const store = createStore(appReducer)