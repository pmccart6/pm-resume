import React from "react";
import Navbar from "./navbar";

function Exper() {
    return <div id='exPage'>
      <Navbar />
      <div id='jobMedpace'><div className="jobHead"><span className="jobPlace">Medpace Inc.</span> <span className="jobDate">March 2019-March 2024</span></div>
        <div className="jobTitle">Title: eClinical Coordinator/Clinical Database Programmer</div>
        <ul className='jobDet'>
          <li>Used HTML and CSS in company proprietary software to create questionnaire screens for various clinical trials to receive patient responses and gather data.</li>
          <li>Used company proprietary UI to create and program SQL databases and externally facing UI for source data verification for &gt;200 clinical trials</li>
          <li>Under my own initiative, conceived of, created, deployed, and maintained a full relational SQL database and UI for tracking assets, complete with bar-code scanning compatibility, user login and action tracking, and separate permissions for read only, user, and admin roles</li>
          <li>Created excel macros to reduce time creating metrics for end user compliance to study benchmarks based on project team requests, including custom helper class with common useful functions</li>
        </ul>
      </div>
      <div id='jobAtl'><div className="jobHead"><span className="jobPlace">Advanced Testing Laboratory</span> <span className="jobDate">March 2018-March 2019</span></div>
        <div className="jobTitle">Title: Laboratory Technician</div>
        <ul className='jobDet'>
          <li>Achieved important project benchmarks by designing experiments, analyzing results, and adapting procedure to client goals.</li>
          <li>Facilitated communication by maintaining detailed records of experimental procedures and results, and by shipping samples to cooperating labs.</li>
          <li>Increased productivity by creating Excel macros for template design.</li>
        </ul>
      </div>
      <div id='jobNu'><div className="jobHead"><span className="jobPlace">NuWaves Engineering</span> <span className="jobDate">October 2017-March 2018</span></div>
        <div className="jobTitle">Title: General Support Specialist</div>
        <ul className='jobDet'>
          <li>Ensured federal compliance by counting, sorting, and itemizing government property held by NuWaves.</li>
          <li>Managed inventory for Research and Development division through a SQL database and Excel workbooks.</li>
          <li>Promoted improved workflow by troubleshooting and investigating database inconsistencies.</li>
        </ul>
      </div>
    </div>
  }

export default Exper;