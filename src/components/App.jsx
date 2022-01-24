import React, { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
import PixabayApi from "../helpers/api-service";
import Searchbar from "./Searchbar/Searchbar";
import Button from "./Button/Button";
// import Modal from "./Modal/Modal";
// import Loader from "./Loader/Loader";

// import ImageGallery from "./ImageGallery/ImageGallery";

class App extends Component {
  state = {
    imageName: "",
    arrayImages: [],
    page: 1,
    showModal: false,
    // loading: false,
    // largeImage: null,
    // error: null,
  };
  
  componentDidUpdate(prevProps, prevState) {
    const { imageName, page } = this.state;
    const img = PixabayApi(imageName, page)
    console.log(img)

  }
 

  onFormSubmit = (imageName) => {
    this.setState({ imageName });
  };

  onImageClick = (largeImage) => {
    this.setState({ largeImage });
  };

  toogleModal = () => {
    this.setState((state) => ({
      showModal: !state.showModal,
    }));
  };

  onLoadMore = (ev) => {
    ev.preventDefault();
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  render() {
    // const { largeImage } = this.state;
    return (
      <div>
        <GlobalStyle />
        <Searchbar onSubmit={this.onFormSubmit}/>
        {/* <ImageGallery/> */}
        <Button onClick={this.onLoadMore} />
        {/* <Loader/> */}
        {/* <Modal toogleModal={this.toogleModal}>
          <img src={largeImage} alt="" />
        </Modal> */}
      </div>
    );
  }
}

export default App;
