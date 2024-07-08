import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import DrawerHeader from './DrawerHeader';  

const Stack = createStackNavigator();
const Drawer= createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"
      drawerContent={(props) => <DrawerHeader {...props} />} 
       screenOptions={{
          headerShown: false,
        }}>
         <Drawer.Screen name="Store" component={HomeScreen} />
         <Drawer.Screen name="Locations" component={CartScreen} />
         <Drawer.Screen name="Blog" component={CartScreen} />
         <Drawer.Screen name="Jewelery" component={CartScreen} />
         <Drawer.Screen name="Electronics" component={CartScreen} />
         <Drawer.Screen name="Clothing" component={CartScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
