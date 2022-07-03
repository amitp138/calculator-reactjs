import React from "react";
import "../App.css";
import { useState } from "react";
function Home() {
  const [output, setOutput] = useState("");
  const result = (e) => {
    console.log(`${output} ${e.target.name}`);
    setOutput(`${output} ${e.target.name}`);
  };
  const cancel=()=>{
    setOutput("")
  }
  const backspace=()=>{
    let value=output.slice(0,output.length-1)
   setOutput(value) 
  }
  const equalto=()=>{
    setOutput()
  }
  return (
    <div className="Home">
      <div className="container">
        <p className="input">{output}</p>
        <div className="table">
          <div className="lastcol ">
            <button name="C" onClick={cancel} className="yellow">
              C
            </button>
            <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
            
          </div>
          <div className="lastcol">
            <button name="/" onClick={result} className="light-yellow">
              /
            </button>
            <button name="*" onClick={result} className="light-purple">
              *
            </button>
            <button name="%" onClick={result} className="light-purple">
              %
            </button>
            <button name="X" onClick={backspace}>
                  X
                </button>
          </div>
          <div className="lastcol">
            <button name="7" onClick={result}>
              7
            </button>

            <button name="8" onClick={result}>
              8
            </button>

            <button name="9" onClick={result}>
              9
            </button>
            <button name="-" onClick={result} className="light-purple">
              -
            </button>
          </div>

          <div className="lastcol">
            <button name="4" onClick={result}>
              4
            </button>

            <button name="5" onClick={result}>
              5
            </button>

            <button name="6" onClick={result}>
              6
            </button>
            <button name="+" onClick={result} className="light-purple">
              +
            </button>
          </div>
          <div className="cont">
            <div className="lasttwo">
              <div className="lastcol">
                <button name="1" onClick={result}>
                  1
                </button>

                <button name="2" onClick={result}>
                  2
                </button>

                <button name="3" onClick={result}>
                  3
                </button>
              </div>
              <div className="lastcol">
                <button name="." onClick={result}>
                  .
                </button>

                <button name="0" onClick={result}>
                  0
                </button>

                <button name="00" onClick={result}>
                  00
                </button>
              </div>
            </div>
            <div className="lastcol">
              <button name="=" onClick={equalto} className="equalto purple">
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
