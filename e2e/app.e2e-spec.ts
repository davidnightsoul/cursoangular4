import { AngularGastestPage } from './app.po';

describe('angular-gastest App', () => {
  let page: AngularGastestPage;

  beforeEach(() => {
    page = new AngularGastestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
