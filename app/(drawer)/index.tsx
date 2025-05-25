import { commonStyle, themeColors } from "@/components/commonStyle";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const router = useRouter();
  
  const { height, width } = Dimensions.get('window');
  const maxDimensions = Math.min(height, width);

  const { centered, homePortalButton } = commonStyle;

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
        style={{
          width: maxDimensions,
          height: maxDimensions,
        }}
      />
      <View
        style={{
          backgroundColor: themeColors.primary,
          flex: 1,
          padding: 8
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flex: 1
          }}
        >
          <TouchableOpacity
            style={[{ flex: 1, }, homePortalButton, centered]}
            onPress={onAboutMePress}
          >
            <Ionicons
              name="person-outline"
              size={48}
              color={themeColors.secondary}
              style={{ marginBottom: 8 }}
            />
            <Text
              style={{
                color: themeColors.secondary,
                fontSize: 16,
                fontWeight: 'bold'
              }}
            >About Me</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ flex: 1, }, homePortalButton, centered]}
            onPress={onSalesPerformancePress}
          >
            <Ionicons
              name="bar-chart-outline"
              size={48}
              color={themeColors.secondary}
              style={{ marginBottom: 8 }}
            />
            <Text
              style={{
                color: themeColors.secondary,
                fontSize: 16,
                fontWeight: 'bold'
              }}
            >Sales Performance</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flex: 1,
          }}
        >
          <TouchableOpacity
            style={[{ flex: 1, }, homePortalButton, centered]}
            onPress={onServicesExpertisePress}
          >
            <Ionicons
              name="people-outline"
              size={48}
              color={themeColors.secondary}
              style={{ marginBottom: 8 }}
            />
            <Text
              style={{
                color: themeColors.secondary,
                fontSize: 16,
                fontWeight: 'bold'
              }}>Services & Expertise</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ flex: 1, }, homePortalButton, centered]}
            onPress={onCustomerSatisfactionPress}
          >
            <Ionicons
              name="star-outline"
              size={48}
              color={themeColors.secondary}
              style={{ marginBottom: 8 }}
            />
            <Text
              style={{
                color: themeColors.secondary,
                fontSize: 16,
                fontWeight: 'bold'
              }}>
                Customer Satisfaction</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
