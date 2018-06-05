define(function(require){
	var $ = require('jquery'),
		toastr = require('toastr'),
		monster = require('monster');

	var app = {
		requests: {},

		subscribe: {
			'userdashboard.initModules': 'voicemailInitModuleLayout'
		},

		voicemailInitModuleLayout: function(args) {
			var self = this,
				appLayout = args.layout;

			appLayout.menus.push({
				tabs: [
					{
						text: 'Voicemail',
						callback: self.voicemailRender
					}
				]
			});
		},
		voicemailRender: function(args){
			var self = this,
				$container = args.container,
				template = $(monster.template(self, 'voicemail', {}));

			$container
				.empty()
				.append(template)
				.show();
		}
	};

	return app;
});
