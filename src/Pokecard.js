import React, { Component } from "react";
import "./Pokecard.css";

// const baseApiUrl =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const baseApiUrl = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

class Pokecard extends Component {
  render() {
    let id = this.props.id;
    let paddedId = id.toString().padStart(3, "000");
    let imgSrc = `${baseApiUrl}${paddedId}.png`;
    return (
      <div className="Pokecard">
        <div className="Pokecard-card">
          <h1>{this.props.name}</h1>
          <img src={imgSrc} alt={this.props.name} className="Pokecard-img" />
          <div className="Pokecard-desc">Type: {this.props.type}</div>
          <div className="Pokecard-desc">Exp: {this.props.exp}</div>
        </div>
      </div>
    );
  }
}

export default Pokecard;
