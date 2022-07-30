import catMeme from "./images/cat-meme.png";

export default function Header() {
  return (
    <header className="header">
      <img className="header--image" src={catMeme} alt="main-image" />
      <h2 className="header--title">Meme Generator</h2>
    </header>
  );
}
