(function () {
	/* populate the 'data' object */
	/* e.g., data.table = $sp.getValue('table'); */
	data.array = [];
	gatherMenuItems();

	function gatherMenuItems() {
		var gr = new GlideRecord('u_side_nav_bar_menu_items');
		gr.addEncodedQuery('u_visible=true');
		gr.query();
		while (gr.next()) {
			var obj = {
				sys_id: gr.sys_id.toString(),
				name: gr.u_name.toString(),
				icon: gr.u_icon.getDisplayValue(),
				link: gr.u_link.toString(),
				page: gr.u_page.getDisplayValue(),
				externalURL: gr.u_external_url.toString(),
				servicePortal: gr.u_service_portal.getDisplayValue(),
				serPortURL: gr.u_service_portal.url_suffix.getDisplayValue()



			};
			data.array.push(obj);
		}

	}

})();