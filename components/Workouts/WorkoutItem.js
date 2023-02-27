import { Pressable, View, Text, StyleSheet, Image } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { formatDate } from "../../util/date";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "../../UI/IconButton";
import { deleteWorkout } from "../../util/firebase/http";
import { workoutContext } from "../../store/workoutContext";
import { useContext, useState } from "react";

function WorkoutItem({id, name, date, imgURL}){
    const workoutCtx = useContext(workoutContext)
    const formatedDate = formatDate(date)

    const [small, setSmall] = useState(true)


    function deleteHandler(){
        deleteWorkout(id)
        workoutCtx.deleteWorkout(id)
    }

    const innerComponent =
            <>
                <View>
                    <Text style={[styles.textBase, styles.name]}>{name}</Text>
                    <Text style={styles.textBase}>{formatedDate}</Text>     
                    <Image source={{uri: imgURL}} style={{width: 100, height: 100}}/>
                </View>
                {!small && 
                <View>
                    <IconButton icon="trash" size={24} 
                    color={GlobalStyles.colors.black} 
                    onPress={deleteHandler}/>
                </View>
                }
            </>
        
    
    return <Pressable
    onPress={() => setSmall(!small)}
    style={({pressed}) => pressed && styles.pressed}
    >
        {small && 
        <View style={[styles.workoutItem, styles.small]}>
            {innerComponent}
        </View>
        }
        {!small && 
        <View style={[styles.workoutItem, styles.expanded]}>
            {innerComponent}
        </View>
        }

        {/* <View style={[styles.workoutItem, styles.small]}> */}
        
    </Pressable>
}

export default WorkoutItem;

const styles = StyleSheet.create({
    workoutItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.5,
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
    },
    textBase: {
        color: GlobalStyles.colors.black,
    },
    name: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    pressed: {
        opacity: 0.75
    },
    small: {
        backgroundColor: GlobalStyles.colors.primary50,
    },
    expanded: {
        paddingBottom: 50,
        backgroundColor: GlobalStyles.colors.primary500,
    }
})