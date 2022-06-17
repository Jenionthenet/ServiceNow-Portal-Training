(function () {

  data.array = [];
  gatherUsers();

  function gatherUsers() {
    var record = new GlideRecord('sys_user');

    record.query();
    while (record.next()) {
      var obj = {
        sys_id: record.sys_id.toString(),
        name: record.name.toString(),
        userId: record.user_name.toString()
      };
      data.array.push(obj);

    }
  }

})();