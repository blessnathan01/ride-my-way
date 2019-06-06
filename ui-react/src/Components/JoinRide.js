import React from "react";

function JoinRide() {
  return (
    <section id="respond">
      <h2>Join a ride offer</h2>
      <p class="detail">
        Respond to the available ride offers by clicking the beside button.
        Number of ride offers taken: 1 out of 3
      </p>
      <table align="center">
        <tr>
          <td>Ride offer to Tabata at 7am</td>
          <td>
            <button class="button accept">Accept</button>
          </td>
        </tr>
        <tr>
          <td>Ride offer to Kibaha at 9am</td>
          <td>
            <button class="button accept">Accept</button>
          </td>
        </tr>
        <tr>
          <td>Ride offer to Kijitonyama at 4pm</td>
          <td>
            <button class="button accept">Accept</button>
          </td>
        </tr>
      </table>
    </section>
  );
}

export default JoinRide;
