import React from "react";
import moment from "moment";

function Cards(props) {
  return (
    <div>
      <div className="card">
        <img
          className="card-img-top"
          src="https://cdn-icons-png.flaticon.com/128/3920/3920688.png"
          alt="sunsrise"
        />
        <div className="card-body">
          <p className="card-text">
            sunrise
            <br />
            {props.success
              ? moment
                  .unix(props.sys.sunrise)
                  .add(props.timezone)
                  .format("HH:mm a")
              : null}
          </p>
        </div>
      </div>

      <div className="card">
        <img
          className="card-img-top"
          src="https://cdn-icons-png.flaticon.com/128/3920/3920799.png"
          alt="sunset"
        />
        <div className="card-body">
          <p className="card-text">
            sunset
            <br />
            {props.success
              ? moment
                  .unix(props.sys.sunset)
                  .add(props.timezone)
                  .format("HH:mm a")
              : null}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
