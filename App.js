import React from 'react';
import Loading from "./Loading"
import Weather from "./Weather"
import * as Location from "expo-location";
import {Alert} from "react-native"
import axios from "axios"

const API_KEY = "2c47e4b1a148ac200d037e21871c0850"

export default class extends React.Component {

  state = {
    isLoading: true
  }

  getWeather = async(latitude, longitude) => {
    const { data :{main: {temp}, weather}} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`)
    this.setState({isLoading:false, temp: temp, condition : weather[0].main})
  }
  
  getLocation = async () =>{
    try{
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
    } catch(error){
      Alert.alert("Can't find you.", "So Sad")
    }
  }

  componentDidMount(){
    this.getLocation();
  }

  render(){
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}
