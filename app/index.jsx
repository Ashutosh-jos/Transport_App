import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View, Image } from "react-native"; // ✅ Added Image
import 'react-native-reanimated';
import dinetimelogo from '../assets/images/dinetimelogo.png'; // ✅ Make sure this image exists
import emy from '../assets/images/Frame.png'; // ✅ Make sure this image exists

export default function Index() {
  const router = useRouter();

  return (
    <View className="bg-[#2b2b2b]  w-full h-full flex items-center justify-center">
      
      <Image source={dinetimelogo}  className="w-[75%] h-[25%] mb-[10%]" />

    <View className="w-full mb-[10%] flex items-center justify-center">   
        <View className="w-3/4 ">
          <TouchableOpacity
                className="m-2 py-2 bg-[#f49b33] rounded center items-center"
                onPress={() => router.push("/index1")}
              >
                <Text className="text-lg font-bold text-[#2b2b2b]">Sign up</Text>
              </TouchableOpacity>
        </View>
        <View className="w-3/4 ">
          <TouchableOpacity
                className="m-2 py-2 border border-[#f49b33] rounded center items-center"
                onPress={() => router.push("/index1")}
              >
                <Text className="text-lg font-bold text-[#f49b33]">Guest user</Text>
              </TouchableOpacity>
        </View>
       <View className="w-3/4 flex-row items-center justify-between my-4">
        <View className="flex-1 h-[1px] bg-[#f49b33] mr-2" />
        <Text className="text-[#f49b33] text-sm font-semibold">or</Text>
        <View className="flex-1 h-px bg-[#f49b33] ml-2" />
    </View>
    <View className="w-3/4 flex-row text-center items-center justify-center">
        <Text className="text-white text-sm font-semibold">Already User <Text className="text-[#f49b33] text-sm font-semibold">Sign in</Text></Text>
        
    </View>

   </View>

      <Image source={emy} className="w-[100%] h-[10%] mt-[10%]" />
      
    </View>
  );
}
