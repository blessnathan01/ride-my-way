import React from "react";

function View() {
  return (
    <section id="view1">
      <h2>View ride offers</h2>
      <p className="detail1">
        View destination, time to leave, status and the name of rider who
        accepted the ride offer. Note that: when the time to leave comes to
        pass, the ride offer cancels automatically. Number of ride offers taken:
        1 out of 3
      </p>
      <table align="center">
        <tr>
          <th>Ride number</th>
          <th>Destination</th>
          <th>Time to leave</th>
          <th>Status</th>
          <th>Name of rider</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Tabata</td>
          <td>7am</td>
          <td>Accepted</td>
          <td>Jamie</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Kibaha</td>
          <td>9am</td>
          <td>Pending</td>
          <td>None</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Kijitonyama</td>
          <td>4pm</td>
          <td>Pending</td>
          <td>None</td>
        </tr>
      </table>
    </section>
  );
}

export default View;