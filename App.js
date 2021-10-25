import 'react-native-gesture-handler';
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from './assets/Icons/home.svg';
import MusicIcon from './assets/Icons/music.svg';
import FavoriteIcon from './assets/Icons/favorite.svg';
import SettingIcon from './assets/Icons/settings.svg';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const MusicsStack = createNativeStackNavigator();
const FavoriteStack = createNativeStackNavigator();
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

const MusicsStackNavigation = () => {
  return (
    <MusicsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MusicsStack.Screen
        name="MusicPage"
        getComponent={() => require('./screens/Music').default}
      />
    </MusicsStack.Navigator>
  );
};

const FavoriteStackkNavigation = () => {
  return (
    <FavoriteStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <FavoriteStack.Screen
        name="FavoritePage"
        getComponent={() => require('./screens/Favorite').default}
      />
    </FavoriteStack.Navigator>
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
              case 'Music':
                return <MusicIcon width={size} width={size} fill="#ffae42" />;
              case 'Favorite':
                return (
                  <FavoriteIcon width={size} width={size} fill="#ffae42" />
                );
              case 'Setting':
                return <SettingIcon width={size} width={size} fill="#ffae42" />;
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
      <Tab.Screen name="Music" component={MusicsStackNavigation} />
      <Tab.Screen name="Favorite" component={FavoriteStackkNavigation} />
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

              default:
                return (
                  <FavoriteIcon width={size} width={size} fill="#ffae42" />
                );
            }
          },
        };
      }}>
      <Tab.Screen name="Favorite" component={FavoriteStackkNavigation} />
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
