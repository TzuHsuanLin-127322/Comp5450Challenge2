import { themeColors } from "@/components/commonStyle";
import { router } from "expo-router";
import { useState } from "react";
import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

const PURPOSE_OPTIONS = [
  'Buy',
  'Sell',
  'Trade',
  'Service',
  'Other',
];

export default function ContactMeModal() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [purpose, setPurpose] = useState<number | null>(null);
  const [message, setMessage] = useState<string>('');

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: 16,
      }}
    >
      <Text>Thank you for your interest in my services. Please fill out the form below to get in touch with me.</Text>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 16 }}>Contact Information</Text>
      <TextInput
        placeholder="Name"
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          padding: 8,
          margin: 8,
        }}
      />
      <TextInput
        placeholder="Email"
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          padding: 8,
          margin: 8,
        }}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Phone"
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          padding: 8,
          margin: 8,
        }}
        keyboardType="phone-pad"
      />
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 16 }}>Purpose</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {PURPOSE_OPTIONS.map((option, index) => (
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              borderWidth: 2,
              borderColor: index === purpose ? themeColors.secondary : 'lightgray',
              borderRadius: 100,
              minWidth: 56,
              padding: 8,
              margin: 8,
              elevation: 4
            }}
            key={index}
            onPress={() => setPurpose(index)}
          >
            <Text>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 16 }}>Message</Text>
      <TextInput
        placeholder="Message"
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          padding: 8,
          margin: 8,
          minHeight: 100,
          textAlignVertical: 'top',
        }}
        multiline={true}
      />
      <Button
        title="Submit"
        color={themeColors.secondary}
        onPress={() => {
          router.back()
        }}
      />
    </ScrollView>
  )
}