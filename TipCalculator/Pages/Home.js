import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Pressable, TextInput, Keyboard} from 'react-native';
import Slider from '@react-native-community/slider';

function Homescreen() {
  const [amount, setAmount] = useState(0);
  const [amountTotal, setAmountTotal] = useState(0);
  const [tip, setTip] = useState(10);
  const [tipTotal, setTipTotal] = useState(0);
  const [numberSplit, setNumberSplit] = useState(1);
  const [amountPerPerson, setAmountPerPerson] = useState(0);
 {/*Hide keyboard*/}
  const HideKeyboard = ({ children }) => (                            
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  return (
      <View style={styles.container}>
        <View style={styles.container1}>
          <View style={styles.row}>
            <Text style={styles.Header}>{amountTotal}$</Text>
            <Text style={styles.normalText}>Total</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.Header}>{amountPerPerson}$</Text>
            <Text style={styles.normalText}>Split</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.row2}>
            <Text style={styles.normalText2space}>Type Total:</Text>
                <TextInput 
                  style={styles.input}
                  keyboardType='numeric'
                  onChangeText={value => setAmount(value)}
                  value={amount}
                  placeholder="amount"
                  maxLength={10}
                />

          </View>
          <View style={styles.row3}>
            <Text style={styles.normalText3space}>Tip</Text>
            <Text style={styles.normalText3}>{amount}%</Text>
          </View>
        </View>
        <Text style={styles.percentageText}>Tip Percentage</Text>
        <View style={styles.TipButtons}>
          <Pressable onPress={() => { setTip(10);}} style={({ pressed }) => [
                  styles.button,
                  { opacity: pressed ? 0.3 : 1 },
                ]}>
            <Text style = {styles.buttontext}>10%</Text>
          </Pressable>
          <Pressable onPress={() => { setTip(15);}} style={({ pressed }) => [
                  styles.button,
                  { opacity: pressed ? 0.3 : 1 },
                ]}>
            <Text style = {styles.buttontext}>15%</Text>
          </Pressable>
          <Pressable onPress={() => { setTip(20);}} style={({ pressed }) => [
                  styles.button,
                  { opacity: pressed ? 0.3 : 1 },
                ]}>
            <Text style = {styles.buttontext}>20%</Text>
          </Pressable>
        </View>
        <View style = {styles.customview}>
          <Text style = {styles.customText}>Custom tip amount: {tip}</Text>
          <Slider
            style={{width: 350, height: 40, marginTop: 5}}
            value = {tip}
            minimumValue={0}
            maximumValue={50}
            onValueChange = {(value) => {setTip(value)}}
            step={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
          <Text style = {styles.customText}>Choose split: {numberSplit}</Text>
          <Slider
            style={{width: 350, height: 40, marginTop: 5}}
            value = {numberSplit}
            minimumValue={1}
            maximumValue={30}
            onValueChange = {(value) => {setNumberSplit(value)}}
            step={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
        </View>
        </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  row: {
    top: 34,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container1: {
    width: '100%',
    height: 307,
    backgroundColor: '#2196F3',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    alignItems: 'center',
  },
  Header: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 60,
    lineHeight: 82,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  normalText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 33,
    textAlign: 'center',
    left: 33,
    color: 'rgba(255, 255, 255, 0.5)',
  },
  normalText2: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 33,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  normalText2space: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 33,
    textAlign: 'center',
    color: '#FFFFFF',
    marginRight: 30,
  },
  normalText3: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 33,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.5)',
  },
  normalText3space: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 33,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.5)',
    marginRight: 88,
  },
  percentageText:{
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 33,
    textAlign: 'center',
    color: '#2196F3',
    top: 20,
    marginBottom: 40,
  },
  row2:{
    top:7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  row3:{
    top:14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  background: {
    flex: 1,
  },
  line:{
    backgroundColor: '#FFFFFF',
    marginTop: 37,
    height: 1,
    width: '100%',
  },
  button:{
    backgroundColor: '#2196F3',
    width: 217,
    height: 50,
    borderRadius: 35,
    marginBottom: 20,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttontext:{
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 33,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  customview:{
    width:350,
    height:200,
    borderRadius:35,
    backgroundColor: '#2196F3',
    marginTop: 30,
  },
  customText:{
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 33,
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 10,
  },
  input:{
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 33,
    textAlign: 'center',
    color: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    minWidth:82,
    textAlign: 'center',
  },
});
export default Homescreen
