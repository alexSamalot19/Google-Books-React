import React from "react";
import { Row, Col } from "../Grid";

function BookList(props) {
  if (props.books.length > 0) {
    return (
      <div className="card">
        <div className="card-body player">
          <div className="article">
            <h3>Search Results for: {props.bookSearchValue}</h3>
            {props.books.map(book => {
              return (
                <li className="search-list list-group-item">
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
                          className="saveBook btn btn-primary"
                          id={book.id}
                          onClick={event => props.handleSaveButton(event)}
                        >
                          Save it!
                        </button>
                        <a
                          href={book.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="viewBook btn btn-secondary">
                            View it!
                          </button>
                        </a>
                      </Row>
                      <Row>
                        <p className="bookDescription">{book.description}</p>
                      </Row>
                    </Col>
                  </Row>
                  <br></br>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default BookList;
