import React from "react";

function RideReq() {
  return (
    <section id="ride1">
      <h2>Ride offer requests</h2>
      <p className="detail1">
        View name of the rider who requested the ride offer, destination and
        time-to-leave. Accept to the available ride offer request by clicking
        the beside button on the column for status. Note that: when the time to
        leave comes to pass, the ride offer request cancels automatically.
        Number of ride offer requests taken: 1 out of 3
      </p>
      <table align="center">
        <tr>
          <th>Ride number</th>
          <th>Name of rider</th>
          <th>Destination</th>
          <th>Time to leave</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Sarah</td>
          <td>Kitunda</td>
          <td>8am</td>
          <td>
            <button className="accept1">Accept</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Kelvin</td>
          <td>Kimara</td>
          <td>11am</td>
          <td>
            <button className="accept1">Accept</button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Baraka</td>
          <td>Temeke</td>
          <td>3pm</td>
          <td>
            <button className="accept1">Accept</button>
          </td>
        </tr>
      </table>
    </section>
  );
}

export default RideReq;
