import React, { Component } from "react";
import { ReactComponent as Upwork } from "./upwork-tile.svg";
import "./style.css";
class Footer extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {networks}
              <li className="upwork-footer">
                <a href="https://www.upwork.com/freelancers/~01c232f69a1e510d22">
                  <Upwork  />
                </a>
              </li>
            </ul>

            <ul className="copyright">
              <li>
                &copy; All credit goes to Tim Baker - Copyright 2017 Tim Baker
              </li>
              <li>
                Design by{" "}
                <a title="Styleshout" href="http://www.styleshout.com/">
                  Styleshout
                </a>
              </li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
