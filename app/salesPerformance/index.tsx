import { Link, useNavigation } from "expo-router";
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
      <Text>Edit app/index.tsx to edit this screen.</Text>
      {/* 新增跳转链接 */}
      <Link
        href="/salesPerformance/Sales_performance"
        style={{
          fontSize: 18,
          color: "#1976d2",
          textDecorationLine: "underline",
          marginTop: 30,
        }}
      >
        View Sales Impact Dashboard
      </Link>
      {/* 新增跳转链接 */}
      <Link href="/salesPerformance/Case_1" asChild>
        <Text>Case_1</Text>
      </Link>
      <Link href="/salesPerformance/Case_2" asChild>
        <Text>Case_1</Text>
      </Link>
    </View>
  );
}
