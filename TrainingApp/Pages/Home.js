import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Button, Alert} from 'react-native';

function Homescreen() {
  return (
    <ImageBackground style={styles.background}
       source={require("../assets/BackgroundImage.jpg")}
      >
    <SafeAreaView style={styles.container}>
      <Text style={styles.Header}>Training Journal App</Text>
      <View style={styles.bottomCenter}>
        <Button
        title="Add exercise"
        onPress={() => Alert.alert('Exercise added')}
      />
      </View>
    </SafeAreaView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  Header: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  background: {
    flex: 1,
  },
  bottomCenter: {
    position: 'absolute',
    bottom: 10,
    right: 10,
},
});
export default Homescreen
