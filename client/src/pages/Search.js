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

  handleFormSubmit = event => {
    event.preventDefault();

    API.getBookSearch(this.state.bookSearch)
      .then(res => {
        if (res.data.items === "error") {
          throw new Error(res.data.items);
        } else {
          let results = res.data.items;
          results = results.map(result => {
            result = {
              key: result.id,
              id: result.id,
              title: result.volumeInfo.title,
              authors: result.volumeInfo.authors,
              description: result.volumeInfo.description,
              image: result.volumeInfo.imageLinks.thumbnail,
              link: result.volumeInfo.infoLink
            };
            return result;
          });
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
      }).catch(err => console.log(err));
    }
  };

  handleInputChange = event => {
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
