api.controller = function ($scope, $rootScope) {
  /* widget controller */
  var c = this;

  c.data.user = "";

  $scope.name = {
    displayValue: c.data.name,
    value: c.data.sys_id,
    name: 'name'
  }

  $scope.$on("field.change", function (evt, params) {
    c.data.user = $scope.name.value;



  })

  $scope.Submit = function () {

    $rootScope.$broadcast('userSelected', c.data.user);
    console.log(c.data.user);


  }





};