import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import WorkoutList from "./WorkoutList";


function WorkoutSummary({workouts}){

    let content = <Text style={styles.text}>Add your first workout</Text>

    if(workouts.length > 0){
        content = <WorkoutList workouts={workouts} />
    }
    
    return (
        <View 
        style={styles.container}
        >
            {content}
        </View>
    )
}

export default WorkoutSummary;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
    },
    text: {
        marginTop: 100,
        color: GlobalStyles.colors.white,
        textAlign: 'center',
    }
})

