import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index.js";
import { bindActionCreators } from "redux";
class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }
  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  //whatever is returned will show up as props inside of booklist
  return {
    books: state.books
  };
}

function mapDispathToProps(dispatch) {
  //whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}
//promte booklist from a component to a container - it needs to know about his new dispatch method, selectBook. Make it available as prop
export default connect(mapStateToProps, mapDispathToProps)(BookList);
