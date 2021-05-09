import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import dictionary from "./localDB"


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      word: "",
      lexicalCategory: "",
      definition: "",

    }
  }
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            backgroundColor={"pink"}
            centerComponent={{ text: "Offline-Dictionary!", style: { color: "black", fontSize: 20, width: 295, justifyContent: "center", alignContent: "center" } }}
          />
          <Image source={{ uri: "https://cdn0.iconfinder.com/data/icons/zondicons/20/book-reference-512.png" }}
            style={styles.imageIcon} />
          <TextInput style={styles.inputBox}
            onChangeText={(t) => {
              this.setState({
                text: t
              })
            }}
            value={this.state.text}
          />


          <TouchableOpacity style={styles.goButton}
            onPress={() => {
              getWord = (text) => {
                var text = text.toLowerCase()
                try {
                  var word = dictionary[text]["word"]
                  var lexicalCategory = dictionary[text]["lexicalCategory"]
                  var definition = dictionary[text]["definition"]
                  this.setState({
                    "word": word,
                    "lexicalCategory": lexicalCategory,
                    "definition": definition
                  })
                }
                catch (err) {
                  alert("Sorry this word does not exist in our database yet")
                  this.setState({
                    'text': '',
                    'isSearchPressed': false
                  })
                }
              }
            }}
          ><Text style={styles.goButtonText}>
              Define!
            </Text></TouchableOpacity>



        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    width: "100%"
  },
  inputBox: {
    width: "80%",
    height: 40,
    textAlign: "center",
    borderWidth: 4,
    border: "solid",
    borderRadius: 10,
    borderColor: "black"
  },
  imageIcon: {
    width: 150,
    height: 150,
    alignSelf: "center",

  },

  goButton: {
    width: 100,
    height: 70,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    marginTop: 50,
    borderRadius: 30,
  },
  goButtonText: {
    fontSize: 25,
    fontFamily: "Georgia",
    textAlign: "center"

  },
  displayText: {
    alignSelf: "center",
    fontSize: 40,
    fontFamily: "Georgia"
  },
  chunkButton: {
    width: 200,
    height: 40,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue",
    marginTop: 10,
    borderRadius: 10,
  },

});
