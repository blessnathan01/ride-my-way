import React from "react";
import "./css/rider.css";

function Req() {
  return (
    <section id="ride">
      <h2>Ride offer requests</h2>
      <p class="detail">
        Create ride offer request for drivers to respond to. Type the
        destination and departure time. Number of ride offer requests created: 3
      </p>
      <table align="center">
        <tr>
          <td>Destination: </td>
          <td>Departure time: </td>
        </tr>
        <tr>
          <td>
            <input type="text" />
          </td>
          <td>
            <input type="text" />
          </td>
        </tr>
      </table>
      <button class="button request" onclick="request()">
        Request
      </button>
      <p class="detail">
        View name of the driver who accepted your ride offer request,
        destination and time-to-leave. Note that: when the time to leave comes
        to pass, the ride offer request cancels automatically. Number of ride
        offer requests taken: 1 out of 3
      </p>
      <table align="center">
        <tr>
          <th>Ride number</th>
          <th>Name of driver</th>
          <th>Destination</th>
          <th>Time to leave</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Samwel</td>
          <td>Kitunda</td>
          <td>8am</td>
          <td>Accepted</td>
        </tr>
        <tr>
          <td>2</td>
          <td>None</td>
          <td>Kimara</td>
          <td>11am</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>3</td>
          <td>None</td>
          <td>Temeke</td>
          <td>3pm</td>
          <td>Pending</td>
        </tr>
      </table>
    </section>
  );
}

export default Req;
