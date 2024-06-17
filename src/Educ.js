import React from "react";
import Navbar from "./navbar";

function Educ() {
    return <div id='edPage'>
      <Navbar />
      <div id='imageArea'></div>
      <div id='college'>College: Wright State University
        <ul>
          <li>2012-2016</li>
          <li>B.S. Earth and Environmental Sciences</li>
          <li>Studies include Biostatistics, Computer Science, Calculus, and Technical Writing</li>
        </ul>
        <div id='cert'>Online Classes in:
          <ul>
            <li>React</li>
            <li>HTML, Javascript, CSS</li>
            <li>SQL</li>
            <li>Typescript</li>
            <li>Python (and Django)</li>
            <li>C# (and .NET)</li>
            <li>Agile Methodology</li>
            <li>Azure Services</li>
            <li>Oracle Database</li>
            <li>Tableau</li>
            <li>Algorithms</li>
          </ul>
        </div>

      </div>
    </div>
  }

  export default Educ;