import React,{Component} from 'react';
import ZipCode from "./zipcode"
import City from "./city"
import './App.css';
class App extends Component{
  
    
    state={
      zipCode:[],
      cities:[],
      v: [],
    };


  getZipCode = () =>
  { const cityName = document.getElementById("city").value;
    const upperCase = cityName.toUpperCase();
    const url = "http://ctp-zip-api.herokuapp.com/city/"+upperCase;
    fetch(url).
    then(response => response.json()).
    then(responseJson => {
      console.log(responseJson);
      this.setState({zipCode: responseJson});
    }).
    then(zip => {
      for(let i in this.state.zipCode)
      {
        
        fetch("http://ctp-zip-api.herokuapp.com/zip/" +this.state.zipCode[i]).
        then(response => response.json()).
        then(responseJson => {
        this.setState({cities: responseJson});
    }).then(city => {
      for(let j in this.state.cities)
      {
        var joined = this.state.v.concat(<City city={this.state.cities[j]} zip = {this.state.zipCode[i]}/>);
        this.setState({ v: joined });
      } 
    })}})}
    
    
  

  

  

  render(){
   

    return (
    <div className="content">
      <h1>City Search</h1>
      <form id ="form">
         <p>City </p> <input id="city" placeholder="NewYork" type="text"/>
         <button type ="button" onClick={this.getZipCode}> Submit</button>
       </form>
        {this.state.v}
       
    </div>)
  }
}
export default App;
