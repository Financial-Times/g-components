/**
 * @file
 * OnwardJourney component
 */

import React from 'react';
import PropTypes from 'prop-types';
import { makeCancelable } from '../../shared/helpers';
import './styles.scss';

class OnwardJourney extends React.Component {
  static displayName = 'GOnwardJourney';

  constructor(props) {
    super(props);
    this.state = {
      sections: [],
    };
  }

  async componentDidMount() {
    const { urlBase, layout, relatedContent } = this.props;

    this.sectionP = makeCancelable(
      Promise.all(
        relatedContent.map(({ list, rows = 1 }) => {
          const limit = rows * 4;
          const url = `${urlBase}${list}/html/${layout}?limit=${limit}`;
          return fetch(url).then(res => res.text());
        }),
      ),
    );

    try {
      const sections = await this.sectionP.promise;
      this.setState({ sections });
    } catch (e) {
      if (e.isCanceled) return;
      console.error(e); // eslint-disable-line no-console
    }
  }

  componentWillUnmount() {
    this.sectionP.cancel();
  }

  render() {
    const { sections } = this.state;
    return sections.map((section, idx) => (
      <section
        key={idx} // eslint-disable-line react/no-array-index-key
        className="onward-journey__section"
        data-g-component="onward-journey"
        dangerouslySetInnerHTML={{ __html: section }} // eslint-disable-line react/no-danger
      />
    ));
  }
}

OnwardJourney.propTypes = {
  relatedContent: PropTypes.arrayOf(
    PropTypes.shape({
      rows: PropTypes.number.isRequired,
      list: PropTypes.string,
    }),
  ),
  urlBase: PropTypes.string,
  layout: PropTypes.string,
};

OnwardJourney.defaultProps = {
  relatedContent: [],
  urlBase: 'https://ig.ft.com/onwardjourney/v3/',
  layout: '',
};

export default OnwardJourney;
