import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodoItem from './TodoItem'
import { colors } from '../../Styles/Colors'

/**
 * Componente lista para renderizar todos
 * @param handleModal Manejar la visibilidad del modal
 * @param todoList Listado de todos
 */

const Lista = ({handleModal, todoList}) => {

    const renderTodo = ({ item }) => <TodoItem onPress={handleModal} todo={item}></TodoItem>
    
    return (
        <View style={styles.itemList}>
            
            {todoList.length !== 0 && (
                <FlatList
                    data={todoList}
                    keyExtractor={todo => todo.id}
                    renderItem={renderTodo}
                />
                
            )}

            {todoList.length === 0 && <Text>No hay tareas</Text>}

        </View>
    )
}

export default Lista

const styles = StyleSheet.create({
    itemList: {
        backgroundColor: colors.celesteGris,
        width: '95%',
        padding: 20,
        flex: 0.8,
    },
})