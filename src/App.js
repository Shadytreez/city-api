import React,{Component} from 'react';
import ZipCode from "./zipcode"

class App extends Component{
  
  constructor(props)
  {
    super(props);
    this.state={
      codes:[],
    };
  }

  getCities()
  { const city = document.getElementById("city").value;
    const url = "https://ctp-zip-api.herokuapp.com/city/"+city;
    fetch(url).
    then(response => response.json()).
    then(data => {
      console.log(data);
      //this.setState({codes: data});
    }).
    catch(error => console.log("error:"));
    
  }

  

  render(){

    

    return (
    <div>
      <h1>City Search</h1>
      <form id ="form">
         <p>City </p> <input id="city" placeholder="newyork" type="text"/>
         <button type ="button" onClick={this.getCities}> Submit</button>
       </form>
       {this.getCityBar}
    </div>)
  }
}
export default App;
