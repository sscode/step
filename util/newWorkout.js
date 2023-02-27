import { useContext } from "react"
import { workoutContext } from "../store/workoutContext"


export default function NewWorkout(imgURL) {
    const workoutCtx = useContext(workoutContext)

    newWorkoutMaker(imgURL)

    
    const newWorkoutMaker = async (imgURL) => {
        
        console.log(imgURL)
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

}
