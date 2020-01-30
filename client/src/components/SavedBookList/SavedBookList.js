import React from "react";
import { Row, Col } from "../Grid";

function SavedBookList(props) {
  if (props.books.length > 0) {
    return (
      <div className="card">
        <div className="card-body player">
          <div className="article">
            <h3>Saved Books:</h3>

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
                          className="deleteBook btn btn-danger"
                          id={book._id}
                          onClick={() => props.handleDeleteButton(book._id)}
                        >
                          Delete it!
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

export default SavedBookList;
