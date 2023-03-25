import React, { useState } from 'react';
import { Button, Input, ListItem, Icon } from 'react-native-elements';
import Modal from 'react-native-modal';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const Task = ({ task, onDelete, onView }) => {
    const handlePress = () => {
      onView(task);
    };
  
    return (
      <ListItem bottomDivider onPress={handlePress}  style={styles.taskContainer}>
        <Icon name='delete' onPress={() => onDelete(task.id)} />
        <ListItem.Content style={styles.taskBody}>
          <ListItem.Title>{task.title}</ListItem.Title>
          <ListItem.Subtitle>{task.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
};
  
export default function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedTask, setSelectedTask] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const handleAddTask = () => {
      if(title.trim() !== '' || description.trim() !== ''){
        const newTask = {
          id: Math.random(),
          title,
          description,
        };
          setTasks([...tasks, newTask]);
          setTitle('');
          setDescription('');
      };
  
    }
  
    const handleDeleteTask = (id) => {
      const newTasks = tasks.filter((task) => task.id !== id);
      setTasks(newTasks);
    };
  
    const handleViewTask = (task) => {
      setSelectedTask(task);
      setIsModalVisible(true);
    };
  
    const closeModal = () => {
      setSelectedTask(null);
      setIsModalVisible(false);
    };
  
    return (
    <View style={styles.view}>
      <SafeAreaView>
        <ScrollView>
          <Input
            label='Título'
            value={title}
            onChangeText={setTitle}
            containerStyle={styles.inputContainer}
            inputStyle={styles.input}
            inputContainerStyle={styles.inputContainerStyle}
          />
          <Input
            label='Descrição'
            value={description}
            onChangeText={setDescription}
            containerStyle={styles.inputContainer}
            inputStyle={styles.input}
            inputContainerStyle={styles.inputContainerStyle}
          />
          <Button
            title='Add Task'
            onPress={handleAddTask}
            buttonStyle={styles.addButton}
          />
          <View>
            {tasks.map((task) => (
              <Task key={task.id} task={task} onDelete={handleDeleteTask} onView={handleViewTask} />
            ))}
          </View>
        </ScrollView>
        <Modal isVisible={isModalVisible} onBackdropPress={closeModal} style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedTask?.title}</Text>
            <Text style={styles.modalDescription}>{selectedTask?.description}</Text>
          </View>
          <Button title='Close' onPress={closeModal} buttonStyle={styles.modalCloseButton} />
        </Modal>
      </SafeAreaView>
      </View>
    );
};


const styles = StyleSheet.create({
    view: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      backgroundColor: '#4e395d'
    },
    inputContainer: {
      width: 300,
      marginBottom: 16,
      backgroundColor: '#fafafa',
      padding: 18,
      borderRadius: 20,
  
    },
    input: {
      backgroundColor: '#D9D9D9',
      borderRadius: 10,
      marginTop: 10
    },
    addButton: {
      backgroundColor: '#9C00E6',
      borderRadius: 14
    },
    taskContainer: {
      marginTop: 20,
    },
    taskBody: {
      backgroundColor: '#D9D9D9',
      padding: 18
    },
    modalContainer: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    modalContent: {
      width:300,
      height: 100,
      backgroundColor:'#D9D9D9',
      borderRadius: 18,
    },
    modalTitle: {
      textAlign: 'center',
      fontSize: 15,
      marginTop: 10,
    },
    modalDescription: {
      textAlign: 'center',
      fontSize: 12,
      marginTop: 10,
    },
    modalCloseButton: {
      width:300,
      borderRadius: 18,
      marginTop: 10,
      backgroundColor: '#210F38',
    }
  })