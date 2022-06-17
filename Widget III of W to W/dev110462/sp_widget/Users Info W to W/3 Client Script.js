api.controller = function ($rootScope) {
  /* widget controller */
  var c = this;
  c.data.user = '';
  $rootScope.$on("userSelected", function (event, data) {
    c.data.user = data;
    c.data.action = 'showUserInfo';
    c.server.update().then(function () {
      c.data.action = undefined;
      c.data.user = "";
    })
  })
};