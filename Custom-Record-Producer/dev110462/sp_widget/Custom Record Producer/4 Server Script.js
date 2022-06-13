(function () {
  data.user = gs.getUserID();
  data.array = [];
  data.category_array = [];
  data.subcategory_array = [];
  data.user_array = [];
  data.ci_array = [];
  data.newIncident = {
    caller: '',
    category: '',
    subcategory: '',
    short_description: '',
    description: '',
    config_item: '',
    urgency: ''
  };
  gatherCategoryChoices();
  gatherSubcategoryChoices();

  console.log(data.category_array)
  //getUsers();
  //getCIs();


  if (input && input.action === 'createIncident') {
    instertIncident(input.newIncident);
  }



  function instertIncident(inc) {
    var gr = new GlideRecord('incident');
    gr.newRecord()
    gr.setValue('caller_id', inc.caller);
    gr.setValue('category', inc.category.value);
    gr.setValue('subcategory', inc.subcategory.value);
    gr.setValue('short_description', inc.short_description);
    gr.setValue('description', inc.description);
    gr.setValue('cmdb_ci', inc.config_item);
    gr.setValue('urgency', inc.urgency);
    gr.insert();


  }



  function gatherCategoryChoices() {
    var gr = new GlideRecord('sys_choice');
    gr.addEncodedQuery('element=category^name=incident');
    gr.query();
    while (gr.next()) {
      var obj = {
        id: gr.sys_id.toString(),
        label: gr.label.toString(),
        value: gr.value.toString()
      };
      data.category_array.push(obj);
    }

  }


  function gatherSubcategoryChoices() {
    var gr = new GlideRecord('sys_choice');
    gr.addEncodedQuery('element=subcategory^name=incident');
    gr.query();
    while (gr.next()) {
      var obj = {
        id: gr.sys_id.toString(),
        label: gr.label.toString(),
        value: gr.value.toString(),
        dependentValue: gr.dependent_value.toString()
      };
      data.subcategory_array.push(obj)
    }

  }



})();