import { connect } from "react-redux";
import { addTodo, markAsDone } from "./action";
import Todo from "./todo";

const mapStateToProps = state => {
  return {
    todo: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addTodo(todo)),
    markAsDone: todo => dispatch(markAsDone(todo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
