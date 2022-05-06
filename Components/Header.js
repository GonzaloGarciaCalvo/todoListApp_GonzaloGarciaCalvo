import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import ButtonCustom from './Button'
import { colors } from '../Styles/Colors';

const Header = ({handleAdd}) => {

    const [input, setInput] = React.useState("");

    const handleAddAux = () => {
        if (input !== ""){
            handleAdd(input)
            setInput("");
        }
    }

    return (
        <View style={styles.topContainer}>
            <TextInput
                style={styles.input}
                placeholder="Agregar tarea"
                onChangeText={setInput}
                value={input}
            />
            <ButtonCustom onPress={()=> handleAddAux()} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 10,
        flex: 0.2,
    },
    input: {
        borderRadius: 5,
        borderWidth: 2,
        width: 250,
        marginRight: 10,
        paddingHorizontal: 8,
        fontSize: 22,
        height: 35,
        backgroundColor: colors.amarillento
    },
})