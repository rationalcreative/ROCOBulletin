const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
	};

	describe('ROCOBulletin_Localize-' + OLSKRoutingLanguage, function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage,
			});
		});

		it('localizes ROCOBulletin2', function() {
			browser.assert.text(ROCOBulletin2, uLocalized('ROCOBulletinSubmitButtonText'));
		});

		it('localizes ROCOBulletinScriptSubmitButton', function() {
			browser.assert.attribute(ROCOBulletinScriptSubmitButton, 'value', uLocalized('ROCOBulletinSubmitButtonText'));
		});

		it('localizes ROCOBulletinScriptFeedback', function() {
			browser.assert.text(ROCOBulletinScriptFeedback, uLocalized('ROCOBulletinFeedbackText'));
		});

		it('localizes ROCOBulletinNoscriptSubmitButton', function() {
			browser.assert.attribute(ROCOBulletinNoscriptSubmitButton, 'value', uLocalized('ROCOBulletinSubmitButtonText'));
		});

	});

});
