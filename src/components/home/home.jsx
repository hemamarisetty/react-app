import React, { Component } from "react";
import './home.css';
class HomePage extends Component {

  render() {
    let heading = "Save 10%";
    let subheading = "Ipsum delica sed ex";
    let subheadingsmall = "lorrem ipsum dolor sit amet, ea est noster accumsan,vim elit aeque an. Eu duo quod elit,posse facer minimum pri ey, ea sit viris ceteros.ea has consul omnesque, an vel reque graeco.eum ne mundi nobis quando, an atiqui dolor per.Ut modo elit malis sea. nibh consetetur mei ea.";
    return (
      <div>
        <section className="hero">
          <div className="hero-body">
            <div className="hero-container">
              <h1 className="title text">{heading}</h1>
              <div className="is-two-thirds column is-paddingless">
                <h2 className="subtitle is-4 text">{subheading}</h2>
                <h3 className="subtitle is-6 text">{subheadingsmall}</h3> 
                <image></image>
              </div>
            </div>
          </div>
          
        </section>
        <section className="section">
          <div className="container">
            <div className="columns pd">
              <div className="columns pd">
                
                <div className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="title card-one">#35D3B4</p>
                   
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="title card-two">#1B2191</p>
 
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="title card-three">#D822EE</p>
                   
                  </div>
                </div>
              </div>
              </div>
              
            </div>
          </div>
        </section>

        
      </div>

    );
  }
}

export default HomePage;