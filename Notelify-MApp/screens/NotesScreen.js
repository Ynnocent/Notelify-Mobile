import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const NoteScreen = ({ navigation }) => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const handleSaveNote = () => {
    setNotes([...notes, note]);
    setNote('');
  };

  const renderItem = ({ item }) => (
    <View style={styles.note}>
      <TextInput
        value={item}
        style={styles.noteText}
        editable={false}
        multiline={true}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        value={note}
        onChangeText={text => setNote(text)}
        placeholder="Enter your note here"
        style={styles.input}
        multiline={true}
        numberOfLines={4}
      />
      <Button title="Save" onPress={handleSaveNote} color={'gold'}/>
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.notesList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    padding: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    color:'white',
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  note: {
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  noteText: {
    color:'white',
    fontSize: 30,
  },
  notesList: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
});

export default NoteScreen;