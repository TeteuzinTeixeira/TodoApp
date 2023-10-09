import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from 'react-native';

import Task from './components/Task';

const ConfirmationScreen = ({ onConfirm, onCancel, item }) => {
  return (
    <View style={styles.confirmationContainer}>
      <Text>Tem certeza de que deseja excluir a tarefa?</Text>
      <View style={styles.confirmButtons}>
        <TouchableOpacity onPress={onConfirm} style={styles.confirmButton}>
          <Text>Confirmar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
          <Text>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function App() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  const [indexToDelete, setIndexToDelete] = useState(null);

  const handleAddTask = () => {
    if (task.trim() === '') {
      alert('Por favor, insira uma tarefa válida.');
      return;
    }
    setTaskItems([...taskItems, task]);
    setTask('');
  };

  const deleteTask = (index) => {
    setIndexToDelete(index);
    setIsConfirmationVisible(true);
  };

  const confirmDeletion = () => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(indexToDelete, 1);
    setTaskItems(itemsCopy);
    setIsConfirmationVisible(false);
  };

  const cancelDeletion = () => {
    setIsConfirmationVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="always">
      <View style={styles.container}>
        <View style={styles.taskWrapper}>
          <View style={styles.title}>
            <Text style={styles.selectionTitle}>Tarefas diarias</Text>
            <Image resizeMode="contain" style={styles.logo} source={require('./assets/LogoCortada.png')}/>
          </View>
          <View style={styles.items}>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => deleteTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
          {isConfirmationVisible && (
            <ConfirmationScreen onConfirm={confirmDeletion} onCancel={cancelDeletion} />
          )}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.writeTaskWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Digite sua tarefa"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TouchableOpacity onPress={handleAddTask}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  title:{
    flexDirection:'row',
    height:100,
    width:'100%',
    alignItems:'center',
    marginHorizontal:15,
  },
  logo:{
    height:'100%',
    margin:0,
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  selectionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    width: '75%',
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#7A58F9',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText:{
    color:'#fff',
    fontSize:22,
    fontWeight:'bold'
  },
  confirmationContainer: {
    flex: 1,
    backgroundColor: '#fff',
    width: '70%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 50,
    padding:15,
    top: 350,
    left: 65,
    right: 50,
    bottom: 350,
  },
  confirmButtons:{
    flexDirection: 'row',
  },
  confirmButton: {
    backgroundColor: '#69FF65',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  cancelButton: {
    backgroundColor: '#FF6A60',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
});