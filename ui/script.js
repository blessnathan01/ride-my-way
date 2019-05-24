		var i = 0;
		var move = 'Move anywhere you like...';
		var join = 'Join available ride offers.';
		var make = 'Create a ride offer.';

		function typeMove() {
			if (i < move.length) {
				document.getElementById("offer").innerHTML += move.charAt(i);
				i++;
				setTimeout(typeMove, 200);
			}
		}

		function typeJoin() {
			if (i < join.length) {
				document.getElementById("join").innerHTML += join.charAt(i);
				i++;
				setTimeout(typeJoin, 200);
			}
		}

		function typeMake() {
			if (i < join.length) {
				document.getElementById("make").innerHTML += make.charAt(i);
				i++;
				setTimeout(typeMake, 200);
			}
		}

		setInterval(typeMove, 1500);
		setInterval(typeJoin, 1500);
		setInterval(typeMake, 1500);

		function saved() {
			alert('All changes are saved.');
		}

		function request() {
			alert('A ride offer is requested.');
		}		

		function accepted1() {
			document.getElementById('change1').innerHTML = "accepted";
		}

		function accepted2() {
			document.getElementById('change2').innerHTML = "accepted";
		}

		function accepted3() {
			document.getElementById('change3').innerHTML = "accepted";
		}

		// activate the links
		function active1() {
			document.getElementById('d1').style.color = '#f7751f';
			document.getElementById('d2').style.color = '#d2d2d2';
			document.getElementById('d3').style.color = '#d2d2d2';
			document.getElementById('d4').style.color = '#d2d2d2';
		}

		function active2() {
			document.getElementById('d1').style.color = '#d2d2d2';
			document.getElementById('d2').style.color = '#f7751f';
			document.getElementById('d3').style.color = '#d2d2d2';
			document.getElementById('d4').style.color = '#d2d2d2';
		}

		function active3() {
			document.getElementById('d1').style.color = '#d2d2d2';
			document.getElementById('d2').style.color = '#d2d2d2';
			document.getElementById('d3').style.color = '#f7751f';
			document.getElementById('d4').style.color = '#d2d2d2';
		}

		function active4() {
			document.getElementById('d1').style.color = '#d2d2d2';
			document.getElementById('d2').style.color = '#d2d2d2';
			document.getElementById('d3').style.color = '#d2d2d2';
			document.getElementById('d4').style.color = '#f7751f';
		}

		function active5() {
			document.getElementById('d1').style.color = '#f7751f';
			document.getElementById('d2').style.color = '#d2d2d2';
			document.getElementById('d3').style.color = '#d2d2d2';
			document.getElementById('d4').style.color = '#d2d2d2';
		}