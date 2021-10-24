import 'react-native-gesture-handler';
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from './assets/Icons/home.svg';
import ChatsIcon from './assets/Icons/chat_black.svg';
import PhonIcon from './assets/Icons/phone_black.svg';
import SettingIcon from './assets/Icons/settings.svg';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const ChatsStack = createNativeStackNavigator();
const CallsStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackNavigation = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen
        name="HomePage"
        getComponent={() => require('./screens/Home').default}
      />
    </HomeStack.Navigator>
  );
};

const ChatsStackNavigation = () => {
  return (
    <ChatsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ChatsStack.Screen
        name="GalleryPage"
        getComponent={() => require('./screens/Chats').default}
      />
    </ChatsStack.Navigator>
  );
};

const CallsStackkNavigation = () => {
  return (
    <CallsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <CallsStack.Screen
        name="GalleryPage"
        getComponent={() => require('./screens/Calls').default}
      />
    </CallsStack.Navigator>
  );
};

const SettingsStackNavigation = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SettingsStack.Screen
        name="SettingsPage"
        getComponent={() => require('./screens/Setting').default}
      />
    </SettingsStack.Navigator>
  );
};

const HomeTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => {
        return {
          tabBarIcon: ({color, size}) => {
            switch (route.name) {
              case 'Chats':
                return <ChatsIcon width={size} width={size} fill="#ffae42" />;
                break;
              case 'Calls':
                return <PhonIcon width={size} width={size} fill="#ffae42" />;
                break;
              case 'Setting':
                return <SettingIcon width={size} width={size} fill="#ffae42" />;
                break;
              default:
                return <HomeIcon width={size} width={size} fill="#ffae42" />;
                break;
            }
          },
        };
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeStackNavigation}
      />
      <Tab.Screen name="Chats" component={ChatsStackNavigation} />
      <Tab.Screen name="Calls" component={CallsStackkNavigation} />
      <Tab.Screen name="Setting" component={SettingsStackNavigation} />
    </Tab.Navigator>
  );
};

const ClassTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => {
        return {
          tabBarIcon: ({color, size}) => {
            switch (route.name) {
              case 'Setting':
                return <SettingIcon width={size} width={size} fill="#ffae42" />;
                break;
              default:
                return <PhonIcon width={size} width={size} fill="#ffae42" />;
                break;
            }
          },
        };
      }}>
      <Tab.Screen name="Calls" component={CallsStackkNavigation} />
      <Tab.Screen name="Setting" component={SettingsStackNavigation} />
    </Tab.Navigator>
  );
};

const HomeDrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeDrawer" component={HomeTabNavigation} />
      <Drawer.Screen name="ChallDrawer" component={ClassTabNavigation} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerTransparent: false,

            // headerShown: false,
            headerTitleStyle: {
              fontSize: 24,
              color: '#Ffa62b',
              fontWeight: '700',
            },
          }}>
          <Stack.Screen
            name="Login"
            getComponent={() => require('./screens/Login').default}
          />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeDrawerNavigation} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
