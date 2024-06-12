import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAmountById = createAsyncThunk(
    'todo/fetchByIdStatus',
    async (userId) => {
      const {data} = await axios.get(`http://localhost:8080/todos/${userId}`)
      return data
    },
  )

const initialState = {
    todos: [{ id: 1, text: 'Hello World'}],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
              id: state.todos.length + 1,
              text: action.payload,
            });
          },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter( todo => todo.id !== action.payload )
        },
        removeAllTodos: (state) => {
            state.todos = []
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchAmountById.fulfilled, (state, action) => {
            const { id, text } = action.payload; 
            const todoToUpdate = state.todos.find(todo => todo.id === parseInt(id)); 
            if (todoToUpdate) {
              console.log("🚀 ~ .addCase ~ todoToUpdate:", todoToUpdate)
              todoToUpdate.text = text; 
            }
          });
      }
})

export default todoSlice.reducer;
export const {addTodo, removeTodo, removeAllTodos} = todoSlice.actions;