import React from "react";
import {View, TextInput, TouchableOpacity} from "react-native"
import styles from "./styles"
import { MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

const InputBox = () => {

	const [message, setMessage] = useState('');

	const onMicrophonePress = () => {
		console.warn("Microphone");
	}

	const onSendPress = () => {
		console.warn(`Sending ${message}`)

		// sne the message to the backend
	}

	const onPress = () => {
		if (!message) {
			onMicrophonePress();
		} else {
			onSendPress();
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.mainContainer}>

				<FontAwesome5 name="laugh-beam" size={24} color="grey" />

				<TextInput 
					placeholder={"Type a message"}
					multiline 
					style={styles.textInput}
					value={message}
					onChangeText={setMessage}
					
					/>
					
				<Entypo name="attachment" size={24} color="grey" style={styles.icon} />
			{!message &&	<Fontisto name="camera" size={24} color="grey" style={styles.icon} />}
			</View>

			<TouchableOpacity onPress={onPress}>
			<View style={styles.buttonContainer}>
				{
					!message 
					? <MaterialCommunityIcons name="microphone" size={22} color="white"></MaterialCommunityIcons>
					: <MaterialIcons name="send" size={22} color="white"></MaterialIcons>
				}
			</View>
			</TouchableOpacity>

		</View>
	)
}

export default InputBox
