import { FlatList, Text, View } from "react-native";
import WorkoutItem from "./WorkoutItem";

function renderWorkoutItem(itemData){
    return (
        <View>
            <WorkoutItem 
            {...itemData.item}
            />
        </View>
    )
}

function WorkoutList({workouts}){
    return <FlatList 
    data={workouts}
    renderItem={renderWorkoutItem}
    keyExtractor={(item) => item.id}
    />
}

export default WorkoutList;