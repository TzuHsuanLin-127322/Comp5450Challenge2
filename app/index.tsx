import { commonStyle } from "@/components/commonStyle";
import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const { height, width } = Dimensions.get('window');
  const maxDimensions = Math.min(height, width);

  const { centered, homePortalButton } = commonStyle;
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
            onPress={() => {
              console.log('About Me');
            }}
          >
            <Text style={{ color: 'gold' }}>About Me</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ flex: 1, }, homePortalButton, centered]}
            onPress={() => {
              console.log('Sales Performance');
            }}
          >
            <Text style={{ color: 'gold' }}>Sales Performance</Text>
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
            onPress={() => {
              console.log('Services & Expertise');
            }}
          >
            <Text style={{ color: 'gold' }}>Services & Expertise</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ flex: 1, }, homePortalButton, centered]}
            onPress={() => {
              console.log('Testimonials');
            }}
          >
            <Text style={{color: 'gold'}}>Testimonials</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}
