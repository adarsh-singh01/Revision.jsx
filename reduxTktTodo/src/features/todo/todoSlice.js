import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"hello ji"}]
}

export const todoSlice=createSlice({
    name:'todoApp',
    initialState,//jab key aur value same ho to aese likh skte h
    reducers:{//functions bahar bhi define krke yaha access de skte hai
        addTodo:(state,action)=>{//state me jo abhi pura array h todos ka wo jayega
            const todo={
                id:nanoid(),
                text:action.payload//kyuki jisko access krenge uska naam bhi same hai isiliye payload.text nhi likha
            }
            state.todos.push(todo)//redux me stated preserve rehti h isliye humne aese kr liya nhi to context api ki tarah spread(...) use krna pdta
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        }
    }
})

export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer