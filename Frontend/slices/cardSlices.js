import { createSlice } from '@reduxjs/toolkit'
const initialState={
    taskData:""
}
export const cardSlice = createSlice({
  name: 'cardDetails',
  initialState,
  reducers: {
    userData:(state ,action)=>{
              state.taskData=action.payload
    },
},
})

export const { userData} = cardSlice.actions

export default cardSlice.reducer