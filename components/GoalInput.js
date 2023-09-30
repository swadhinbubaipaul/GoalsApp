import { useState } from "react";
import {
	Button,
	TextInput,
	View,
	StyleSheet,
	Modal,
	Image,
} from "react-native";

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
	const [enteredGoalText, setEnteredGoalText] = useState("");

	const goalInputHandler = (enteredText) => {
		setEnteredGoalText(enteredText);
	};

	const AddGoalHandler = () => {
		onAddGoal(enteredGoalText);
		setEnteredGoalText("");
	};

	return (
		<Modal visible={visible} animationType="slide">
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require("../assets/images/goal.png")}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Enter your goal"
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							title="Cancel"
							color="#fc1282"
							onPress={onCancel}
						/>
					</View>
					<View style={styles.button}>
						<Button
							title="Add Goal"
							color="#5e0acc"
							onPress={AddGoalHandler}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		padding: 16,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#311b6b",
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#e4d0ff",
		backgroundColor: "#e4d0ff",
		color: "#120438",
		borderRadius: 6,
		width: "100%",
		padding: 16,
	},
	buttonContainer: {
		flexDirection: "row",
	},
	button: {
		marginTop: 16,
		width: "30%",
		marginHorizontal: 8,
	},
});

export default GoalInput;
