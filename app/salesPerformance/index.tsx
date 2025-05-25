import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function SalesPerformance() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "Sales Performance"
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
        <Text>Edit app/salesPerformance/index.tsx to edit this screen.</Text>
      </View>
  );
}
