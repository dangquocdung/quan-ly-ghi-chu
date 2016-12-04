var Note = React.createClass({
    render: function(){
        return(
          <div className="div-note">
              {this.props.children}
          </div>

        )

    }
});

function addDiv(){
  ReactDOM.render( <InputDiv /> ,document.getElementById("div-add") )
}

var list;

var List = React.createClass({
  getInitialState(){
      list = this;
      return {mang: ["Hi", "Hello", "Dung Dang"]};
  },
  render: function(){
      return(
        <div className="div-list">
          <div id="div-add"></div>
          <button onClick={addDiv}>Them</button>
          {
            this.state.mang.map(function(note, index){
              return (
                <Note key={index}>{note}</Note>
              )
            })
          }
        </div>
      )
    }
});

var InputDiv = React.createClass({
  send (){

    list.setState({mang: list.state.mang.concat(this.refs.txt.value)});

  },
  render: function(){
    return (
      <div>
        <input type="text" ref="txt" placeholder="Enter your note!" />
        <button onClick={this.send}>Gui</button>
      </div>
    )
  }
})

ReactDOM.render(
    <div>
      <List />
    
    </div>,
    document.getElementById('root')
);
