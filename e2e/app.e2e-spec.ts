import { LoginAuthPage } from './app.po';

describe('login-auth App', function() {
  let page: LoginAuthPage;

  beforeEach(() => {
    page = new LoginAuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
