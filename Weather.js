import React from "react";
import {StyleSheet, View, Text, StatusBar} from "react-native"
import PropTypes from "prop-types"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { LinearGradient } from 'expo-linear-gradient'

const weatherOptions = {

    Thunderstorm:{
        iconName: "weather-lighting",
        gradient: ["#000428", "#004e92"],
        title : "Thunder and Storm..",
        subtitle: "Stay home and stay safe!"

    }, 
    Drizzle:{
        iconName: "weather-rainy",
        gradient: ["#F1F2B5", "#135058"],
        title: "Drizzle",
        subtitle: "A cup of coffee, please"
    }, 
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#2c3e50", "#3498db"],
        title: "Raining outside",
        subtitle: "Bring your umbrella"
    }, 
    Snow: {
        iconName: "snowflake",
        gradient: ["#4ca1af", "#c43035"],
        title: "Snowy, and freeking cold",
        subtitle: "Watch out on your steps"
    }, 
    Clear: {
        iconName: "white-balance-sunny",
        gradient: ["#c2e59c", "#64b3fb"],
        title: "Sunny as fuck",
        subtitle: "Just a wonderful day, why don't you go outside?"
    }, 
    Clouds: {
        iconName: "cloud",
        gradient: ["#114357", "#f29492"],
        title: "Cloudy outside",
        subtitle: "Sadly, Not a perfect day for a picnic"
    }, 
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#c02425", "#f0cb35"],
        title: "Haze",
        subtitle: "Just dont' go outside"
    },
    Mist:{
        iconName: "weather-fog",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Mist",
        subtitle: "Watch out if you're traveling by car"
    }, 
    Smoke:{
        iconName: "weather-fog",
        gradient: ["#4da0b0", "#d39d38"],
        title : "Smoky and smoky..",
        subtitle: "Watch out if you're traveling by car"
    }, 
    Fog:{
        iconName: "weather-fog", 
        gradient: ["#4da0b0", "#d39d38"],
        title : "Foggy!",
        subtitle: "Watch out if you're traveling by car"
    }, 
    Tornado:{
        iconName: "weather-tornado",
        gradient: ["#403a3e", "#be5869"],
        title : "Tornado is coming..",
        subtitle : "Stay home, stay safe!"
    }
}

export default function Weather({temp, condition}){
    return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle="light-content"></StatusBar>
            <View style={styles.halfContainer}>
            <MaterialCommunityIcons name={weatherOptions[condition].iconName} size = {100} color="white"></MaterialCommunityIcons>
            <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={styles.testContainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.PropTypes = {
    temp:PropTypes.number.isRequired,
    condition : PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Clear", "Clouds", "Haze", "Mist", "Smoke", "Fog", "Dust", "Sand", "Ash", "Tornado"]).isRequired
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp:{
        fontSize:36,
        color: "white"
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    },
    title:{
        color:"white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle:{
        color:"white",
        fontSize: 24,
        fontWeight: "600"
    },
    testContainer:{
        flex: 1,
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})