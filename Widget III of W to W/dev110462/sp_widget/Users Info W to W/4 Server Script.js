(function () {


  data.userInfo = {};


  if (input && input.action == "showUserInfo") {
    getUserInfo();
  }

  function getUserInfo() {
    var record = new GlideRecord('sys_user');
    record.addQuery('sys_id', input.user);
    record.query();
    if (record.next()) {

      data.userInfo.name = record.name.toString();
      data.userInfo.company = record.company.getDisplayValue();
      data.userInfo.email = record.email.toString();
      data.userInfo.location = record.location.getDisplayValue();
      data.userInfo.manager = record.manager.getDisplayValue();


    }
  }

})();