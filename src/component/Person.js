import React, { Component, myImage } from "react";

export default class Person extends Component {
  state = {
    Person: {
      fullName: "ZINE",
      bio: "i love music",
      imgSrc: { myImage },
      profession: "developper",
    },
    show: false,
  };

  render() {
    return (
        <div className="App">
            You Are Welcome
                </div>)
         }
    
  }

