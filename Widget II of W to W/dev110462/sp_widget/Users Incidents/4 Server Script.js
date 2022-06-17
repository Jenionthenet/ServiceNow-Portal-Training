(function () {
  data.array = [];



  if (input && input.action == 'showUserIncidents') {
    gatherUsersIncidents();
  }

  function gatherUsersIncidents() {
    var record = new GlideRecord('incident');
    record.addQuery('caller_id', input.user)
    record.setLimit(10);
    record.orderByDesc('sys_updated_on');
    record.query();
    while (record.next()) {
      var obj = {
        caller: record.caller_id.getDisplayValue(),
        sys_id: record.sys_id.toString(),
        number: record.number.toString(),
        state: record.state.getDisplayValue(),
        short_description: record.short_description.toString(),
        urgency: record.urgency.getDisplayValue()
      };
      data.array.push(obj);
    }
  }

})();