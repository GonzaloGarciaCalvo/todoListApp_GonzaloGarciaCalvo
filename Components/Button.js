import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../Styles/Colors'

const ButtonCustom = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>+ tarea</Text>
        </TouchableOpacity>
    )
}

export default ButtonCustom

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.darkBrown,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 6,
        borderWidth: 2,
        width: 120,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        color: colors.white,
        
    }
})