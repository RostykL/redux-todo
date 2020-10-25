import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionAddItem, actionMarkComplete } from "./redux_dir/actionCreators";
import { useState } from "react";
function App({ add, todos, mark}) {
  const [text, setText] = useState("j");
  const handleClick = () => {
    add(text);
  };

  const handelLiClick = (id) => {
    mark(id);
  }
  return (
    <div className="dispaly">
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <input type="button" onClick={handleClick} value="press" />
      <ul>
        {todos.map((el, i) => {
          return <li style={{
            fontSize: '36px',
            textDecoration: el.isCompleted ? 'line-through' : 'none'
          }} key={el.id} onClick={() => handelLiClick(i)}>{el.text}</li>;
        })}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todos: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add: (text) => dispatch(actionAddItem(text)),
    mark: (id) => dispatch(actionMarkComplete(id)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
