function customRender(reactElem, Container) {
  /**
    const domElement = document.createElement(reactElem.type) 
    domElement.innerHTML = reactElem.children;
    domElement.setAttribute('href' , reactElem.props.herf)
    domElement.setAttribute('target' , reactElem.props.target)

    Container.appendChild(domElement);
    */


  const domElement = document.createElement(reactElem.type);
domElement.innerHTML = reactElem.children; // this sets the text inside the anchor

for (const prop in reactElem.props) {
  if (prop === "children") continue;
  domElement.setAttribute(prop, reactElem.props[prop]);
}
Container.appendChild(domElement);
}

const reactElem = {
  type: "a",
  props: {
    href: "https://github.com/",
    target: "_blank",
  },
  children: "Click me To visit github",
};
const mainContainer = document.getElementById("root");

customRender(reactElem, mainContainer);
