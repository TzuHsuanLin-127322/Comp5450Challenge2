import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";
import ServicesScreen from "./servicesExpertise";

export default function ServicesExpertise() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "Services & Expertise"
    });
  }, [navigation]);

  return (
      <ServicesScreen /> 
  );
}
