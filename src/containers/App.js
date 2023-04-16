// Components & Containers
import React, { Component } from "react";
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
import SusBackground from "../components/SusBackground/SusBackground";
import FaceRecognition from "../components/FaceRecognition/FaceRecognition";
// import PAT_KEY from "../PATKEY"
import './App.css';

const MODEL_ID = 'face-detection';

const jsonForClarifai = (pictureLink) => {
    // Your PAT (Personal Access Token) can be found in the portal under Authentification
    const PAT = process.env.REACT_APP_CLARIFAI_PAT_KEY;
    // Specify the correct user_id/app_id pairings
    // Since you're making inferences outside your app's scope
    const USER_ID = process.env.REACT_APP_CLARIFAI_USER_ID;
    const APP_ID = process.env.REACT_APP_CLARIFAI_APP_ID;
    // Change these to whatever model and image URL you want to use
    // Optional, will use latest version of the model if omitted.
    // const MODEL_VERSION_ID = 'aa7f35c01e0642fda5cf400f543e7c40';    
    const IMAGE_URL = pictureLink;

    const raw = JSON.stringify({
      "user_app_id": {
          "user_id": USER_ID,
          "app_id": APP_ID
      },
      "inputs": [
          {
              "data": {
                  "image": {
                      "url": IMAGE_URL
                  }
              }
          }
      ]
    });

    return {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Authorization': 'Key ' + PAT
      },
      body: raw
    };
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      input: '',
      boxesIDs: [],
      active: false
    }
  }

  findFacesLocations = (r) => {
    // const clarifaiFace = data.outputs[0].data;
    const clari = r.outputs[0].data;
    let arrayOfFaces = [];

    try {
      arrayOfFaces.push(clari.regions.map((y, i) => {
        return clari.regions[i].region_info.bounding_box;
      }));
    } catch (e) {
      arrayOfFaces = [];
    }

    return arrayOfFaces;
  }

  // TODO: Dynamic bounding boxes resizes if images also resizes (window gets smaller, etc)
  drawFaceBox = (a) => {
    const image = document.getElementById('inputImg');
    const width = Number(image.width);
    const height = Number(image.height);
    const newSetOfIDs = [];
  
    a.forEach((fullArray) => fullArray.forEach((box, i) => {
        const newBB = document.createElement("div")
        newBB.id=String(Math.floor(Math.random() * Math.random(100, 1000) * Date.now()));
        newSetOfIDs.push(newBB.id);
        newBB.className="bounding-box";
        newBB.setAttribute("style", "top: " + (box.top_row * height) + 
                      "px; right: " + (width - (box.right_col * width)) +
                      "px; left: " + (box.left_col * width) +
                      "px; bottom: " + (height - (box.bottom_row * height)) + "px;");
        image.after(newBB);
      })
    );

    // Smooth scrolls down to the image after boundings after done.
    const y = image.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    })

    this.setState({boxesIDs: newSetOfIDs, active: true});
  }

  removeFaceBoxes = () => {
    const { boxesIDs } = this.state;
    boxesIDs.forEach(id => {
      document.getElementById(id).outerHTML = "";
    })
    this.setState({boxesIDs: [], active: false});
  }

  onLinkInput = (event) => {
    this.setState({input: event.target.value});
    this.removeFaceBoxes();
  }

  onButtonClick = () => {
    if(this.state.input && !this.state.active){
      fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs", jsonForClarifai(this.state.input))
          .then(response => response.json())
          .then(r => {
            if (r.status.code === 10000) {
              this.drawFaceBox(this.findFacesLocations(r));
            } else {
              console.error("API request failed.");
            }
          })
          .catch(error => console.error('Oops?', error));
    }
  }

  render(){
    return (
      <div className="App avenir">
        <SusBackground />
        <div id="topElements">
          <Logo />
          <Navigation />
        </div>
        <Rank />
        <ImageLinkForm onLinkInput={this.onLinkInput} onButtonClick={this.onButtonClick}/>
        <FaceRecognition imageLink={this.state.input} />
      </div>
    );
  }
}

export default App;