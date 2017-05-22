import { NG4TypeAssertionPage } from './app.po';

describe('ng4-type-assertion App', () => {
  let page: NG4TypeAssertionPage;

  beforeEach(() => {
    page = new NG4TypeAssertionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
