import { View, StyleSheet } from 'react-native'
import { useState } from 'react';
import Header from '../Components/Header';
import Lista from '../Components/Lista';
import CustomModal from '../Components/Modal';
const Layout = () => {

    const [todoList, setTodoList] = useState([]);
    const [todoSelected, setTodoSelected] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    const handleAdd = (input) => {
        {
            setTodoList([...todoList, { id: Date.now(), todo: input, completed:false }]);
        }
    }

    const handleModal = (todoSelected) => {
        setModalVisible(true);
        setTodoSelected(todoSelected);
    }

    const handleDelete = () => {
        const todosFiltrados = todoList.filter(item => item !== todoSelected);
        setTodoList(todosFiltrados);
        setModalVisible(false);
    }

    const handleEdit = (text) => {
        const todoToEdit = todoList.find(todo => todo.id === todoSelected.id);
        todoToEdit.todo = text
        const todoAux = []
        todoList.forEach((item) => {
            todoAux.push(item)
        })
        setTodoList(todoAux)
    }


    const taskComplete = id => { 
        setTodoList(currentItems => currentItems.map(item => item.id === id ? { ...item, completed: !item.completed } : item))
        console.log( "taskComplete")
        console.log("Layout dentro de taskComplete") //no muestra cambio
        console.log(todoList)
    }
    console.log("Layout fuera de taskComplete:") //Muestra cambio
    console.log(todoList)

    return (
        <View style={styles.container}>
            <Header handleAdd={handleAdd}/>
            <Lista handleModal={handleModal} todoList={todoList}/>
            <CustomModal
                modalVisible={modalVisible}
                setModalVisible = {setModalVisible}
                handleEdit = {handleEdit}
                handleDelete = {handleDelete}
                todoSelected = {todoSelected}
                taskComplete ={taskComplete}
            />
        </View>
    )
}

export default Layout;

const styles = StyleSheet.create({
    container: {
        padding: 25,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
    },
})