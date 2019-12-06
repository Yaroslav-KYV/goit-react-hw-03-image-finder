import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const getApi = (query, page, itemsPerPage) => {
  const baseURL = 'https://pixabay.com/api';
  const params = `?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=${itemsPerPage}`;

  return axios.get(
    `${baseURL}/${params}&key=${[process.env.REACT_APP_APIKEY]}`,
  );
};
