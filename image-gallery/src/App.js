import data from "./data.js";
import "./index.css";

const dataMap = data.map((item) => (
  <>
    <div>
      <div className="imageCap">
        <img
          className="image1"
          style={{ width: "250px", height: "250px", borderRadius: "20px" }}
          src={item.src.large}
          alt=""
        />
      </div>
      <p style={{ color: "#6F8AB4" }}>{item.photographer}</p>
    </div>
  </>
));

export const App = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "blue" }}>Image Gallery</h1>

      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {dataMap}
      </div>
    </>
  );
};
