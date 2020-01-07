import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import JumbotronHome from "../components/JumbotronHome";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Saved extends Component {
  state = {
    booksCall: [],
    bookCallSearch: "",
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
        <JumbotronHome>
          <h1>Books On My List</h1>
        </JumbotronHome>

        <Container fluid>
          <Row>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    {/*  <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                    <Row
                      className="SearchResult row"
                      id={book.title + "Card"}
                      key={book._id}
                    >
                      {/* col-3 show image of the book */}
                      <Col size="2" className="bookImage">
                        <img src={book.image} alt={book.title} />
                      </Col>
                      <Col size="1" className="emptyCol" />
                      {/* col-9 show information of the book */}
                      <Col size="9" className="bookInfo">
                        <Row>
                          <h3 className="bookTitle">{book.title}</h3>
                        </Row>
                        <Row>
                          <h4 className="bookAuthor">{book.authors}</h4>
                        </Row>
                        <Row>
                          <p className="bookDescription">{book.description}</p>
                        </Row>
                      </Col>
                    </Row>
                    <br></br>
                    <Row className="buttonDiv ">
                      <button
                        className="saveBook btn btn-primary"
                        id={book.id}
                        onClick={() => this.deleteBook(book._id)}
                      >
                        Delete Book
                      </button>
                      <a href={book.link} target="_blank">
                        <button className="viewBook btn btn-success">
                          View Book
                        </button>
                      </a>
                    </Row>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Saved;
