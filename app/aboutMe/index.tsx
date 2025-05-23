import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function AboutMe() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "About Me"
    });
  }, [navigation]);

  return (
    <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Edit app/aboutMe/index.tsx to edit this screen.</Text>
      </View>
  );
}
