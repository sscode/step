import { useNavigation } from '@react-navigation/native';
import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import Contact from '../../components/User/Contact';
import DeleteUser from '../../components/User/Delete';
import Logout from '../../components/User/Logout';
import Profile from '../../components/User/Profile';
import { userContext } from '../../store/userContext';

function UserScreen({ navigation }) {
    const userCtx = useContext(userContext);
    
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        setUserEmail(userCtx.user.length > 0 ? userCtx.user[0].email || '' : '');
    }, [userCtx.user]);

    return (
        <ImageBackground
            source={require('../../assets/bg-user.png')}
            style={styles.image}
        >
            <View style={styles.container}>
                <Profile email={userEmail} />
                <View style={styles.footer}>
                    <View style={styles.buttonContainer}>
                        <DeleteUser email={userEmail} />
                        <Logout email={userEmail} />
                    </View>
                    <Contact />
                </View>
            </View>
        </ImageBackground>
    );
}

export default UserScreen;

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    footer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'rgba(0,0,0,0.5)',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        // paddingHorizontal: 24,
        // marginTop: 24,
    },
});
