'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "Click hecho :)"
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'CLickea aqui'
    );
  }
}

const domContainer = document.querySelector('#container_componente_react');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
