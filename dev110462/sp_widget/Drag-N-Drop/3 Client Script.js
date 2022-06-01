api.controller = function ($scope) {
	/* widget controller */
	var c = this;
	$scope.models = {
		selected: null,
		lists: c.data.state_array
	};
	$scope.$watch('models', function (model) {
		$scope.modelAsJson = angular.toJson(model, true);
	}, true);

	$scope.changedValue = function (indexValue, array) {
		for (var i = 0; i < array.lenght; i++) {
			for (var j = 0; j < array[i].records.length; j++) {
				if (array[i].records[j].id == indexValue) {
					c.data.state = array[i].value;
				}
			}
		}
		console.log("Changed Value- " + c.data.state);
		c.data.changedID = indexValue;
		c.data.state = state;
		c.data.action = "update";
		c.server.update().then(function (r) {
			c.data.action = undefined;
		});
	};


};