        // const heading = React.createElement('h1', {id:"heading1", xyz:"testing"}, 'my react element');
        // const root = ReactDOM.createRoot(document.getElementById("root"));
        // root.render(heading);   

const parent = React.createElement('div', {id:"parent"}, [
        React.createElement('div', {id:"sibling1"}, [
                React.createElement('h1', {id:"heading1"}, 'child1 h1'),
                React.createElement('h1', {id:"heading2"}, 'child2 and sibling h2')
        ]),
        React.createElement('div', {id:"sibling2"}, [
                React.createElement('h1', {id:"heading1"}, 'child1 h1'),
                React.createElement('h1', {id:"heading2"}, 'child2 and sibling h2')
        ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);   