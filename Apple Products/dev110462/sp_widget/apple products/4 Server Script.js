(function () {


  data.Template = options.template || 'link-buy.html';
  data.TemplateTwo = options.templatetwo;
  data.productInfo = {};
  getProductInfo();

  function getProductInfo() {
    var record = new GlideRecord('u_apple_website');
    record.addQuery('u_number', options.u_number);
    record.query();
    if (record.next()) {
      data.productInfo.number = options.u_number.toString();
      data.productInfo.sys_id = record.sys_id.toString();
      data.productInfo.title = record.u_title.toString();
      data.productInfo.icon = record.u_icon.getDisplayValue();
      data.productInfo.subtitle = record.u_subtitle.toString();
      data.productInfo.subtitle_icon = record.u_subtitle_icon.getDisplayValue();
      data.productInfo.subtitle_two = record.u_subtitle_two.toString();
      data.productInfo.background_image = record.u_background_image.getDisplayValue();
      data.productInfo.under_image = record.u_under_image.getDisplayValue();
      data.productInfo.video = record.u_video.getDisplayValue();
      data.productInfo.info_link = record.u_link_one.toString();
      data.productInfo.price_link = record.u_link_two.toString();
      data.productInfo.mars_link = record.u_mars_two.toString();
      data.productInfo.link_icon = record.u_link_icon.getDisplayValue();

    }
  }
  //test


})();