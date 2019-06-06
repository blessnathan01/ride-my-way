import React from "react";

function Offer() {
  return (
    <section id="create">
      <h2>Offer a ride</h2>
      <p className="detail1">
        Create ride offers for riders to respond to. Type the destination,
        departure time and vehicle type. Number of ride offers created: 3
      </p>
      <table align="center">
        <tr>
          <td>Destination: </td>
          <td>Departure time: </td>
          <td>Vehicle type: </td>
        </tr>
        <tr>
          <td>
            <input type="text" />
          </td>
          <td>
            <input type="text" />
          </td>
          <td>
            <input type="text" />
          </td>
        </tr>
      </table>
      <button className="button save" onclick="saved()">
        Create & Save
      </button>
    </section>
  );
}

export default Offer;
