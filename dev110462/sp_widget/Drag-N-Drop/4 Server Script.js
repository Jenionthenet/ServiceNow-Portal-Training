(function() {
    
	data.state_array = [];
	//gatherRecords();

if(!input) {
	gatherStateChoices();
}
	
if(input && input.action == "updateState") {
	updateRecord();
}

	function gatherRecords(state) {
		var array = [];
		var gr = new GlideRecord(options.table);
gr.addQuery("active", true);
	gr.addQuery("state", state);
gr.query();
while (gr.next()) {
var obj ={
id: gr.sys_id.toString(),
number: gr.number.getDisplayValue(),
state_value: gr.state.toString(), 
state: gr.state.getDisplayValue()
};
array.push(obj);
}
	return array;

	}

	function gatherStateChoices() {
		var gr = new GlideRecord('sys_choice');
		gr.addEncodedQuery('name=' + options.table + '^element=state');
		gr.query();
		while(gr.next()) {
			var obj = {
				id: gr.sys_id.toString(),
				label: gr.label.toString(),
				value: gr.value.toString(),
				records: gatherRecords(gr.value.toString())
				
			};
			data.state_array.push(obj);
			
		}
	}

	function updateRecord() {
		var gr = new GlideRecord(options.table);
		gr.addQuery("sys_id", input.sys_id);
		gr.query();
		while(gr.next()) {
			gr.state = input.new_state;
			gr.update();
			gatherStateChoices();
		}
	}


})();