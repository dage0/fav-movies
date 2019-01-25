import React from 'react';
import PropTypes from 'prop-types';

export default class Cards extends React.Component {
  static propTypes = {
    movie: PropTypes.object,
  }

  state= {}

  render() {
    const { movie: { poster_path, title, overview } } = this.props;
    const src = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`;

    return (
      <div>
        <h2>{title}</h2>
        <div
          style={{
            background: `url(${src}) 20% 1%/cover no-repeat`,
            height: 400,
            color: 'white',
            fontAlign: 'center',
          }}
        />
        <p>{overview}</p>
      </div>

    );
  }
}
