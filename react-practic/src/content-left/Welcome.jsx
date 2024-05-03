import "../content-left/welcome.css";

const text =
  "Here you will find the cutest and funniest kittens for your home. Immerse yourself in a world of purring furry friends and choose your perfect kitten right now. Welcome to our cat family!";

export function Welcome() {
  return (
    <>
      <div className="post">
        <h1 className="big_text">Happiness store</h1>
        <div className="group">
          {[...Array(3)].map((item, index) => (
            <div className="circle" key={index} />
          ))}
        </div>
        <p className="small_text">{text}</p>
      </div>
    </>
  );
}
