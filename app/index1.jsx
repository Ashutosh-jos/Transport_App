// import { useRouter } from "expo-router";
// import { View, Text, Image, TouchableOpacity } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import React from "react";

// export default function TransportIntroScreen() {
//   const router = useRouter();

//   return (
//     <View className="flex-1 bg-[#F2F0F8] items-center justify-center px-6">
//       <StatusBar style="dark" />

//       {/* Illustration */}
//       <Image
//         source={require("../assets/images/indiaMap.png")} // Your map or transport-themed image
//         resizeMode="contain"
//         className="w-full h-[45%] mb-6"
//       />

//       {/* Content Box */}
//       <View className="bg-white shadow-lg rounded-3xl px-6 pt-10 pb-8 w-full items-center">
//         <Text className="text-lg text-[#2E1F4D]">Simplify your</Text>
//         <Text className="text-2xl font-bold text-[#705AA9] mb-2">Transport Journey</Text>
//         <Text className="text-sm text-gray-500 text-center mb-6">
//           Join the largest transport network in India and streamline all your bookings in one place.
//         </Text>

//         {/* Pagination */}
//         <View className="flex-row mb-6 space-x-2">
//           <View className="w-3 h-3 rounded-full bg-[#705AA9]" />
//           <View className="w-3 h-3 rounded-full bg-[#D8CDEA]" />
//           <View className="w-3 h-3 rounded-full bg-[#D8CDEA]" />
//         </View>

//         {/* CTA Button */}
//         <TouchableOpacity
//           onPress={() => router.push("/index2")}
//           className="bg-[#705AA9] px-10 py-3 rounded-xl shadow-md"
//         >
//           <Text className="text-white text-base font-semibold">Get Started</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }




import { useRouter } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function TransportIntroScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-purple1 items-center justify-center relative">
      <StatusBar style="light" />

      {/* Decorative Circles */}
      <View className="absolute top-[10%] left-[5%] w-[20%] aspect-square rounded-full bg-purple3" />
      <View className="absolute bottom-[25%] right-[7%] w-[15%] aspect-square rounded-full bg-purple3" />

      {/* Main Content Container */}
      <View className="w-full px-[5%] items-center">
        {/* India Map Image */}
        <Image
          source={require("../assets/images/indiaMap.png")}
          resizeMode="contain"
          className="w-full h-[30%] mb-6 opacity-90"
        />

        {/* Content Card */}
        <View className="bg-white w-full rounded-3xl p-[5%] shadow-lg">
          {/* Heading */}
          <Text className="text-3xl font-bold text-purple1 mb-2 text-center">
            Move Smart
          </Text>
          <Text className="text-base text-gray-600 mb-5 text-center">
            Your All-in-One Transport Solution
          </Text>

          {/* Feature Icons Row */}
          <View className="flex-row justify-between px-2 mb-6">
            {/* Logistics Feature */}
            <View className="items-center w-[30%]">
              <View className="bg-purple2 p-3 rounded-full mb-1">
                <Text className="text-[#705AA9] text-xl">🚚</Text>
              </View>
              <Text className="text-xs text-center text-gray-600">Logistics</Text>
            </View>

            {/* Air Freight Feature */}
            <View className="items-center w-[30%]">
              <View className="bg-purple2 p-3 rounded-full mb-1">
                <Text className="text-purple1 text-xl">✈️</Text>
              </View>
              <Text className="text-xs text-center text-gray-600">Air Freight</Text>
            </View>

            {/* Shipping Feature */}
            <View className="items-center w-[30%]">
              <View className="bg-purple2 p-3 rounded-full mb-1">
                <Text className="text-purple1 text-xl">🚢</Text>
              </View>
              <Text className="text-xs text-center text-gray-600">Shipping</Text>
            </View>
          </View>

          {/* Pagination Dots */}
          <View className="flex-row justify-center mb-6 space-x-2">
            <View className="w-4 h-2 rounded-full bg-purple1" />
            <View className="w-2 h-2 rounded-full bg-purple2" />
            <View className="w-2 h-2 rounded-full bg-purple2" />
          </View>

          {/* CTA Button */}
          <TouchableOpacity
            className="bg-purple1 py-3 rounded-xl shadow"
            onPress={() => router.push("/index2")}
          >
            <Text className="text-white text-base font-semibold text-center">
              Explore Services
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Wave Design */}
      <View className="absolute bottom-0 w-full h-[10%] bg-purple2 rounded-t-[50px]" />
    </View>
  );
}
