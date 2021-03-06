import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../Styles/Colors'

const TodoItem = ({todo, onPress}) => {
  return (
    <View style = {styles.itemContainer}>
      <TouchableOpacity onPress={()=>onPress(todo)}>
        {/* <Text style = {styles.text}>{todo.todo}</Text> */}
        <Text style={[styles.text, 
        { textDecorationLine: todo.completed === true ? 'line-through' : null,
          textDecorationStyle:  todo.completed === true ? 'double': null,
          fontWeights: todo.completed === true ? 'normal': null,                      
        }]}>{todo.todo}</Text>
      </TouchableOpacity>

    </View>
  )
}

export default TodoItem

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: colors.darkBrown,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    text:{
        color: colors.white,
        fontSize: 22,
        fontWeight:500
    }
})

