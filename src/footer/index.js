/**
 * @file
 * Footer component
 */
import React, { useEffect, useRef } from 'react';
import OFooter from '@financial-times/o-footer';
import './styles.scss';

const Footer = () => {
  const ref = useRef();

  useEffect(() => {
    (async () => {
      try {
        new OFooter(ref.current);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <footer
      ref={ref}
      data-o-footer--no-js=""
      className="o-footer o-footer--theme-dark"
      data-o-component="o-footer"
    >
      <div className="o-footer__container">
        <div className="o-footer__row">
          <nav className="o-footer__matrix" role="navigation" aria-label="Useful links">
            <div className="o-footer__matrix-group o-footer__matrix-group--1">
              <h3 className="o-footer__matrix-title">Support</h3>
              <div className="o-footer__matrix-content" id="o-footer-section-0">
                <div className="o-footer__matrix-column">
                  <a className="o-footer__matrix-link" href="/tour" data-trackable="View Site Tips">
                    <span className="o-footer__matrix-link__copy">View Site Tips</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://help.ft.com"
                    data-trackable="Help Centre"
                  >
                    <span className="o-footer__matrix-link__copy">Help Centre</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://aboutus.ft.com/contact-us"
                    data-trackable="Contact Us"
                  >
                    <span className="o-footer__matrix-link__copy">Contact Us</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://www.ft.com/aboutus"
                    data-trackable="About Us"
                  >
                    <span className="o-footer__matrix-link__copy">About Us</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://www.ft.com/accessibility"
                    data-trackable="Accessibility"
                  >
                    <span className="o-footer__matrix-link__copy">Accessibility</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://www.ft.com/tour/myft"
                    data-trackable="myFT Tour"
                  >
                    <span className="o-footer__matrix-link__copy">myFT Tour</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://aboutus.ft.com/en-gb/careers/"
                    data-trackable="Careers"
                  >
                    <span className="o-footer__matrix-link__copy">Careers</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="o-footer__matrix-group o-footer__matrix-group--1">
              <h3 className="o-footer__matrix-title">Legal &amp; Privacy</h3>
              <div className="o-footer__matrix-content" id="o-footer-section-1">
                <div className="o-footer__matrix-column">
                  <a
                    className="o-footer__matrix-link"
                    href="https://help.ft.com/help/legal-privacy/terms-conditions/"
                    data-trackable="Terms &amp; Conditions"
                  >
                    <span className="o-footer__matrix-link__copy">Terms &amp; Conditions</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://help.ft.com/help/legal-privacy/privacy/"
                    data-trackable="Privacy Policy"
                  >
                    <span className="o-footer__matrix-link__copy">Privacy Policy</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://help.ft.com/help/legal-privacy/cookies/"
                    data-trackable="Cookies"
                  >
                    <span className="o-footer__matrix-link__copy">Cookies</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://help.ft.com/help/legal-privacy/copyright/copyright-policy/"
                    data-trackable="Copyright"
                  >
                    <span className="o-footer__matrix-link__copy">Copyright</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://help.ft.com/help/legal/slavery-statement/"
                    data-trackable="Slavery Statement &amp; Policies"
                  >
                    <span className="o-footer__matrix-link__copy">Slavery Statement &amp; Policies</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="o-footer__matrix-group o-footer__matrix-group--1">
              <h3 className="o-footer__matrix-title" aria-controls="o-footer-section-2">
                Services
              </h3>
              <div className="o-footer__matrix-content" id="o-footer-section-2">
                <div className="o-footer__matrix-column">
                  <a
                    className="o-footer__matrix-link"
                    href="https://www.ft.com/securedrop"
                    data-trackable="Share News Tips Securely"
                    data-o-tracking-do-not-track="true"
                  >
                    <span className="o-footer__matrix-link__copy">Share News Tips Securely</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://www.ft.com/products"
                    data-trackable="Individual Subscriptions"
                  >
                    <span className="o-footer__matrix-link__copy">Individual Subscriptions</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://enterprise.ft.com/en-gb/services/group-subscriptions/group-contact-us/?segmentId=383c7f63-abf4-b62d-cb33-4c278e6fdf61&amp;cpccampaign=B2B_link_ft.com_footer"
                    data-trackable="Group Subscriptions"
                  >
                    <span className="o-footer__matrix-link__copy">Group Subscriptions</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://enterprise.ft.com/en-gb/services/republishing/"
                    data-trackable="Republishing"
                  >
                    <span className="o-footer__matrix-link__copy">Republishing</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://www.businessesforsale.com/ft2/notices"
                    data-trackable="Contracts &amp; Tenders"
                  >
                    <span className="o-footer__matrix-link__copy">Contracts &amp; Tenders</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://www.exec-appointments.com/"
                    data-trackable="Executive Job Search"
                  >
                    <span className="o-footer__matrix-link__copy">Executive Job Search</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://fttoolkit.co.uk/"
                    data-trackable="Advertise with the FT"
                  >
                    <span className="o-footer__matrix-link__copy">Advertise with the FT</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://twitter.com/financialtimes"
                    data-trackable="Follow the FT on Twitter"
                  >
                    <span className="o-footer__matrix-link__copy">Follow the FT on Twitter</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://transact.ft.com/"
                    data-trackable="FT Transact"
                  >
                    <span className="o-footer__matrix-link__copy">FT Transact</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://enterprise.ft.com/en-gb/services/group-subscriptions/education/"
                    data-trackable="Secondary Schools"
                  >
                    <span className="o-footer__matrix-link__copy">Secondary Schools</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="o-footer__matrix-group o-footer__matrix-group--1">
              <h3 className="o-footer__matrix-title" aria-controls="o-footer-section-3">
                Tools
              </h3>
              <div className="o-footer__matrix-content" id="o-footer-section-3">
                <div className="o-footer__matrix-column">
                  <a
                    className="o-footer__matrix-link"
                    href="https://markets.ft.com/data/portfolio/dashboard"
                    data-trackable="Portfolio"
                  >
                    <span className="o-footer__matrix-link__copy">Portfolio</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://www.ft.com/todaysnewspaper"
                    data-trackable="Today's Newspaper (ePaper)"
                  >
                    <span className="o-footer__matrix-link__copy">Today's Newspaper (ePaper)</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://markets.ft.com/data/alerts/"
                    data-trackable="Alerts Hub"
                  >
                    <span className="o-footer__matrix-link__copy">Alerts Hub</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://rankings.ft.com"
                    data-trackable="Business School Rankings"
                  >
                    <span className="o-footer__matrix-link__copy">Business School Rankings</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://kat.ft.com/"
                    data-trackable="Enterprise Tools"
                  >
                    <span className="o-footer__matrix-link__copy">Enterprise Tools</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://www.ft.com/news-feed"
                    data-trackable="News feed"
                  >
                    <span className="o-footer__matrix-link__copy">News feed</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://www.ft.com/newsletters"
                    data-trackable="Newsletters"
                  >
                    <span className="o-footer__matrix-link__copy">Newsletters</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://markets.ft.com/research/Markets/Currencies?segid=70113"
                    data-trackable="Currency Converter"
                  >
                    <span className="o-footer__matrix-link__copy">Currency Converter</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="o-footer__matrix-group o-footer__matrix-group--1">
              <h3 className="o-footer__matrix-title" aria-controls="o-footer-section-4">
                Community &amp; Events
              </h3>
              <div className="o-footer__matrix-content" id="o-footer-section-4">
                <div className="o-footer__matrix-column">
                  <a
                    className="o-footer__matrix-link"
                    href="https://www.ft.com/tour/community"
                    data-trackable="FT Community"
                  >
                    <span className="o-footer__matrix-link__copy">FT Community</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://live.ft.com/"
                    data-trackable="FT Live"
                  >
                    <span className="o-footer__matrix-link__copy">FT Live</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://forums.ft.com"
                    data-trackable="FT Forums"
                  >
                    <span className="o-footer__matrix-link__copy">FT Forums</span>
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://bdp.ft.com"
                    data-trackable="Board Director Programme"
                  >
                    <span className="o-footer__matrix-link__copy">Board Director Programme</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="o-footer__matrix-group o-footer__matrix-group--1">
              <h3 className="o-footer__matrix-title o-footer__matrix-title--link">
                <a className='o-footer__matrix-link o-footer__matrix-link--more' id="o-footer-section-5" href="https://ft.com/more-from-ft-group">
                  <span className="o-footer__matrix-link__copy">More from the FT Group</span>
                </a>
              </h3>
            </div>
          </nav>
        </div>
        <div className="o-footer__copyright" role="contentinfo">
          <small>
            Markets data delayed by at least 15 minutes. &#xA9; THE FINANCIAL TIMES LTD{' '}
            {new Date().getFullYear()}
            {'. '}
            <abbr title="Financial Times" aria-label="F T">
              FT
            </abbr>{' '}
            and &#x2018;Financial Times&#x2019; are trademarks of The Financial Times Ltd.
            <br />
            The Financial Times and its journalism are subject to a self-regulation regime under the{' '}
            <a
              href="https://aboutus.ft.com/en-gb/ft-editorial-code/"
              aria-label="F T Editorial Code of Practice"
            >
              FT Editorial Code of Practice
            </a>
            .
          </small>
        </div>
      </div>
      <div className="o-footer__brand">
        <div className="o-footer__container">
          <div className="o-footer__brand-logo" />
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'GFooter';

export default Footer;
