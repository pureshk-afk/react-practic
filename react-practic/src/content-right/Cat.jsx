import image from "../assets/klipartz1.png";
import "../content-right/cat.css";

export function Cat() {
  return (
    <>
      <div className="cat">
        <div className="big_c">
          <div className="middle_c">
            <div className="small_c"></div>
          </div>
        </div>

        <img className="img_cat" src={image} />
      </div>
    </>
  );
}
