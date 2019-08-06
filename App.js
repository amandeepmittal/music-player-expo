import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicon } from '@expo/vector-icons'
import { Audio } from 'expo-av'

const audioBookPlaylist = [
	{
		title: 'Hamlet - Act I',
		author: 'William Shakespeare',
		source: 'Librivox',
		uri: 'https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act1_shakespeare.mp3'
	},
	{
		title: 'Hamlet - Act II',
		author: 'William Shakespeare',
		source: 'Librivox',
		uri: 'https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act2_shakespeare.mp3'
	},
	{
		title: 'Hamlet - Act III',
		author: 'William Shakespeare',
		source: 'Librivox',
		uri: 'http://www.archive.org/download/hamlet_0911_librivox/hamlet_act3_shakespeare.mp3'
	},
	{
		title: 'Hamlet - Act IV',
		author: 'William Shakespeare',
		source: 'Librivox',
		uri: 'https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act4_shakespeare.mp3'
	},
	{
		title: 'Hamlet - Act V',
		author: 'William Shakespeare',
		source: 'Librivox',
		uri: 'https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act5_shakespeare.mp3'
	}
]

export default class App extends React.Component {
	state = {
		isPlaying: false,
		track: null,
		currentIndex: 0,
		volume: 1.0,
		isBuffering: false
	}
	render() {
		return (
			<View style={styles.container}>
				<Text>Open up App.js to start working on your app!</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
