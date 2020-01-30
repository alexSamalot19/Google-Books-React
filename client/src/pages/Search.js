import React, { Component } from "react";
import BookList from "../components/BookList/BookList";
import Jumbotron from "../components/Jumbotron";
import Button from "../components/Button";
import { Container, Row, Col } from "../components/Grid";
import Input from "../components/Input";
import API from "../utils/API";

const inputBottomMargin = { marginBottom: "20px" };

class Search extends Component {
  state = {
    books: [],
    authors: "",
    description: "",
    image: "",
    link: "",
    title: ""
  };

  //function to control the submit button of the search form
  handleFormSubmit = event => {
    event.preventDefault();
    // console.log(this.state.bookSearch);
    // once it clicks it connects to the google book api with the search value
    API.getBookSearch(this.state.bookSearch)
      .then(res => {
        if (res.data.items === "error") {
          throw new Error(res.data.items);
        } else {
          // store response in a array
          let results = res.data.items;
          //map through the array
          results = results.map(result => {
            //store each book information in a new object
            result = {
              key: result.id,
              id: result.id,
              title: result.volumeInfo.title,
              authors: result.volumeInfo.authors,
              description: result.volumeInfo.description,
              image: result.volumeInfo.imageLinks.thumbnail,
              link: result.volumeInfo.infoLink
            };
            // console.log(result);
            return result;
          });
          // reset the sate of the empty books array to the new arrays of objects with properties geting back from the response
          this.setState({ books: results, error: "" });
        }
      })
      .catch(err => this.setState({ error: err.items }));
  };

  handleSaveButton = event => {
    event.preventDefault();
    let savedBook = this.state.books.filter(
      book => book.id === event.target.id
    );
    console.log(savedBook[0]);
    let bookData = savedBook[0];
    if (bookData.title && bookData.authors) {
      API.saveBook({
        authors: bookData.authors,
        description: bookData.description,
        image: bookData.image,
        link: bookData.link,
        title: bookData.title
      })
        // .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    // console.log(event.target);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(value);
  };

  render() {
    return (
      <div>
        <Jumbotron />

        <Container>
          <Row>
            <Col size="md-12">
              <form style={inputBottomMargin}>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="bookSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="How about Kill a Mockingbird?"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <BookList
              books={this.state.books}
              handleSaveButton={this.handleSaveButton}
              bookSearchValue={this.state.bookSearch}
            />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
