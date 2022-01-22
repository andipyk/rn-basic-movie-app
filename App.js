import { View, Text, Image, TextInput, Button, Alert, FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import TodoList from './components/TodoList';
export default function App() {

  const todos = [ {id: 1, todo: 'Learn RN'}, {id: 2, todo: 'Learn Loop in RN'} ]  


  return (
    <TodoList todos={todos}/>

  //  <View style= {styles.container}>
  //    <View>
  //     <Text>Hello World</Text>
  //     { todos.map(todo => (
  //       <Text key={todo.id}>{todo.todo}</Text>
  //     )) }
  //    </View>
     
  //    {/* <View>
  //     <Text>Lets play with RN, its fun!</Text>
  //     <Image style={{ width: 66, height: 58 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
  //     <TextInput placeholder='Input your name' />
  //     <Button title="Save me!" onPress={() => Alert.alert('Left button pressed')}/>
  //    </View> */}
  //  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

