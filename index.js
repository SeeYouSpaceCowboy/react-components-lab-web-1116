const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('main')
);

class OlderCoaster extends React.Component {
  render() {
    return React.createElement( 'div', { className: 'oldercoster' }, '')
  }
}

class InFrontOfYou extends React.Component {
  render() {
    strong = React.createElement( 'strong', {}, 'right in front of you.' )
    p = React.createElement( 'p', {}, ['Sometimes the solution', strong])
    p1 = React.createElement( 'p', {}, 'Sometimes the solution is ')

    return React.createElement( 'div', { }, [p1, p])
  }
}

class ButcherShop extends React.Component {
  render() {
    strong = React.createElement( 'strong', {}, 'right in front of you.' )
    p = React.createElement( 'p', {}, ['Sometimes the solution', strong])
    p1 = React.createElement( 'p', {}, 'Sometimes the solution is ')

    return React.createElement( 'div', { }, [p1, p])
  }
}
