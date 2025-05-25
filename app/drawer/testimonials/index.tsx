import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Testimonials() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "Testimonials"
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
        <Text>Testimonials</Text>
      </View>
  );
}
