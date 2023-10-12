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

import styles from './Style';

const ConfirmationScreen = ({ onConfirm, onCancel, item }) => {
  return (

    <View style={styles.containerConfirmation}>
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
        {/* <View style={styles.confirmMain}> */}
        {isConfirmationVisible && (
          <ConfirmationScreen onConfirm={confirmDeletion} onCancel={cancelDeletion} />
        )}
        {/* </View> */}
        <View style={styles.taskWrapper}>
          <View style={styles.title}>
            <Text style={styles.selectionTitle}>Tarefas diarias</Text>
            <Image resizeMode="contain" style={styles.logo} source={require('./assets/LogoCortada.png')} />
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