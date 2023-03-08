import { View, StyleSheet, Text } from "react-native";
import WorkoutList from "./WorkoutList";


function WorkoutSummary({workouts}){

    let content = <Text>Add your first workout</Text>

    if(workouts.length > 0){
        content = <WorkoutList workouts={workouts} />
    }
    
    return (
        <View>
            {content}
        </View>
    )
}

export default WorkoutSummary;

const styles = StyleSheet.create({})

