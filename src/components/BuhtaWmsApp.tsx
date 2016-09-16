import React, {Component} from "react";
import {View, Text, Navigator, Route} from "react-native";
import {BuhtaMenu} from "./BuhtaMenu";
//import BuhtaMenu from "./BuhtaMenu";
//import * as RN from "react-native";
// See src/declarations.d.ts
//import Button from "react-native-button";


export default class BuhtaWmsApp extends Component<any, any> {
    x: string = "Пункт меню 1";

    render() {
        return (
            <Navigator
                sceneStyle={{padding: 10}}
                initialRoute={{ title: 'Главное меню 7', index: 0 }}
                renderScene={(route:Route, navigator:Navigator) => {
                    return (
                    <View >
                       <Text style={{ fontSize: 20 }}>
                          Hello2 {route.title}!
                       </Text>
                       <BuhtaMenu items={
                          [
                            {title:this.x, onPress:()=>{console.log(this.x);this.x+="*";this.forceUpdate()}},
                            {title:"Пункт меню 2",onPress:()=>{testSql()}}
                          ]
                       }/>
                     </View>);
                  }}

            />
        );
    }
}

//var sql = require('mssql');
//import sql from 'mssql';
//var events = require('events');
//var net = require('net');
//var tds = require('tds');

function testSql() {
    alert("testSql-1");


    // var conn = new tds.Connection({
    //     host: '192.168.0.133',
    //     port: 1433,
    //     userName: 'sa1',
    //     password: 'sonyk'
    // });
    //
    // conn.connect(function (error: string) {
    //     if (error != null) {
    //         console.error('Received error', error);
    //     } else {
    //         console.log('Now connected, can start using');
    //     }
    // });

//     sql.connect("mssql://sa1:sonyk@192.168.0.133/Buhta4").then(function() {
//         alert("Ok");
//         // Query
//
//     //     new sql.Request().query('select * from mytable').then(function(recordset:any) {
//     //         console.dir(recordset);
//     //     }).catch(function(err:string) {
//     //         // ... query error checks
//     //     });
//      }).catch(function(err:string) {
//         console.error(err);
//     });
 }