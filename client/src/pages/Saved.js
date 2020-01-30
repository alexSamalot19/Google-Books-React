import React, { Component } from "react";
import SavedBookList from "../components/SavedBookList/SavedBookList";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Saved extends Component {
  state = {
    books: [],
    authors: "",
    description: "",
    image: "",
    link: "",
    title: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({
          books: res.data,
          authors: "",
          description: "",
          image: "",
          link: "",
          title: ""
        })
      )
      .catch(err => console.log(err));
  };

  handleDeleteButton = id => {
    API.deleteBook(id)
      .then(res => this.componentDidMount())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.authors) {
      API.saveBook({
        authors: this.state.authors,
        description: this.state.description,
        image: this.state.image,
        link: this.state.link,
        title: this.state.title
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Books On My List</h1>
        </Jumbotron>

        <Container fluid>
          <Row>
            <SavedBookList
              books={this.state.books}
              handleDeleteButton={this.handleDeleteButton}
            />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Saved;
