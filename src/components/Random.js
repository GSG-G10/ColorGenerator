import React, { useEffect, useContext } from "react";
import { coloercontext } from "../context/coloercontext";
import savelocalstorge from "../generalfunc/savelocalstorge";
import "./style/Random.css";
import "./style/general.css";

const axios = require("axios");

const Random = () => {
  const fav = useContext(coloercontext);
  const { favoriteColors, setfavoriteColors, RandomColors, setRandomColors } =
    fav;

  useEffect(() => {
    const randomHex = Math.floor(Math.random() * 16777215).toString(16);
    axios
      .get(`https://www.thecolorapi.com/scheme?hex=${randomHex}`)
      .then((res) => {
        setRandomColors(res.data.colors);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1 className="title">color</h1>
      <section className="random">
        {RandomColors.map((color) => {
          return (
            <div
              className="color-box"
              style={{ backgroundColor: color.hex.value }}
            >
              <p className="color-value">{color.hex.value}</p>
              <div
                class="button"
                onClick={() => {
                  savelocalstorge(color.hex.value);
                  favoriteColors.push(color.hex.value);
                  setfavoriteColors(favoriteColors);
                }}
              >
                <div class="btn btn-three">
                  <span>Save</span>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Random;
