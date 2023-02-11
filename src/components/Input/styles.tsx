import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        borderRadius: 7
    },
})