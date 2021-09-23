/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { coloercontext } from "../context/coloercontext";
import "./style/Random.css";
import "./style/Favorite.css";

const Favorite = () => {
  const fav = useContext(coloercontext);
  const { favoriteColors, setfavoriteColors } = fav;
  useEffect(() => {
    console.log(localStorage.colorList);
    if (localStorage.colorList === undefined) {
      setfavoriteColors([]);
    } else {
      setfavoriteColors(JSON.parse(localStorage.colorList));
    }
  }, []);
  function copyToClipboard(e) {
    document.execCommand("copy");
    e.target.focus();
  }
  return (
    <>
      <h1 className="title">Favorite</h1>
      <div
        class="button "
        onClick={() => {
          localStorage.clear();
          setfavoriteColors([]);
        }}
        style={{ backgroundColor: "none" }}
      >
        <div class="btn btn-three">
          <span>clear</span>
        </div>
      </div>

      <section className="random">
        {favoriteColors.map((color) => {
          return (
            <div className="color-box" style={{ backgroundColor: color }}>
              {" "}
              <h1 onClick={copyToClipboard}> {color}</h1>{" "}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Favorite;
