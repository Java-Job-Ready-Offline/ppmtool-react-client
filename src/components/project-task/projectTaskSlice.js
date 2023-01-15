import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_ALL_TASKS = 'http://localhost:8383/api/task/all/'
const POST_TASK = 'http://localhost:8383/api/task/create/'
const PATCH_TASK = 'http://localhost:8383/api/task/update/'

export const fetchProjectTasks = createAsyncThunk('projectTasks/fetchProjectTasks',async (data)=>{
    console.log(data.projectId)
    const response = await axios.get(`${GET_ALL_TASKS}${data.projectId}`,{
        headers:{
            'Authorization':data.token
        }
    })
    return response.data
})

export const createProjectTask = createAsyncThunk('projectTasks/createProjectTask',async (data)=>{
    console.log(data)
    const response = await axios.post(`${POST_TASK}${data.projectId}`,data.projectTask,{
        headers:{
            'Content-Type':'application/json',
            'Authorization':data.token
        }
    })
    return response.data
})

export const updateProjectTask = createAsyncThunk('projectTasks/updateProjectTask',async (data)=>{
    console.log(data)
    const response = await axios.patch(`${PATCH_TASK}${data.projectId}/${data.projectSequence}`,data.projectTask,{
        headers:{
            'Content-Type':'application/json',
            'Authorization':data.token
        }
    })
    return response.data
})

const initialState = {
    projectTasks:[],
    status:'idle',
    error:null
}

export const projectTaskSlice = createSlice({
    name:'projectTaskSlice',
    initialState,
    reducers:{
        resetStatus: state => {
            state.status = 'idle'
        } 
    },
    extraReducers(builder){
        builder
            .addCase(fetchProjectTasks.pending,(state,action)=>{
                state.status = 'loading'
            })
            .addCase(fetchProjectTasks.fulfilled,(state,action)=>{
                state.status = 'succeeded'
                state.projectTasks = action.payload
            })
            .addCase(fetchProjectTasks.rejected,(state,action)=>{
                state.status = 'failed'
                console.error(action.error.message)
            })
            .addCase(createProjectTask.fulfilled,(state,action)=>{
                state.projectTasks.push(action.payload)
            })
            .addCase(updateProjectTask.fulfilled,(state,action)=>{
                console.log(action.payload)
            })
    }
})

export const selectTaskWithTodo = state => {
   const projectTasks = state.projectTasks.projectTasks

   return projectTasks.filter(pt => pt.status === 'TODO')
}

export const selectTaskWithProgress = state => {
    const projectTasks = state.projectTasks.projectTasks
 
    return projectTasks.filter(pt => pt.status === 'IN_PROGRESS')
 }

 export const selectTaskWithDone = state => {
    const projectTasks = state.projectTasks.projectTasks
 
    return projectTasks.filter(pt => pt.status === 'DONE')
 }

 export const getStatus = state => state.projectTasks.status
 export const getError = state => state.projectTasks.error
 export const { resetStatus } = projectTaskSlice.actions
export default projectTaskSlice.reducer