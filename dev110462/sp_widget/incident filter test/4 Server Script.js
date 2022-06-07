(function () {


	data.array = [];
	getIncidents();

	function getIncidents() {
		var gr = new GlideRecord('incident');
		gr.setLimit(20);
		gr.orderByDesc("sys_updated_on")
		gr.addQuery("active", true);
		gr.query();
		while (gr.next()) {
			var obj = {
				id: gr.sys_id.toString(),
				number: gr.number.toString(),
				state: gr.state.getDisplayValue(),
				short_description: gr.short_description.toString()
			};
			data.array.push(obj);
		}
	}

})();