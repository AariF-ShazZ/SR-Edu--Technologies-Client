import * as types from "./actionTypes"

const initialState = {
    isLoading:false,
    isError:false,
    tasks:[]
}

export const taskReducer = (state=initialState,{type,payload}) => {
    switch(type){

        case types.GET_TASKS_REQUEST:{
            return {
                ...state,isLoading:true
            }
        }
        case types.GET_TASKS_SUCCESS:{
            return {
                ...state,isLoading:false,tasks:payload
            }
        }
        case types.GET_TASKS_FAILURE:{
            return {
                ...state,isError:true
            }
        }
        case types.POST_TASK_REQUEST:{
            return {
                ...state,isLoading:true
            }
        }
        case types.POST_TASK_SUCCESS:{
            return {
                ...state,isLoading:false
            }
        }
        case types.POST_TASK_FAILURE:{
            return {
                ...state,isError:true
            }
        }
        default: {
            return state
        }
    }
}