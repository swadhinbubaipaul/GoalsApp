import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [modalIsVisible, setModalIsVisible] = useState(false);
	const [goals, setGoals] = useState([]);

	const addGoalHandler = (enteredGoalText) => {
		setGoals((currentGoals) => [
			...currentGoals,
			{ text: enteredGoalText, id: Date.now() },
		]);
		setModalIsVisible(false);
	};

	const deleteGoalHandler = (id) => {
		setGoals((currentGoals) =>
			currentGoals.filter((goal) => goal.id !== id)
		);
	};

	const startAddGoalHandler = () => {
		setModalIsVisible(true);
	};

	const endAddGoalHandler = () => {
		setModalIsVisible(false);
	};

	return (
		<>
			<StatusBar style="light" />
			<View style={styles.appContainer}>
				<Button
					title="Add New Goal"
					color="#5e0acc"
					onPress={startAddGoalHandler}
				/>
				<GoalInput
					onAddGoal={addGoalHandler}
					onCancel={endAddGoalHandler}
					visible={modalIsVisible}
				/>
				<View style={styles.goalsContainer}>
					<FlatList
						data={goals}
						keyExtractor={(item) => item.id}
						renderItem={(itemData) => {
							return (
								<GoalItem
									text={itemData.item.text}
									id={itemData.item.id}
									onDeleteItem={deleteGoalHandler}
								/>
							);
						}}
					/>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},
	goalsContainer: {
		flex: 5,
		marginTop: 20,
	},
});
