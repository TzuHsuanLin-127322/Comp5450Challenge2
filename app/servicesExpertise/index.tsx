import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function ServicesExpertise() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "Services & Expertise"
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
        <Text>Services & Expertise</Text>
      </View>
  );
}
