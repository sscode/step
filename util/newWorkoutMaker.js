import { useContext } from "react"
import { workoutContext } from "../store/workoutContext"
import { storeWorkout } from "./firebase/http"
import { makeid } from "./random"

const workoutCtx = useContext(workoutContext)


const newWorkoutMaker = async (imgURL) => {
    const data = {
        name: makeid(6),
        imgURL: imgURL,
        date: new Date (),
        userID: '55832'
    }
    const wId = await storeWorkout(data)

    //add to context
    workoutCtx.addWorkout({...data, id: wId})
}

export default newWorkoutMaker;