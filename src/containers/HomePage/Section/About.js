import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">
          {" "}
          <FormattedMessage id="homepage.about" />
        </div>

        <div className="section-about-content">
          {/* LEFT - IMAGE */}
          <div className="content-left">
            <img
              src="https://images.pexels.com/photos/6129233/pexels-photo-6129233.jpeg"
              alt="MedicalHub"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </div>

          {/* RIGHT - TEXT */}
          <div className="content-right">
            <p>
              <FormattedMessage id="homepage.about-content" />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

export default connect(mapStateToProps)(About);
