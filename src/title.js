export function typingAnimation() {
  const text = 'Hello World';
  const speed = 160;
  let index = 0;
  const type = () => {
    if (index < text.length) {
      document.getElementById('title').innerHTML += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }
  type();
}


export const title = () => {
  const titleNode = document.createElement("h1")
  titleNode.id = 'title';
  return titleNode;
};