import { RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface Post {
  id: string; 
  title: string; 
  views: number; 
}


export type RootStackParamList = {
    Home: undefined;
    Notes:undefined;
    EditNote: {noteId: string | undefined};
    Login:undefined;
    Signup:undefined;
    Counter:undefined;
    Stopwatch:undefined;
    Calculator:undefined;
    Todo:undefined;
    Posts: undefined;
    AddPost: undefined;
  };

export type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>

export type EditScreenRouteProp = RouteProp<RootStackParamList,'EditNote'>