/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import InstalledApp from 'react-native-installed-app';

export default class sample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            installed: false,
            installedapp: false,
        }
    }

    componentDidMount() {
        InstalledApp.isApplicationInstalled('fb://')
            .then(bs => {
                console.log(`fb:${bs}`)
                this.setState({
                    installed: bs
                })
            })
            .done()
        InstalledApp.isApplicationInstalled('installedapp://')
            .then(bs => {
                console.log(`installedapp:${bs}`)
                this.setState({
                    installedapp: bs
                })
            })
            .done()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    fa:// {this.state.installed?'true':'false'}
                </Text>
                <Text style={styles.welcome}>
                    installedapp:// {this.state.installedapp?'true':'false'}
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('sample', () => sample);
