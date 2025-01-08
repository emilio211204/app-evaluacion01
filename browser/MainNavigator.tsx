import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomenScreen from "../screen/WelcomenScreen";
import Screen1 from "../screen/Screen1";
import Screen2 from "../screen/Screen2";
import Screen3 from "../screen/Screen3";
import Screen4 from "../screen/Screen4";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={WelcomenScreen} />
            <Stack.Screen name="MyTabs" component={MyTabs} />
        </Stack.Navigator>
    );
}


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Registro" component={Screen1} />
            <Tab.Screen name="lista de Equipos" component={Screen2} />
            <Tab.Screen name="Cambios" component={Screen3} />
            <Tab.Screen name="Libros" component={Screen4} />
        </Tab.Navigator>
    );
}


export default function MainNavigator() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )

}