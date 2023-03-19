import React, {useState} from 'react'
import { KeyboardAvoidingView,StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Platform } from 'react-native';
import Task from './components/Task';


export default function App() {
  // const access_token = "167wwfgchcjskankd"
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([])

  // const getTasks = async () => {
  //   try {
  //     const tasks = await AsyncStorage.getItem('tasks', setTaskItems(tasks));
  //     if (tasks !== null) {
  //       return JSON.parse(taskItems);
  //     } else {
  //       return [];
  //     }
  //   } catch (error) {
  //     alert('Error getting tasks:', error);
  //   }
  // };


  // const saveTasks = async (tasks) => {
  //   try {
  //     await AsyncStorage.setItem('tasks', JSON.stringify(taskItems));
  //   } catch (error) {
  //     alert('Error saving tasks:', error);
  //   }
  // };
  // setTaskItems(AsyncStorage.getItem(access_token, taskItems))
  // const setStorage = () => {
  //   SyncStorage.set('Tasks', taskItems);
  // }

  const handleAddTask = () => {
    if (task != "") {
    Keyboard.dismiss()
    setTaskItems([task,...taskItems])
    setTask("")
  } else {
    alert("You have to write task for add tasks!!")
  }
  }
  const completeTask = (index) => {
    let itemsCompy = [...taskItems]
    itemsCompy.splice(index, 1)
    setTaskItems(itemsCompy)
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handle'>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
          <View style={styles.items}>
            {taskItems.map((item, index) => {
              return(
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })}
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder='Write a task' value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
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
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});