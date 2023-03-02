import { Pressable, View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { formatDate } from "../../util/date";
import IconButton from "../../UI/IconButton";
import { useEffect, useState } from "react";
import TableOne from "../../UI/Table";
import Expanded from "./Expanded";

function WorkoutItem({id, name, date, imgURL, ergData}){
    const navigation = useNavigation();
    const formatedDate = formatDate(date)
    
    const [small, setSmall] = useState(true)
    

    function editHandler(){
        navigation.navigate('EditWorkout', 
        {name: name,
        date: date,
        id: id,
        ergData: ergData,
        imgURL: imgURL})
    }

    const innerComponent =
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={styles.headerContainer}>
                        <View style={styles.containerBorderBottom}>
                            <Text style={[styles.textBase, styles.name]}>{name}</Text>
                        </View>
                            <Text style={[styles.textBase, styles.soft]}>{formatedDate.slice(0,10)}</Text>
                    </View>
                    <View style={styles.footerContainer}>
                        <Text style={styles.footerHeader}>18,500</Text>
                        <View style={styles.footerSub}>
                            <View style={styles.footerSubGroup}>
                                <Text style={styles.footerDetailMain}>2:37</Text>
                                <Text style={styles.footerDetailSub}>/500m</Text>
                            </View>
                            <View>
                                <Text style={styles.footerDetailMain}>40:57.85</Text>
                            </View>
                            <View style={styles.footerSubGroup}>
                                <Text style={styles.footerDetailMain}>22</Text>
                                <Text style={styles.footerDetailSub}>spm</Text>
                            </View>
                        </View>
                    </View>
                    {/* <Image source={{uri: imgURL}} style={{width: 100, height: 100}}/> */}
                </View>
                {!small && 
                <View style={styles.innerDetails}>
                    {/* <TableOne /> */}
                    <Expanded ergData={ergData}/>
                    <View style={styles.iconHolder}>
                        <IconButton 
                        iconType="AntDesign"
                        icon="edit" size={24} 
                        color={GlobalStyles.colors.white} 
                        onPress={editHandler}/>
                    </View>
                </View>
                }
            </View>
        
    
    return <Pressable
    onPress={() => setSmall(!small)}
    style={({pressed}) => pressed && styles.pressed}
    >

        <ImageBackground 
        source={require('../../assets/ergbg.png')} 
        style={styles.imageBackground}>
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
        </ImageBackground>
    
    </Pressable>
}

export default WorkoutItem;

const styles = StyleSheet.create({
    imageBackground: {
        marginTop: 24,
    },
    workoutItem: {
        borderRadius: 6,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.5,
        padding: 12,
        marginVertical: 8,
    },
    container: {
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    textBase: {
        color: GlobalStyles.colors.black,
    },
    containerBorderBottom: {
        borderBottomWidth: 2,
        borderBottomColor: GlobalStyles.colors.white,
    },
    name: {
        color: GlobalStyles.colors.white,
        fontSize: 24,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    soft: {
        color: GlobalStyles.colors.gray200,
    },
    pressed: {
        opacity: 0.75
    },
    small: {
    },
    expanded: {
        // paddingBottom: 50,
    },
    innerContainer: {
        // flexDirection: 'column',
        // alignItems: 'flex-start',
        justifyContent: 'space-between',
        height: 250,
        // backgroundColor: GlobalStyles.colors.gray500,
    },
    innerDetails: {
        marginTop: 12,
    },
    footerContainer: {
        // flexDirection: 'row',
    },
    footerHeader: {
        fontSize: 36,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: GlobalStyles.colors.white,
    },
    footerDetailMain: {
        color: GlobalStyles.colors.primary500,
    },
    footerDetailSub: {
        opacity: 0.35,
        color: GlobalStyles.colors.primary500,
    },
    footerSub: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerSubGroup: {
        flexDirection: 'row',
    },
    iconHolder: {
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
})