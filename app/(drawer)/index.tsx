import { commonStyle, themeColors } from "@/components/commonStyle";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const router = useRouter();
  
  const { height, width } = Dimensions.get('window');
  const maxDimensions = Math.min(height, width);

  const { centered, homePortalItem } = commonStyle;

  const onAboutMePress = () => {
    console.log('About Me');
    router.push('/aboutMe');
  }

  const onSalesPerformancePress = () => {
    console.log('Sales Performance');
    router.push('/salesPerformance');
  }

  const onServicesExpertisePress = () => {
    console.log('Services & Expertise');
    router.push('/servicesExpertise');
  }

  const onCustomerSatisfactionPress = () => {
    console.log('CustomerSatisfaction');
    router.push('/customerSatisfaction');
  } 

  return (
    <View
      style={{
        width: '100%',
        flex: 1,
        display: 'flex',
      }}
    >
      <Image
        resizeMode="contain"
        source={require("@/assets/images/ashley_doyle_hero.png")}
        style={[{
          width: maxDimensions,
          height: maxDimensions,
        }]}
      />
      <View
        style={{
          backgroundColor: themeColors.primary,
          flex: 1,
          padding: 8
        }}
      >

        <TouchableOpacity
          style={homePortalItem}
          onPress={onAboutMePress}
        >
          <Ionicons
              name="bar-chart-outline"
              size={32}
              color={themeColors.background}
              style={{padding: 8}}
            />
            <Text
              style={{
                flex: 1,
                color: themeColors.background,
                fontSize: 16,
                fontWeight: 'bold',
                padding: 8
              }}
            >
              About Me
            </Text>
            <Ionicons
              name={"chevron-forward"}
              size={24}
              color={themeColors.background}
            />
        </TouchableOpacity>

        <TouchableOpacity
          style={homePortalItem}
          onPress={onSalesPerformancePress}
        >
          <Ionicons
              name="person-outline"
              size={32}
              color={themeColors.background}
              style={{padding: 8}}
            />
            <Text
              style={{
                flex: 1,
                color: themeColors.background,
                fontSize: 16,
                fontWeight: 'bold',
                padding: 8
              }}
            >
              Sales Performance
            </Text>
            <Ionicons
              name={"chevron-forward"}
              size={24}
              color={themeColors.background}
            />
        </TouchableOpacity>

        <TouchableOpacity
          style={homePortalItem}
          onPress={onServicesExpertisePress}
        >
          <Ionicons
              name="people-outline"
              size={32}
              color={themeColors.background}
              style={{padding: 8}}
            />
            <Text
              style={{
                flex: 1,
                color: themeColors.background,
                fontSize: 16,
                fontWeight: 'bold',
                padding: 8
              }}
            >
              Services & Expertise
            </Text>
            <Ionicons
              name={"chevron-forward"}
              size={24}
              color={themeColors.background}
            />
        </TouchableOpacity>

        <TouchableOpacity
          style={homePortalItem}
          onPress={onCustomerSatisfactionPress}
        >
          <Ionicons
              name="star-outline"
              size={32}
              color={themeColors.background}
              style={{padding: 8}}
            />
            <Text
              style={{
                flex: 1,
                color: themeColors.background,
                fontSize: 16,
                fontWeight: 'bold',
                padding: 8
              }}
            >
              Customer Satisfaction
            </Text>
            <Ionicons
              name={"chevron-forward"}
              size={24}
              color={themeColors.background}
            />
        </TouchableOpacity>
      </View>
    </View>
  );
}
