import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SearchBar,
  Form,
  SearchBtn,
  SearchLabel,
  Input,
} from './SearchBar.styled';

class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    inputValue: '',
  };

  handleChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.inputValue);

    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <>
        <SearchBar>
          <Form onSubmit={this.handleSubmit}>
            <SearchBtn type="submit">
              <SearchLabel>Search</SearchLabel>
            </SearchBtn>
            <Input
              type="text"
              autoComplete="off"
              value={inputValue}
              placeholder="Search images and photos"
              onChange={this.handleChange}
            />
          </Form>
        </SearchBar>
      </>
    );
  }
}

export default SearchForm;
