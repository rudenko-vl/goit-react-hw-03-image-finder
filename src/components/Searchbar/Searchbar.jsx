import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Header, Form, FormBtn, BtnLabel, FormInput } from "./Searchbar.styled";

class Searchbar extends Component {
  state = {
    inputValue: "",
  };

  onSubmitForm = (ev) => {
    const { onSubmit } = this.props;
    const { inputValue } = this.state;
    ev.preventDefault();
    onSubmit(inputValue);
  };

  onChangeInput = (ev) => {
    this.setState({ inputValue: ev.target.value });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Header>
        <Form onSubmit={this.onSubmitForm}>
          <FormBtn type="submit">
            <BtnLabel>Search</BtnLabel>
          </FormBtn>

          <FormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChangeInput}
            value={inputValue}
          />
        </Form>
      </Header>
    );
  }
}

// Searchbar.propTypes = {
//   onSubmitForm: PropTypes.func.isRequired
// }

export default Searchbar;
