import { commonStyle, commonTextStyle, themeColors } from "@/components/commonStyle";
import { useContactMeViewModel } from "@/viewModels/contactMeViewModel";
import { router } from "expo-router";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

const PURPOSE_OPTIONS = [
  'Buy',
  'Sell',
  'Trade',
  'Service',
  'Other',
];

export default function ContactMeModal() {
  const {
    name, nameError, onNameChange, validateName,
    email, emailError, onEmailChange, validateEmail,
    phone, phoneError, onPhoneChange, validatePhone,
    purpose, purposeError, onPurposeChange,
    message, onMessageChange,
    isFormValid,
    onSubmit
    // validateFields,
  } = useContactMeViewModel();

  const {baseTextInput} = commonTextStyle

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
        onChangeText={onNameChange}
        style={baseTextInput}
        onBlur={validateName}
      />
      <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 8, color: 'red' }}>{nameError}</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={onEmailChange}
        style={baseTextInput}
        keyboardType="email-address"
        onBlur={validateEmail}
      />
      <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 8, color: 'red' }}>{emailError}</Text>
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={onPhoneChange}
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
                borderColor: option === purpose ? themeColors.secondary : 'lightgray',
                borderRadius: 100,
                minWidth: 56,
                margin: 8,
              }
            ]}
            key={index}
            onPress={() => onPurposeChange(option)}
          >
            <Text style={{fontWeight: option === purpose ? "bold": "black"}}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 8, color: 'red' }}>{purposeError}</Text>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginVertical: 8 }}>Message (Optional)</Text>
      <TextInput
        placeholder="Message"
        value={message}
        onChangeText={onMessageChange}
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
            backgroundColor: isFormValid ? themeColors.secondary : 'gray',
            paddingHorizontal: 8,
            paddingVertical: 16,
            marginVertical: 16,
            borderRadius: 100,
          }, commonStyle.centered,
        ]}
        disabled={!isFormValid}
        onPress={() => {
          console.log('onSubmit')
          onSubmit()
          router.back()
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