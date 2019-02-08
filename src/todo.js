import React from "react";

export default class Todo extends React.Component {
  state = {
    todo: ""
  };
  render() {
    const list = this.props.todo.cards.map((todo, index) => (
      <div key={index}>
        <li>
          {!todo.done && <span>{todo.content}</span>}
          {todo.done && <s>{todo.content}</s>}
          <button
            onClick={() => {
              this.props.markAsDone(todo.content);
            }}
          >
            終了
          </button>
        </li>
      </div>
    ));
    return (
      <div>
        <input
          type="text"
          onChange={elm => this.setState({ todo: elm.target.value })}
        />
        <button onClick={() => this.props.addTodo(this.state.todo)}>
          追加
        </button>
        <br />
        <ul>{list}</ul>
      </div>
    );
  }
}
