import React from 'react';
import './Footer.css';
import githubLogo from '../../images/footer-github.svg';
import npmLogo from '../../images/footer-npm.svg';
import linkedinLogo from '../../images/footer-linkedin.svg';

export default function Footer() {
  function generateCopyright() {
    const d = new Date();
    const year = d.getFullYear();
    return year;
  }

  return (
    <footer className="footer">
      <hr className="footerSeparator" />
      <div className="socialContainer">
        <a
          href="https://github.com/dannydi12/npmm-client"
          className="githubLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt="github logo" className="socialImage" />
        </a>
        <a
          href="https://www.npmjs.com/package/@npmmjs/npmm"
          target="_blank"
          className="npmLink"
          rel="noopener noreferrer"
        >
          <img src={npmLogo} alt="npm logo" className="socialImage" />
        </a>
        <a
          href="https://www.linkedin.com/company/npmm"
          target="_blank"
          className="linkedinLink"
          rel="noopener noreferrer"
        >
          <img src={linkedinLogo} alt="linkedin logo" className="socialImage" />
        </a>
      </div>
      <p className="copyright">
        Copyright &copy; {generateCopyright()}
        <br />
        npmm
      </p>
    </footer>
  );
}
