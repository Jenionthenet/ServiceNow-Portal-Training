api.controller = function ($scope, $window) {
	/* widget controller */
	var c = this;

	openNav = function () {
		document.getElementById("mySidenav").style.width = "250px";
		document.getElementById("main").style.marginLeft = "250px";
	}


	closeNav = function () {
		document.getElementById("mySidenav").style.width = "0";
		document.getElementById("main").style.marginLeft = "0";
	}


	$scope.followLink = function (link, page, externalURL, suffix) {
		if (link == 'page') {
			$window.location.href = "/" + suffix + "?id=" + page;
		} else {
			window.location.href = externalURL;
		}

	}

};