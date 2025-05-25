import { useNavigation } from "expo-router";
import { useEffect } from "react";
import SalesImpactDashboard from "./Sales_performance";
export default function SalesPerformance() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "Sales Performance"
    });
  }, [navigation]);

  return (
    <SalesImpactDashboard />
  )
}
