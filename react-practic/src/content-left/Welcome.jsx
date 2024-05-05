import "../content-left/welcome.css";
import { Title } from "./title/Title";

const title = "Happiness store";

export function Welcome() {
  return (
    <>
      <div className="post">
        <Title title={title} />
        <div className="group">
          {[...Array(3)].map((item, index) => (
            <div className="circle" key={index} />
          ))}
        </div>
        <p className="small_text">
          Here you will find the cutest and funniest kittens for your home.
          Immerse yourself in a world of purring furry friends and choose your
          perfect kitten right now. Welcome to our cat family!
        </p>
      </div>
    </>
  );
}
