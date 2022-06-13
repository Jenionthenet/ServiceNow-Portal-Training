api.controller = function ($scope, spUtil) {
  /* widget controller */
  var c = this;


  $scope.PageOne = true;
  $scope.NextOne = true;



  $scope.ShowTwo = function () {
    $scope.PageOne = false;
    $scope.NextOne = false;
    $scope.PrevOne = true;
    $scope.PageTwo = true;
    $scope.NextTwo = true;
  }

  $scope.BackToPageOne = function () {
    $scope.PageOne = true;
    $scope.NextOne = true;
    $scope.PrevOne = false;
    $scope.PageTwo = false;
    $scope.NextTwo = false;
  }

  $scope.ShowThree = function () {
    $scope.PrevOne = false;
    $scope.PageTwo = false;
    $scope.NextTwo = false;
    $scope.PageThree = true;
    $scope.PrevTwo = true;
    $scope.SubmitBtn = true;
  }

  $scope.BackToPageTwo = function () {
    $scope.PrevOne = true;
    $scope.PageTwo = true;
    $scope.NextTwo = true;
    $scope.PageThree = false;
    $scope.PrevTwo = false;
    $scope.SubmitBtn = false;
  }


  c.data.newIncident.caller = '';
  c.data.newIncident.config_item = '';

  // $scope.caller = {
  //   displayValue: c.data.name,
  //   value: '',
  //   name: 'caller'
  // };

  // $scope.cmdb_ci = {
  //   displayValue: c.data.name,
  //   value: '',
  //   name: 'configurationItem'
  // };



  $scope.$on("field.change", function (evt, params) {
    c.data.newIncident.caller = $scope.caller.value;
    c.data.newIncident.config_item = $scope.cmdb_ci.value;

  });


  $scope.submit = function () {

    console.log($scope.caller);

    c.data.action = 'createIncident';

    c.server.update().then(function () {
      c.data.action = undefined;
      c.data.newIncident.caller = '';
      c.data.newIncident.category = '';
      c.data.newIncident.subcategory = '';
      c.data.newIncident.short_description = '';
      c.data.newIncident.description = '';
      c.data.newIncident.config_item = '';
      c.data.newIncident.urgency = '';

      $scope.PageOne = true;
      $scope.NextOne = true;
      $scope.PageThree = false;
      $scope.PrevTwo = false;
      $scope.SubmitBtn = false;

      $scope.caller.value = '';
      $scope.cmdb_ci.value = '';
    })

  }

}

;