'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class DetailsPage extends Component{

    static navigationOptions = {
        title: 'Details'
    };

    constructor(props){
        super(props);
    }

    render(){
        const item = this.props.navigation.state.params.item;
        console.log(item);

        const tableHead = ['Price'];
        const tableData = [
                ['1'],
                ['a'],
            ];

        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    {item.title}
                </Text>                
                <Image source={{uri: item.img_url}} style={styles.image}/>                
                <Text style={styles.description}>
                    Price: {item.price} {item.price_currency}
                </Text>  
                <Text>  
                    {item.summary}
                </Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    description: {
      marginBottom: 20,
      fontSize: 18,
      textAlign: 'center',
      color: '#656565'
    },
    container: {
      padding: 30,
      marginTop: 65,
      alignItems: 'center'
    },
    image: {
        width: 217,
        height: 138,
    },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { marginLeft: 5 },
    row: { height: 30 },
  });