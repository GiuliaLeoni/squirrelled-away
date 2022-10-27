import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Square = () => {

    const handlePress = () => {
        alert("pressed");
    }

    return (
        <View style={styles.rowContainer}>
            <TouchableOpacity onPress={handlePress}>
            <View style={styles.rowSquare}></View> 
            </TouchableOpacity>
        </View>
    )
}

export default Square;
const styles = StyleSheet.create({
    rowContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: 'purple',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    rowSquare: {
        backgroundColor: 'green',
        borderColor: 'yellow',
        borderWidth: 1,
        width: 45,
        height: 45
}
});
