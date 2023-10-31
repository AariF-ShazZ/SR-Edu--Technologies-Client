import * as types from "./actionTypes"
import axios from "axios"
const getTasksRequest = () => {
    return {
        type: types.GET_TASKS_REQUEST
    }
}

const getTasksFailure = () => {
    return {
        type: types.GET_TASKS_FAILURE
    }
}

const getTasksSuccess = (payload) => {
    return {
        type: types.GET_TASKS_SUCCESS,
        payload
    }
}

export const getTasks = (payload) => (dispatch) => {
    console.log("payload",payload);
    dispatch(getTasksRequest())
  return axios.get(`http://localhost:8000/task/api/tasks`)
        .then((res) => {
            console.log(res.data.data)
            dispatch(getTasksSuccess(res.data.data))
        })
        .catch((err) => dispatch(getTasksFailure()))
}

const postTaskRequest = () => {
    return {
        type: types.POST_TASK_REQUEST
    }
}

const postTaskFailure = () => {
    return {
        type: types.POST_TASK_REQUEST
    }
}

const postTaskSuccess = (payload) => {
    return {
        type: types.POST_TASK_SUCCESS,
        payload
    }
}

export const postTask = (payload) => (dispatch) => {
    console.log("payload",payload);
    dispatch(postTaskRequest())
  return axios.post(`http://localhost:8000/task/api/tasks`,payload)
        .then((res) => {
            console.log(res.data.data)
            dispatch(postTaskSuccess(res.data.data))
        })
        .catch((err) => dispatch(postTaskFailure()))
}

const updateTaskRequest = () => {
    return {
        type: types.UPDATE_TASK_REQUEST
    }
}

const updateTaskFailure = () => {
    return {
        type: types.UPDATE_TASK_FAILURE
    }
}

const updateTaskSuccess = (payload) => {
    return {
        type: types.UPDATE_TASK_SUCCESS,
        payload
    }
}

export const updateTask = (id) => (dispatch) => {
    dispatch(updateTaskRequest())
  return axios.put(`http://localhost:8000/task/api/tasks/${id}`,)
        .then((res) => {
            console.log(res.data.data)
            dispatch(updateTaskSuccess(res.data.data))
        })
        .catch((err) => dispatch(updateTaskFailure()))
}