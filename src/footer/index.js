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
                    View Site Tips
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://help.ft.com"
                    data-trackable="Help Centre"
                  >
                    Help Centre
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://www.ft.com/aboutus"
                    data-trackable="About Us"
                  >
                    About Us
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://www.ft.com/accessibility"
                    data-trackable="Accessibility"
                  >
                    Accessibility
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://www.ft.com/tour/myft"
                    data-trackable="myFT Tour"
                  >
                    myFT Tour
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://aboutus.ft.com/en-gb/careers/"
                    data-trackable="Careers"
                  >
                    Careers
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
                    Terms &amp; Conditions
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://help.ft.com/help/legal-privacy/privacy/"
                    data-trackable="Privacy"
                  >
                    Privacy
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://help.ft.com/help/legal-privacy/cookies/"
                    data-trackable="Cookies"
                  >
                    Cookies
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://help.ft.com/help/legal-privacy/copyright/copyright-policy/"
                    data-trackable="Copyright"
                  >
                    Copyright
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://help.ft.com/help/legal/slavery-statement/"
                    data-trackable="Slavery Statement &amp; Policies"
                  >
                    Slavery Statement &amp; Policies
                  </a>
                </div>
              </div>
            </div>
            <div className="o-footer__matrix-group o-footer__matrix-group--2">
              <h3 className="o-footer__matrix-title" aria-controls="o-footer-section-2">
                Services
              </h3>
              <div className="o-footer__matrix-content" id="o-footer-section-2">
                <div className="o-footer__matrix-column">
                  <a
                    className="o-footer__matrix-link"
                    href="https://live.ft.com/"
                    data-trackable="FT Live"
                  >
                    FT Live
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://www.ft.com/securedrop"
                    data-trackable="Share News Tips Securely"
                    data-o-tracking-do-not-track="true"
                  >
                    Share News Tips Securely
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://www.ft.com/products"
                    data-trackable="Individual Subscriptions"
                  >
                    Individual Subscriptions
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://enterprise.ft.com/en-gb/services/group-subscriptions/group-contact-us/?segmentId=383c7f63-abf4-b62d-cb33-4c278e6fdf61&amp;cpccampaign=B2B_link_ft.com_footer"
                    data-trackable="Group Subscriptions"
                  >
                    Group Subscriptions
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://enterprise.ft.com/en-gb/services/republishing/"
                    data-trackable="Republishing"
                  >
                    Republishing
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://www.businessesforsale.com/ft2/notices"
                    data-trackable="Contracts &amp; Tenders"
                  >
                    Contracts &amp; Tenders
                  </a>
                </div>
                <div className="o-footer__matrix-column">
                  <a
                    className="o-footer__matrix-link"
                    href="https://www.exec-appointments.com/"
                    data-trackable="Executive Job Search"
                  >
                    Executive Job Search
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://fttoolkit.co.uk/"
                    data-trackable="Advertise with the FT"
                  >
                    Advertise with the FT
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://twitter.com/financialtimes"
                    data-trackable="Follow the FT on Twitter"
                  >
                    Follow the FT on Twitter
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://transact.ft.com/en-gb/"
                    data-trackable="FT Transact"
                  >
                    FT Transact
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://enterprise.ft.com/en-gb/services/group-subscriptions/education/"
                    data-trackable="Secondary Schools"
                  >
                    Secondary Schools
                  </a>
                </div>
              </div>
            </div>
            <div className="o-footer__matrix-group o-footer__matrix-group--2">
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
                    Portfolio
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://www.ft.com/todaysnewspaper"
                    data-trackable="Today's Newspaper (ePaper)"
                  >
                    Today's Newspaper (ePaper)
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://markets.ft.com/data/alerts/"
                    data-trackable="Alerts Hub"
                  >
                    Alerts Hub
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://rankings.ft.com/businessschoolrankings/global-mba-ranking-2019"
                    data-trackable="MBA Rankings"
                  >
                    MBA Rankings
                  </a>
                </div>
                <div className="o-footer__matrix-column">
                  <a
                    className="o-footer__matrix-link"
                    href="https://kat.ft.com/"
                    data-trackable="Enterprise Tools"
                  >
                    Enterprise Tools
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://www.ft.com/news-feed"
                    data-trackable="News feed"
                  >
                    News feed
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://www.ft.com/newsletters"
                    data-trackable="Newsletters"
                  >
                    Newsletters
                  </a>
                  <a
                    className="o-footer__matrix-link"
                    href="https://markets.ft.com/research/Markets/Currencies?segid=70113"
                    data-trackable="Currency Converter"
                  >
                    Currency Converter
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <div className="o-footer__external-link o-footer__matrix-title">
            <a
              className="o-footer__more-from-ft o-footer__matrix-title"
              href="https://www.ft.com/more-from-ft-group"
            >
              More from the FT Group
            </a>
          </div>
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
