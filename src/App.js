import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Gallery from './components/ImageGallery';
import GlobalStyle from './variableStyle/globalStyle';
import Loader from './components/Loader';
import Modal from './components/Modal';
import SearchForm from './components/SearchBar';
import StyledBtn from './components/LoadMoreBtn';
import UpButton from './components/UpButton';
import * as API from './services/images-api';
import { Wrapper, Error } from './App.styled';

toast.configure();

const mapper = photos => {
  return photos.map(({ webformatURL: smallImgURL, ...props }) => ({
    smallImgURL,
    ...props,
  }));
};

export default class App extends Component {
  state = {
    query: '',
    photos: [],
    page: 0,
    isLoading: false,
    error: null,
    openImgId: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, isLoading } = this.state;
    if (page > 1 && prevState.isLoading !== isLoading) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handleSubmit = query => {
    this.setState(
      { query, photos: [], page: 0, isLoading: false },
      this.fetchPhotos,
    );
  };

  fetchPhotos = () => {
    const { query, page } = this.state;
    const itemsPerPage = 12;
    this.setState({ isLoading: true });
    API.getApi(query, page + 1, itemsPerPage)
      .then(res => {
        this.setState(prevState => ({
          photos: [...prevState.photos, ...mapper(res.data.hits)],
          page: prevState.page + 1,
        }));
      })
      .catch(error => {
        this.setState({ error });
        toast.error('Failed to load!');
      })
      .finally(() => {
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 745);
      });
  };

  openModal = openImgId => this.setState({ openImgId });

  closeModal = () => this.setState({ openImgId: null });

  render() {
    const { photos, error, isLoading, openImgId, query } = this.state;

    let imgToOpen = null;

    if (openImgId) {
      imgToOpen = photos.find(photo => photo.id === openImgId);
    }

    return (
      <>
        <GlobalStyle />
        <Wrapper>
          <SearchForm onSubmit={this.handleSubmit} />
          {!isLoading && photos.length > 0 && (
            <>
              <Gallery items={photos} onImgClick={this.openModal} />

              <StyledBtn type="button" onClick={this.fetchPhotos} />
              <UpButton />
            </>
          )}

          {error && <Error>Something went wrong! Try again.</Error>}

          {isLoading && <Loader />}

          {imgToOpen && (
            <Modal onClose={this.closeModal}>
              <img src={imgToOpen.largeImageURL} alt={query} />
            </Modal>
          )}
        </Wrapper>
      </>
    );
  }
}
