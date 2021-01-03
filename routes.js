import { EditTodo } from 'pages/EditTodo.jsx'
import { Home } from 'pages/Home.jsx'
import { TodoApp } from 'pages/TodoApp.jsx'
import { UserProfile } from 'pages/UserProfile.jsx'

export const routes = [{
        path: '/',
        component: Home,
    },
    {
        path: '/todo-app',
        component: TodoApp,
    },
    {
        path: '/user-profile',
        component: UserProfile,
    },
    {
        path: '/edit-todo/:id',
        component: EditTodo,
    }
]