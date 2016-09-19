describe('go to home page', function() {
    it('should see helios button', function() {
        browser.ignoreSynchronization = true;
        browser.driver.get('http://xc02.ptx.fr.sopra:9031/ptools/app/connexion?siu_siu_account_id=1136913539581536');
        var btnHelios = element(by.css('#heliosBtn')).element(by.css('button'));
        // You wrote your first test, cross it off the list
        expect(btnHelios).toBeDefined();
        btnHelios.click().then(function () {
            browser.driver.sleep(1);
            browser.waitForAngular();
            browser.ignoreSynchronization = false;
            element(by.css('#ndClient')).sendKeys('1111111111');
            element(by.css('[name="41"]')).click().then(function () {
                element(by.buttonText('Enregistrer')).click().then(function () {
                    browser.driver.sleep(20).then(function () {
                        element(by.linkText('PM')).click();
                        browser.driver.sleep(10).then(function () {
                            expect(element(by.css('h3'))).toBeDefined();
                            //element(by.css('h3')).getText().then(function(value){expect(value).toBe('Décision');});
                        });
                    });

                    browser.pause();
                });
            });
        });
    });
});
