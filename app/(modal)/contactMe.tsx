import { commonStyle, commonTextStyle, themeColors } from "@/components/commonStyle";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

const PURPOSE_OPTIONS = [
  'Buy',
  'Sell',
  'Trade',
  'Service',
  'Other',
];

export default function ContactMeModal() {
  const [name, setName] = useState<string>('');
  const [nameError, setNameError] = useState<string | null>(null);
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [phone, setPhone] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [purpose, setPurpose] = useState<number | null>(null);
  const [purposeError, setPurposeError] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');

  const {baseTextInput} = commonTextStyle

  // Individual validation functions
  const validateName = () => {
    if (name.trim() === '' || name === null || name === undefined) {
      setNameError('Name is required');
      return false;
    } else {
      setNameError(null);
      return true;
    }
  };

  const validateEmail = () => {
    if (email.trim() === '' || email === null || email === undefined) {
      setEmailError('Email is required');
      return false;
    }
    
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    
    setEmailError(null);
    return true;
  };

  const validatePhone = () => {
    if (phone.trim() === '' || phone === null || phone === undefined) {
      setPhoneError('Phone is required');
      return false;
    } else {
      setPhoneError(null);
      return true;
    }
  };

  const validatePurpose = () => {
    if (purpose === null) {
      setPurposeError('Purpose is required');
      return false;
    } else {
      setPurposeError(null);
      return true;
    }
  };


  // Helper to validate all fields
  const validateFields = () => {
    const nameValid = validateName();
    const emailValid = validateEmail();
    const phoneValid = validatePhone();
    const purposeValid = validatePurpose();
    return nameValid && emailValid && phoneValid && purposeValid;
  };

  // Helper to check if all required fields are filled
  const isFormValid = () => {
    return (
      name.trim() !== '' && !nameError &&
      email.trim() !== '' && !emailError &&
      phone.trim() !== '' && !phoneError &&
      purpose !== null && !purposeError
    );
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: 16,
      }}
    >
      <Text>Thank you for your interest in my services. Please fill out the form below to get in touch with me.</Text>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginVertical: 16 }}>Contact Information</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={text => {
          setName(text);
          if (nameError) validateName();
        }}
        style={baseTextInput}
        onBlur={validateName}
      />
      <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 8, color: 'red' }}>{nameError}</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => {
          setEmail(text);
          if (emailError) validateEmail();
        }}
        style={baseTextInput}
        keyboardType="email-address"
        onBlur={validateEmail}
      />
      <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 8, color: 'red' }}>{emailError}</Text>
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={text => {
          setPhone(text);
          if (phoneError) validatePhone();
        }}
        style={baseTextInput}
        keyboardType="phone-pad"
        onBlur={validatePhone}
      />
      <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 8, color: 'red' }}>{phoneError}</Text>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 16 }}>Purpose</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {PURPOSE_OPTIONS.map((option, index) => (
          <TouchableOpacity
            style={[
              commonStyle.chip,
              {
                borderColor: index === purpose ? themeColors.secondary : 'lightgray',
                borderRadius: 100,
                minWidth: 56,
                margin: 8,
              }
            ]}
            key={index}
            onPress={() => {
              setPurpose(index);
              if (purposeError) validatePurpose();
            }}
          >
            <Text style={{fontWeight: index === purpose ? "bold": "black"}}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 8, color: 'red' }}>{purposeError}</Text>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginVertical: 8 }}>Message (Optional)</Text>
      <TextInput
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        style={[
          baseTextInput,
          {
            minHeight: 100,
            textAlignVertical: 'top',
          }
        ]}
        multiline={true}
      />
      <TouchableOpacity
        style={[
          {
            backgroundColor: isFormValid() ? themeColors.secondary : 'gray',
            paddingHorizontal: 8,
            paddingVertical: 16,
            marginVertical: 16,
            borderRadius: 100,
          }, commonStyle.centered,
        ]}
        disabled={!isFormValid()}
        onPress={() => {
          if (validateFields()) {
            router.back();
          }
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 14,
            fontWeight: 'bold',
          }}
        >SUBMIT</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}