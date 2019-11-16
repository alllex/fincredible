










AUI.add(
	'portal-available-languages',
	function(A) {
		var available = {};

		var direction = {};

		

			available['en_US'] = 'English (United States)';
			direction['en_US'] = 'ltr';

		

			available['en_GB'] = 'English (United Kingdom)';
			direction['en_GB'] = 'ltr';

		

			available['fi_FI'] = 'Finnish (Finland)';
			direction['fi_FI'] = 'ltr';

		

			available['ru_RU'] = 'Russian (Russia)';
			direction['ru_RU'] = 'ltr';

		

			available['sv_SE'] = 'Swedish (Sweden)';
			direction['sv_SE'] = 'ltr';

		

			available['se_FI'] = 'Northern Sami (Finland)';
			direction['se_FI'] = 'ltr';

		

			available['zh_CN'] = 'Chinese (China)';
			direction['zh_CN'] = 'ltr';

		

			available['zh_TW'] = 'Chinese (Taiwan)';
			direction['zh_TW'] = 'ltr';

		

		Liferay.Language.available = available;
		Liferay.Language.direction = direction;
	},
	'',
	{
		requires: ['liferay-language']
	}
);