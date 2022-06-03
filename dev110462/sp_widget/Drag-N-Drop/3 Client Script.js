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


	//call server update to change item's state
	updateState = function (item, state) {
		if (item.state_value == state.value) {
			return;
		}
		c.data.action = "updateState";
		c.data.sys_id = item.id;
		c.data.new_state = state.value;
		c.server.update().then(function () {
			c.data.action = undefined;
		})
	}

	$scope.onDrop = function (state, items, index) {
		angular.forEach(items, function (item) {
			item.selected = false;
		});
		state.records = state.records.slice(0, index)
			.concat(items)
			.concat(state.records.slice(index));

		//calling function to update server-side
		updateState(items, state);
		return true;
	}

	//testing
};