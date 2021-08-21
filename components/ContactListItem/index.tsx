import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { User } from '../../types';
import styles from './style';
import { useNavigation } from '@react-navigation/core';


export type ContactListItemProps = {
	user: User
}

const ContactListItem = (props: ContactListItemProps) => {
	const { user } = props;

	const navigation = useNavigation();
	const onClick = () => {
		//navigation.navigate('contacts')
	}

	return (
		<TouchableWithoutFeedback onPress={onClick}>
		<View style={styles.container}>

			<View style={styles.leftContainer}>
				<Image style={styles.avatar} source={{uri: user.imageUri}} />

			<View style={styles.midContainer}>
				<Text style={styles.userName}> {user.name} </Text>
				<Text style={styles.status}> {user.status } </Text>
			</View>
			</View>

		</View>
		</TouchableWithoutFeedback>
	)
};

export default ContactListItem;