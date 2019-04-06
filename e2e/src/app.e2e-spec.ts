import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toContain('Welcome!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

  describe('should log in/out a test user', () => {

    it('should log in as test user', () => {
      browser.get(browser.baseUrl + '/auth/login');
      element(by.id('login_username')).sendKeys('ml82');
      element(by.id('last_field')).sendKeys('Mark123');
      element(by.id('login_submit')).click().then(() => {

        expect(page.getTitleText()).toContain('Your');
        expect(page.getTitleText()).toContain('Profile');
        expect(page.getTitleText()).toContain('Log');
        expect(page.getTitleText()).toContain('Out');

      });
    });

    it('log out as test user', () => {
      // browser.get(browser.baseUrl + '/main');
      element(by.id('header_logout')).click().then(() => {
        expect(page.getTitleText()).toContain('Welcome');
        expect(page.getTitleText()).toContain('back');
        expect(page.getTitleText()).toContain('Log');
        expect(page.getTitleText()).toContain('In');
      });
    });
  });

  describe('should complete a series of actions', () => {
    it('should register as new user', () => {
      browser.get(browser.baseUrl + '/auth/register');
      element(by.id('register_username')).sendKeys('yg38test');
      element(by.id('register_email')).sendKeys('yg38@rice.edu');
      element(by.id('register_phone')).sendKeys('123-123-1230');
      element(by.id('register_birthday')).sendKeys('1993-03-30');
      element(by.id('register_zipcode')).sendKeys('77005');
      element(by.id('last_field')).sendKeys('qwe123');
      element(by.id('register_submit')).click();

      expect(page.getTitleText).toContain('Welcome!');
    });

    it('should login as new user', () => {
      element(by.id('login_username')).sendKeys('yg38test');
      element(by.id('last_field')).sendKeys('qwe123');
      element(by.id('login_submit')).click();

      expect(page.getTitleText()).toContain('Your');
      expect(page.getTitleText()).toContain('Profile');
      expect(page.getTitleText()).toContain('Log');
      expect(page.getTitleText()).toContain('Out');
    });

    it('create new article and validate article appears in feed', () => {
      // browser.get(browser.baseUrl + '/main');
      element(by.id('main_textarea')).click().then(() => {
        element(by.id('main_textarea')).sendKeys('TEST: this is a post');
        element(by.id('main_postit')).click().then(() => {

          let found = false;
          element.all(by.css('.post-grid')).each((elem, index) => {
            elem.getText().then(text => {
              if (text.indexOf('TEST: this is a post') >= 0) {
                found = true;
              }
            });
          });
          expect(found).toBeTruthy();
        });
      });
    });

    it('update headline and verify change', () => {
      element(by.id('main_textarea')).click().then(() => {
        element(by.id('main_textarea')).sendKeys('TEST: this is a status');
        element(by.id('main_status')).click().then(() => {
          element(by.id('status')).getText().then(text => {
            expect(text).toContain('TEST: this is a status');
          });
        });
      });

      // check is this change is persistent
      browser.refresh(10);
      browser.get(browser.baseUrl + '/main');
      element(by.id('status')).getText().then(text => {
        expect(text).toContain('TEST: this is a status');
      });
    });

    it('search for a keyword that matches only one of test user\'s articles and verify ' +
      'only one article shows, and verify the author', () => {
      const searchKey = 'Trifling';

      element(by.id('main_search')).sendKeys(searchKey).then(() => {

        let count = 0;
        element.all(by.css('.post-grid')).each((elem, index) => {
          elem.getText().then(text => {
            expect(text).toContain('Trifling');
            if (text.indexOf('TEST: this is a post') >= 0) {
              count++;
            }
          });
        });

        expect(count).toEqual(1);
      });
    });

    it('log out new user', () => {
      element(by.id('header_logout')).click().then(() => {
        expect(page.getTitleText()).toContain('Welcome');
        expect(page.getTitleText()).toContain('back');
        expect(page.getTitleText()).toContain('Log');
        expect(page.getTitleText()).toContain('In');
      });
    });
  });

  it('valid JUnitXML test results for frontend', () => {
  });
});
