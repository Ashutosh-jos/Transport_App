If Tailwind (via NativeWind) is not working in your React Native Expo project, it's usually due to misconfiguration in one of the following areas:

Let’s go step-by-step to ensure your setup is correct.

✅ 1. Install Required Packages
Run this (you may have done this already):

npx expo install nativewind tailwindcss react-native-reanimated react-native-safe-area-context
✅ 2. Configure tailwind.config.js
Create the file if it doesn’t exist:

npx tailwindcss init
Then update it to:

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}", // adjust if you're using a src/ folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
✅ 3. Create babel.config.js with NativeWind plugin
Make sure babel.config.js looks like this:

js
Copy
Edit
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['nativewind/babel'], // ← this is required
  };
};
✅ 4. Use Tailwind classes in your components
Example:

jsx
Copy
Edit
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg font-bold text-blue-600">Hello, Tailwind!</Text>
    </View>
  );
}
✅ Make sure you're using className instead of style or class.

✅ 5. Enable Reanimated (if using)
If you're using react-native-reanimated, make sure the top of your index.js or App.js file includes this line at the very top:

js
Copy
Edit
import 'react-native-reanimated';
✅ 6. Restart the Expo server
Sometimes you need a full reset for changes to take effect:

bash
Copy
Edit
npx expo start --clear



# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
