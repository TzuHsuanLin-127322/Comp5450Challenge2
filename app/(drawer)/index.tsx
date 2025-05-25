import { commonStyle } from "@/components/commonStyle";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const router = useRouter();
  
  const { height, width } = Dimensions.get('window');
  const maxDimensions = Math.min(height, width);

  const { centered, homePortalButton } = commonStyle;

  const portalContentColor = 'gold'

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

  const onTestimonialsPress = () => {
    console.log('Testimonials');
    router.push('/testimonials');
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
          backgroundColor: 'black',
          flex: 1,
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
            <Ionicons name="person-outline" size={48} color={portalContentColor} style={{ marginBottom: 8 }} />
            <Text style={{ color: portalContentColor }}>About Me</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ flex: 1, }, homePortalButton, centered]}
            onPress={onSalesPerformancePress}
          >
            <Ionicons name="bar-chart-outline" size={48} color={portalContentColor} style={{ marginBottom: 8 }} />
            <Text style={{ color: portalContentColor }}>Sales Performance</Text>
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
            <Ionicons name="people-outline" size={48} color={portalContentColor} style={{ marginBottom: 8 }} />
            <Text style={{ color: portalContentColor }}>Services & Expertise</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ flex: 1, }, homePortalButton, centered]}
            onPress={onTestimonialsPress}
          >
            <Ionicons name="star-outline" size={48} color={portalContentColor} style={{ marginBottom: 8 }} />
            <Text style={{ color: portalContentColor }}>Testimonials</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
