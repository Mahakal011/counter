import {createSlice} from '@reduxjs/toolkit';


const todoSlice = createSlice({
    name: 'todos',
    initialState:{
        todos: [],
        nextId: 1
    },       

    reducers: {
        addTask: (state, action) => {
            state.todos.push({id: state.nextId, title: action.payload, completed: false});
            state.nextId++;
        },
        toggleTask : (state, action) => {
            const todo = state.todos.find((e) => e.id === action.payload);
            if (todo) {
                todo.completed =! todo.completed;
            }
        },
        deleteTask: (state, action) => {
            // return {todos: state.todos.filter((e) => e.id !== action.payload), nextId: state.nextId};
            // return {todos: state.todos.slice(0, action.payload).concat(state.todos.slice(action.payload+1)), nextId: state.nextId};
            state.todos.splice(action.payload, 1);
        },
    },

})

export const {addTask, toggleTask ,deleteTask} = todoSlice.actions
export default todoSlice.reducer