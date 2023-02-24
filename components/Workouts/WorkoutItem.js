import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { formatDate } from "../../util/date";

function WorkoutItem({id, name, date}){
    const navigation = useNavigation();

    const formatedDate = formatDate(date)
    
    function expensePressHandler(){
        // navigation.navigate("ManageExpense", {
        //     wId: id});
        console.log("Expense Pressed");
    }
    
    return <Pressable
    onPress={expensePressHandler}
    style={({pressed}) => pressed && styles.pressed}
    >
        <View style={styles.workoutItem}>
            <View>
                <Text style={[styles.textBase, styles.name]}>{name}</Text>
                <Text style={styles.textBase}>{formatedDate}</Text>
                
            </View>
        </View>
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
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: GlobalStyles.colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 90,
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold',
    },
    pressed: {
        opacity: 0.75
    },
})