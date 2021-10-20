import React from "react";

const Logo = (props) => {
  return (
    <header>
      <h1>Welcome to {props.appName}</h1>
      <img
        onClick={() => props.handleClick("pigeon")}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="brown bird"
      />
    </header>
  );
};

export default Logo;
