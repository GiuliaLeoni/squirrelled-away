import { StyleSheet, View, Text } from 'react-native';
import Square from './Square';

//  this component generates a row of 10 squares
const Row = ({ collected, setCollected }) => {
    return(
        <View style={styles.rowContainer}>
        <Square collected={collected} setCollected={setCollected}/>
        <Square collected={collected} setCollected={setCollected}/>
        <Square collected={collected} setCollected={setCollected}/>
        <Square collected={collected} setCollected={setCollected}/>
        <Square collected={collected} setCollected={setCollected}/>
        <Square collected={collected} setCollected={setCollected}/>
        <Square collected={collected} setCollected={setCollected}/>
        <Square collected={collected} setCollected={setCollected}/>
        <Square collected={collected} setCollected={setCollected}/>
        <Square collected={collected} setCollected={setCollected}/>
    </View>
    )
}

// this component generates 10 rows of squares
const Grid = ({collected, setCollected}) => {
    return(

    <View style={styles.gridContainer}>
        <Row collected={collected} setCollected={setCollected}/>
        <Row collected={collected} setCollected={setCollected}/>
        <Row collected={collected} setCollected={setCollected}/>
        <Row collected={collected} setCollected={setCollected}/>
        <Row collected={collected} setCollected={setCollected}/>
        <Row collected={collected} setCollected={setCollected}/>
        <Row collected={collected} setCollected={setCollected}/>
        <Row collected={collected} setCollected={setCollected}/>
        <Row collected={collected} setCollected={setCollected}/>
        <Row collected={collected} setCollected={setCollected}/>
        <Row collected={collected} setCollected={setCollected}/>
        <Row collected={collected} setCollected={setCollected}/>
        <Row collected={collected} setCollected={setCollected}/>
    </View>
    )
}

export default Grid;

const styles = StyleSheet.create({

    gridContainer: {
        width: '100%',
        height: 585,
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
