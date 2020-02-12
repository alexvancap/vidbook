import React, { Component } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native'

export const Loader = () => {
    return (
        <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00367F" />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})