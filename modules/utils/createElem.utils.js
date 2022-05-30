const createElem = ({
  tag, className, id, text,
}) => {
  const elem = document.createElement(tag);
  if (className) {
    elem.className = className;
  }

  if (id) {
    elem.id = id;
  }

  if (text) {
    const textNode = document.createTextNode(text);
    elem.appendChild(textNode);
  }

  return elem;
};

export default createElem;
