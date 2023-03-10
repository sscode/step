import axios from 'axios';

const baseURL = `${process.env.REACT_APP_FIREBASE_databaseURL}`;

export async function storeWorkout(workoutData){
    const response = await axios.post(`${baseURL}/workouts.json`, 
    workoutData);
    const id = response.data.name;
    return id;
}

export async function fetchWorkout(){
    const response = await axios.get(`${baseURL}/workouts.json`);
    const workouts = [];

    for(const key in response.data){
        workouts.push({
            id: key,
            date: response.data[key].date,
            name: response.data[key].name,
            imgURL: response.data[key].imgURL,
            ergData: response.data[key].ergData,
        })
    }
    return workouts;
}

export function deleteWorkout(id){
    axios.delete(`${baseURL}/workouts/${id}.json`);
}

export function updateWorkout(id, workoutData){
     axios.put(`${baseURL}/workouts/${id}.json`, workoutData);
}