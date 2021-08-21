import React from "react";
import { Text } from "../components/Themed";
import { useRoute } from "@react-navigation/core";
import { UserInterfaceIdiom } from "expo-constants";

const ChatRoomScreen = () => {

	const route = useRoute();

	console.log(route.params)

	return (
		<Text>Chat Room</Text>
	)
}

export default ChatRoomScreen;
