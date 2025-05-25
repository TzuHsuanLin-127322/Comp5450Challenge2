import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
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
        href="/Sales_performance"
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
      <Link href="/Case_1" asChild>
        <Text>Case_1</Text>
      </Link>
      <Link href="/Case_2" asChild>
        <Text>Case_1</Text>
      </Link>
    </View>
  );
}
