import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { MY_FAV_MOVIES } from '../../graphql/queries/movies.query';
import Cards from './Cards';

class Home extends Component {
  static propTypes = {
    data: PropTypes.object,
  }

  state = {
    slideIndex: 0,
  }

  onClick = () => {
    this.slider.slickNext();
  }

  renderCards() {
    const { data: { myFavMovies = [], loading } } = this.props;
    if (loading) {
      return <span>loading...</span>;
    }
    return myFavMovies.map(movie => (
      <div className="col-xs-3">
        <Cards key={movie.id} movie={movie} />
      </div>
    ));
  }

  render() {
    return (
      <div>
        <div className="row center-xs" style={{ marginBottom: 50 }}>
          <div className="col-xs-12">
            <h1>create-react-app v2 + react-router + apollo-client </h1>
          </div>
          <div className="col-xs-8">
            <h3>
              <a href="https://github.com/dage0">Github repo</a>
            </h3>
          </div>
          <div className="col-xs-8">
            <h3>
              <a href="https://x717qx9vxq.sse.codesandbox.io/">Apollo server codepen</a>
            </h3>
          </div>
        </div>
        <div className="row center-xs">
          {this.renderCards()}
        </div>
      </div>
    );
  }
}

export default graphql(MY_FAV_MOVIES)(Home);
