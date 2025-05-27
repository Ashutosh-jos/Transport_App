// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   CheckBox,
// } from "react-native";
// import { useRouter } from "expo-router";
// import { StatusBar } from "expo-status-bar";

// const roles = [
//   {
//     id: "driver",
//     title: "Truck Owner/Driver",
//     subtitle: "I want best loads for my truck",
//     icon: require("../assets/images/driver.png"),
//   },
//   {
//     id: "agent",
//     title: "Commission Agent",
//     subtitle: "I want to expand my business",
//     icon: require("../assets/images/agent.png"),
//   },
//   {
//     id: "contractor",
//     title: "Transport Contractor",
//     subtitle: "I want truck to move my loads",
//     icon: require("../assets/images/contractor.png"),
//   },
// ];

// export default function SelectRoleScreen() {
//   const [selectedRole, setSelectedRole] = useState(null);
//   const [whatsAppChecked, setWhatsAppChecked] = useState(true);
//   const router = useRouter();

//   return (
//     <View className="flex-1 bg-white px-4 pt-10">
//       <StatusBar style="dark" />

//       {/* Banner */}
//       <View className="bg-[#008542] rounded-2xl items-center py-2 mb-6 mx-2">
//         <Text className="text-white text-center font-semibold text-base">
//           Trusted by 10 Lakh+ Transporters
//         </Text>
//       </View>

//       <Text className="text-2xl font-bold text-center mb-1">Select your role</Text>
//       <Text className="text-center text-gray-500 mb-6">
//         Which of this best describes your job ?
//       </Text>

//       {/* Roles */}
//       <View className="bg-white rounded-2xl shadow-md p-2">
//         {roles.map((role, index) => (
//           <TouchableOpacity
//             key={role.id}
//             onPress={() => setSelectedRole(role.id)}
//             className={`flex-row items-center p-4 ${
//               index < roles.length - 1 ? "border-b border-gray-200" : ""
//             }`}
//           >
//             <Image
//               source={role.icon}
//               className="w-12 h-12 mr-4 rounded-full"
//               resizeMode="contain"
//             />
//             <View className="flex-1">
//               <Text className="text-lg font-semibold text-gray-800">{role.title}</Text>
//               <Text className="text-gray-500">{role.subtitle}</Text>
//             </View>
//             <View
//               className={`w-5 h-5 border rounded ${
//                 selectedRole === role.id ? "bg-[#008542]" : "border-gray-400"
//               }`}
//             />
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* WhatsApp Checkbox */}
//       <TouchableOpacity
//         onPress={() => setWhatsAppChecked(!whatsAppChecked)}
//         className="flex-row items-center mt-6"
//       >
//         <View
//           className={`w-5 h-5 rounded-sm mr-2 border ${
//             whatsAppChecked ? "bg-[#008542]" : "border-gray-400"
//           }`}
//         />
//         <Text className="text-[#008542] font-medium">Get alerts on WhatsApp</Text>
//       </TouchableOpacity>

//       {/* Confirm Button */}
//       <TouchableOpacity
//         disabled={!selectedRole}
//         onPress={() => router.push("/next-step")}
//         className={`w-full py-3 rounded-xl mt-6 ${
//           selectedRole ? "bg-[#008542]" : "bg-gray-300"
//         }`}
//       >
//         <Text className="text-center text-white text-lg font-semibold">Confirm</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }



import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();

  return (
    <View className="flex-1 bg-purple1">
      <StatusBar style="light" />

      {/* Logo and App Name */}
      <View className="items-center mt-20 mb-6">
        <Image
          source={require("../assets/images/truck-icon.png")} // Replace with your truck icon
          className="w-20 h-20"
          resizeMode="contain"
        //   "D:\a_smashing\reactnative\my-app\assets\images\truck-icon.avif"
        />
        <Text className="text-white text-3xl font-semibold mt-2">TransportBook</Text>
      </View>

      {/* White Container */}
      <View className="bg-white rounded-t-3xl p-6 flex-1">
        <TouchableOpacity className="border border-purple1  py-3 rounded-xl flex-row items-center justify-center mb-4">
          <Image
            source={require("../assets/images/truecaller.jpg")} // Replace with Truecaller logo
            className="w-6 h-6 mr-2 rounded-full"
            resizeMode="contain"
          />
          <Text className="text-base  text-purple1 font-semibold">
            Login with Truecaller
          </Text>
        </TouchableOpacity>

        <View className="flex-row items-center justify-between my-4">
          <View className="flex-1 h-[1px] bg-purple1" />
          <Text className="mx-4 text-purple1 font-medium">OR</Text>
          <View className="flex-1 h-[1px] bg-purple1" />
        </View>

        <Text className="text-lg text-purple1 font-bold mb-2">Enter Your Mobile Number</Text>

        <View className="flex-row items-center border border-purple1 rounded-xl px-3 py-2 mb-4">
          <Image
            source={require("../assets/images/indian-flag.jpg")} // 🇮🇳 flag image
            className="w-6 h-6 mr-2 rounded-full "
            resizeMode="contain"
          />
          <Text className="text-purple1 mr-2">+91</Text>
          <View className="w-[1px] h-6 bg-purple1 mx-2" />
          <TextInput
            className="flex-1 text-purple1"
            keyboardType="number-pad"
            placeholder="Mobile Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            maxLength={10}
          />
        </View>

        <Text className="text-sm text-center text-purple1 px-2 mb-6">
          By confirming, you agree to our{" "}
          <Text className="text-blue-600 font-medium">Privacy Policy</Text> and{" "}
          <Text className="text-blue-600 font-medium">Terms & Conditions</Text>
        </Text>

        <TouchableOpacity
          onPress={() => router.push("/verify-otp")}
          disabled={phoneNumber.length !== 10}
          className={`w-full py-4 rounded-xl ${
            phoneNumber.length === 10 ? "bg-purple1" : "bg-purple2"
          }`}
        >
          <Text className="text-white text-center font-semibold text-base">Send OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
