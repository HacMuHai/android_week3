import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.viewLogo}>
        <Image
          style={styles.logo_img}
          source={require('./assets/logo.png')}
        />
      </View>

      <View style={styles.title}>
        <Text>GROW YOUR BUSINESS</Text>
      </View>

      <View style={styles.content}>
        <Text>We will help you to grow your business using online server</Text>
      </View>

      <View style={styles.viewButton}>
        <Button
          title='LOGIN'
          color="#E3C000"
          style={styles.btn}

        />
        <Button
          title='SGIN UP'
          color="#E3C000"
          style={styles.btn}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CCF9',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column'
  },
  viewLogo: {
    flex: 1,
  },
  logo_img: {
    // flex:1,
    margin:'auto',
    justifyContent:'center',
    alignItems:'center',
    width: 100,
    height: 100,
    resizeMode: 'stretch'
  },
  title: {
    flex: 1,
    backgroundColor: '#00CCF9',
  },
  content: {
    flex: 1,
  },
  viewButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius:20
  }

});
