import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, TextInput } from "react-native";

export default function App() {
  return (
    <View className='flex-1 justify-center items-center bg-white'>
      <StatusBar style='auto' />
      <Text className='text-center mt-3 text-4xl text-slate-800 font-semibold'>
        Login
      </Text>
      <View className='mt-5 mx-5'>
        <View>
          <Text className='text-gray-600'>EMAIL:</Text>
          <TextInput
            placeholder='Enter Email...'
            className='border border-dotted p-2 text-gray-500 border-sky-400 mt-1 rounded-md'
          />
        </View>
        <View className='mt-3'>
          <Text className='text-gray-600'>PASSWORD:</Text>
          <TextInput
            secureTextEntry
            placeholder='Enter Password...'
            className='border text-gray-500 border-dotted p-2 border-sky-400 mt-1 rounded-md'
          />
        </View>

        <TouchableOpacity className='bg-teal-300 p-3 mt-8 rounded-md'>
          <Text className='text-center text-base text-white'>Login</Text>
        </TouchableOpacity>

        
        <View className='mt-6 flex-row justify-center'>
          <Text className=''>New to the application? </Text>
          <TouchableOpacity>
            <Text className='text-sky-500'>Create an Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}