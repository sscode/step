
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'

const HeaderRight = () => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('main', { screen: 'newWorkout' })
            }}
        >
            <Ionicons name="add" size={24} color="white" style={{ marginRight: 10 }} />
        </TouchableOpacity>
    )
}

export default HeaderRight