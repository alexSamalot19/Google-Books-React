import React, { Component } from "react";
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

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
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
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Row
                      className="individualBook"
                      id={book.title + "Card"}
                      key={book._id}
                    >
                      <Col size="2" className="bookImage">
                        <img src={book.image} alt={book.title} />
                      </Col>
                      <Col size="1" className="verticalMargin" />
                      <Col size="9" className="bookInfo">
                        <Row>
                          <h3 className="bookTitle">{book.title}</h3>
                        </Row>
                        <Row>
                          <h4 className="bookAuthor">{book.authors}</h4>
                        </Row>
                        <Row className="buttonDiv ">
                          <button
                            className="saveBook btn btn-danger"
                            id={book.id}
                            onClick={() => this.deleteBook(book._id)}
                          >
                            Delete Book
                          </button>
                          <a href={book.link} target="_blank">
                            <button className="viewBook btn btn-secondary">
                              View Book
                            </button>
                          </a>
                        </Row>
                        <Row>
                          <p className="bookDescription">{book.description}</p>
                        </Row>
                      </Col>
                    </Row>
                    <br></br>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Books to Display</h3>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Saved;
