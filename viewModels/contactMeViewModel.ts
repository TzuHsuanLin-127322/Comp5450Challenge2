import { useSQLiteContext } from "expo-sqlite"
import { useEffect, useState } from "react"

export const useContactMeViewModel = () => {
  const db = useSQLiteContext()

  const [name, setName] = useState<string>('')
  const [nameError, setNameError] = useState<string | null>(null)
  const [email, setEmail] = useState<string>('')
  const [emailError, setEmailError] = useState<string | null>(null)
  const [phone, setPhone] = useState<string>('')
  const [phoneError, setPhoneError] = useState<string | null>(null)
  const [purpose, setPurpose] = useState<string | null>(null)
  const [purposeError, setPurposeError] = useState<string | null>(null)
  const [message, setMessage] = useState<string>('')
  const [isFormValid, setIsFormValid] = useState<boolean>(false)

  const initDB = () => {
    console.log('initDB')
    db.execSync(`
      CREATE TABLE IF NOT EXISTS contact_me (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,  
        purpose TEXT NOT NULL,
        message TEXT NOT NULL
      );
    `)
  }

  useEffect(() => {
    setIsFormValid(
      name.trim() !== '' && !nameError &&
      email.trim() !== '' && !emailError &&
      phone.trim() !== '' && !phoneError &&
      purpose !== null && !purposeError
    )
  }, [name, nameError, email, emailError, phone, phoneError, purpose, purposeError])

  const onNameChange = (text: string) => {
    setName(text)
    if (nameError) validateName()
  }

  const onEmailChange = (text: string) => {
    setEmail(text)
    if (emailError) validateEmail()
  }

  const onPhoneChange = (text: string) => {
    setPhone(text)
    if (phoneError) validatePhone()
  }

  const onPurposeChange = (text: string | null) => {
    console.log('onPurposeChange', text)
    setPurpose(text)
    if (purposeError) validatePurpose()
  }

  const onMessageChange = (text: string) => {
    setMessage(text)
  }

  const validateName = () => {
    if (name.trim() === '' || name === null || name === undefined) {
      setNameError('Name is required')
      return false
    } else {
      setNameError(null)
      return true
    }
  }

  const validateEmail = () => {
    if (email.trim() === '' || email === null || email === undefined) {
      setEmailError('Email is required')
      return false
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address')
      return false
    }

    setEmailError(null)
    return true
  }

  const validatePhone = () => {
    if (phone.trim() === '' || phone === null || phone === undefined) {
      setPhoneError('Phone is required')
      return false
    } else if (!/^\d+$/.test(phone)) {
      setPhoneError('Phone number must contain only digits')
      return false
    } else {
      setPhoneError(null)
      return true
    }
  }

  const validatePurpose = () => {
    if (purpose === null || purpose === undefined || purpose === '') {
      setPurposeError('Purpose is required')
      return false
    } else {
      setPurposeError(null)
      return true
    }
  }

  const onSubmit = async() => {
    console.log('onSubmit')
    const isNameValid = validateName()
    const isEmailValid = validateEmail()
    const isPhoneValid = validatePhone()
    const isPurposeValid = validatePurpose()

    if (!isNameValid || !isEmailValid || !isPhoneValid || !isPurposeValid) {
      console.log('isNameValid', isNameValid)
      console.log('isEmailValid', isEmailValid)
      console.log('isPhoneValid', isPhoneValid)
      console.log('isPurposeValid', isPurposeValid)
      return
    }
    
    initDB()
    console.log('initDB done')
    try {
      db.execSync(`
        INSERT INTO contact_me (name, email, phone, purpose, message) VALUES
        ('${name}', '${email}', '${phone}', '${purpose}', '${message}');
      `)
      console.log('insert done')
    } catch (error) {
      console.log('insert error', error)
    }
  }

  return {
    name, nameError, onNameChange, validateName,
    email, emailError, onEmailChange, validateEmail,
    phone, phoneError, onPhoneChange, validatePhone,
    purpose, purposeError, onPurposeChange, validatePurpose,
    message, onMessageChange,
    isFormValid,
    onSubmit,
  }

}