import "./AboutContentStyles.css";
import React from "react";
import { Link } from "react-router-dom";

import React1 from "../../assets/react1.jpg"
import React2 from "../../assets/react2.webp"
import VoiceRecorder from "./VoiceRecorder";

export const AboutContent = () => {


    return(
        <div className="pricing">
        <div className="card-container">
          <div className="card">
            <form>
              <div className="form-group">
                <label for="inputName">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Full Name"
                />
              </div>
  
              <div className="form-group">
                <label for="inputDescription">Description</label>
                <textarea
                  className="form-control"
                  id="inputDescription"
                  placeholder="Description of the Complaint"
                ></textarea>
  
                <VoiceRecorder />
                <br />
                {/* <VoiceRecorder /> */}
                <br />
              </div>
  
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="card">
            <form>
              <div className="form-group">
                <label for="inputName">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Full Name"
                />
              </div>
  
              <div className="form-group">
                <label for="inputDescription">Description</label>
                <textarea
                  className="form-control"
                  id="inputDescription"
                  placeholder="Description of the Complaint"
                ></textarea>
  
                 <VoiceRecorder />
                <br />
                {/* <VoiceRecorder /> */}
                <br />
              </div>
  
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    )



}