import { StyleSheet, View, Text } from 'react-native';
import Square from './Square';

//  this component generates a row of 10 squares
const Row = () => {
    return(
        <View style={styles.rowContainer}>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
    </View>
    )
}

// this component generates 10 rows of squares
const Grid = () => {
    return(

    <View style={styles.gridContainer}>
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
    </View>
    )
}

export default Grid;

const styles = StyleSheet.create({

    gridContainer: {
        width: '100%',
        height: 675,
        backgroundColor: 'coral'
    },
    rowContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: 'purple',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },

    row: {
        flexDirection: 'row',
        width: '100%'
    }
})
