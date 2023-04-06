
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'

const HeaderLeft = () => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('main', { screen: 'user' })
            }}
        >
            <Ionicons name="person" size={24} color="white" style={{ marginLeft: 10 }} />
        </TouchableOpacity>
    )
}

export default HeaderLeft