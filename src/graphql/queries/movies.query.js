import gql from 'graphql-tag';

export const MY_FAV_MOVIES = gql`
  query myFavMovies {
    myFavMovies {
      id
      title
      poster_path
      overview
      genres {
        id
        name
      }
      similar {
        poster_path
        title
        genres {
          id
          name
        }
      }
    }
  }
`;

export const MOVIE = gql`
  query movie($id: Int) {
    movie( id: $id ) {
      id
      title
      poster_path
      overview
      genres {
        id
        name
      }
      similar {
        poster_path
        title
        genres {
          id
          name
        }
      }
    }
  }
`;
