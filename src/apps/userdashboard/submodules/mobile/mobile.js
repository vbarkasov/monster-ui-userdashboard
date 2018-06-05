define(function(require){
	var $ = require('jquery'),
		toastr = require('toastr'),
		monster = require('monster');

	var app = {
		requests: {},

		subscribe: {
			'userdashboard.initModules': 'mobileInitModuleLayout'
		},

		mobileInitModuleLayout: function(args) {
			var self = this,
				appLayout = args.layout,
				i18nMobile = self.i18n.active().userdashboard.mobile;

			appLayout.menus.push({
				tabs: [
					{
						text: i18nMobile.menuTitle,
						callback: self.mobileRender
					}
				]
			});
		},
		mobileRender: function(args){
			var self = this,
				parent = args.parent,
				container = args.container,
				template = $(monster.template(self, 'mobile', {}));

			container
				.empty()
				.append(template)
				.show();
		}
	};

	return app;
});
