import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class ExchangeScreen extends Component{
  constructor(){
    super();
    this.state ={
      userId : firebase.auth().currentUser.email,
      itemName:"",
      description:""
    }
  }

    createUniqueId(){
        return Math.random().toString(36).substring(7);
    }

    addItem=(itemName,description)=>{
        var userName = this.state.userName

        db.collection('exchange_requests').add({
            "user": userName,
            "item_name": itemName,
            "description": description,
        })

        this.setState({
            itemName :'',
            description : ''
        })

        return Alert.alert(
            'Item ready to exchange.',
            '',
            [
                {text: 'OK', onPress: () => {
                    this.props.navigation.navigate('Homescreen')
                }}
            ]
        );
        }

    keyExtractor = (item, index) => index.toString()

    render(){
        return(
            <View style={{flex:1}}>
            <MyHeader title="Exchange" navigation ={this.props.navigation}/>
                <KeyboardAvoidingView style={styles.keyBoardStyle}>
                <TextInput
                    style ={styles.formTextInput}
                    placeholder={"Item Name"}
                    onChangeText={(text)=>{
                        this.setState({
                            itemName:text
                        })
                    }}
                    value={this.state.bookName}
                />
                <TextInput
                    style ={[styles.formTextInput,{height:300}]}
                    multiline
                    numberOfLines ={8}
                    placeholder={"Description"}
                    onChangeText ={(text)=>{
                        this.setState({
                            description:text
                        })
                    }}
                    value ={this.state.reasonToRequest}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{this.addRequest(this.state.itemName,this.state.reasonToRequest)}}
                    >
                    <Text>Request</Text>
                </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>

        

            )
    }
}

const styles = StyleSheet.create({
    keyBoardStyle : {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10,
    },
    button:{
        width:"75%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:"#ff5722",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop:20
        },
    }
)
