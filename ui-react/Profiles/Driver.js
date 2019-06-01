import React, { Component } from "react";
import "./driver.css";
import "../fonts.css";
import "../script";

function Driver() {
  return (
    <div>
      <section id="header2">
		<nav>
		<ul>
			<li><a href="#" className="brand2"><font size="6">Ride My Way</font></a></li>	
			<li><a href="#" className="link2" id="d1" onclick="active1()">Home</a></li>
			<li><a href="#create" className="link2" id="d2" onclick="active2()">Offer a ride</a></li>
			<li><a href="#view" className="link2" id="d3" onclick="active3()">View rides offers</a></li>
			<li><a href="#ride" className="link2" id="d4" onclick="active4()">Ride offer requests</a></li>
			<li><a href="sign-in.html" className="link2" id="d5" onclick="active5()">Sign out</a></li>
			<li><img src="profile.png" width="55" height="41" className="profile" alt="profile" title="BlessNathan" /></li>
		</ul>
	</nav>
		<div className="header2"><br />
		<p id="make"></p>
		</div>

	    </section>

	<section id="create">
		<h2>Offer a ride</h2>
		<p className="detail1">Create ride offers for riders to respond to. Type the destination, departure time and vehicle type. Number of ride offers created: 3</p>
		<table align="center">
			<tr>
				<td>Destination: </td>
				<td>Departure time: </td>
				<td>Vehicle type: </td>
			</tr>
			<tr>
				<td><input type="text" /></td>
				<td><input type="text" /></td>
				<td><input type="text" /></td>
			</tr>
		</table>
		<button className="button save" onclick="saved()">Create & Save</button>
	</section>

	<section id="view1">
		<h2>View ride offers</h2>
		<p className="detail1">View destination, time to leave, status and the name of rider who accepted the ride offer. Note that: when the time to leave comes to pass, the ride offer cancels automatically. Number of ride offers taken: 1 out of 3</p>
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

	<section id="ride1">
		<h2>Ride offer requests</h2>
		<p className="detail1">View name of the rider who requested the ride offer, destination and time-to-leave. Accept to the available ride offer request by clicking the beside button on the column for status. Note that: when the time to leave comes to pass, the ride offer request cancels automatically. Number of ride offer requests taken: 1 out of 3</p>
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
				<td><button className="accept1" onclick="accepted1()" id="change1">Accept</button></td>
			</tr>
			<tr>
				<td>2</td>
				<td>Kelvin</td>
				<td>Kimara</td>
				<td>11am</td>
				<td><button className="accept1" onclick="accepted2()" id="change2">Accept</button></td>
			</tr>
			<tr>
				<td>3</td>
				<td>Baraka</td>
				<td>Temeke</td>
				<td>3pm</td>
				<td><button className="accept1" onclick="accepted3()" id="change3">Accept</button></td>
			</tr>
		</table>
	</section>

	<footer>
		<div className="footer1">Copyright &copy; 2019 Ride My Way</div>
	</footer>
    </div>
  );
}

export default Driver;
