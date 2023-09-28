import { useNavigation } from '@react-navigation/native';
import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import Contact from '../../components/User/Contact';
import DeleteUser from '../../components/User/Delete';
import Logout from '../../components/User/Logout';
import Profile from '../../components/User/Profile';
import Settings from '../../components/User/Settings';
import { userContext } from '../../store/userContext';
import MainBG from '../../UI/MainBG';

function UserScreen({ navigation }) {
    const userCtx = useContext(userContext);
    const userEmail = userCtx.user ? userCtx.user.email : '';
    
    return (
        <MainBG
        >
            <View style={styles.container}>
                <View style={styles.top}>
                    <Profile email={userEmail} />
                    <View style={styles.settings}>
                        <Settings />
                    </View>
                </View>
                <View style={styles.footer}>
                    <View style={styles.buttonContainer}>
                        <DeleteUser email={userEmail} />
                        <Logout email={userEmail} />
                    </View>
                    <Contact />
                </View>
            </View>
        </MainBG>
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
    top: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
    },
    settings: {
        width: '100%',
        paddingHorizontal: 24,
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
