import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { colors } from '../Styles/Colors';

const CustomModal = ({
    modalVisible,
    setModalVisible,
    handleEdit, 
    todoSelected, 
    handleDelete,
    }
) => {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
        >
            <View style={styles.modalContainer}>
                <View style={styles.content}>
                    <TouchableOpacity style={styles.close} onPress={() => setModalVisible(false)}>
                        <Text>
                            X
                        </Text>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleEdit}
                        value={todoSelected.todo}
                    />
                    <TouchableOpacity style={styles.delete} onPress={handleDelete}>
                        <Text style={styles.deleteText}>Eliminar tarea</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default CustomModal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        height: 200,
        width: 300,
        backgroundColor: colors.gray,
    },
    close: {
        borderWidth: 1,
        borderRadius: 4,
        width:14,
        marginLeft: 5,
        marginTop: 5,
        paddingLeft: 2,
        paddingRight: 2,
    },
    delete:{
        borderWidth: 1,
        borderRadius: 4,
        marginLeft: 5,
        marginTop: 5,
        paddingLeft: 2,
        paddingRight: 2,
        width:100,
        backgroundColor: colors.darkBrown,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    },
    deleteText:{
        color:'white',
    },
    input: {
        borderRadius: 8,
        borderWidth: 2,
        width: 200,
        marginRight: 10,
        paddingHorizontal: 8,
        fontSize: 18,
        height: 35,
        backgroundColor: colors.gray,
        alignSelf: 'center'
    },
})