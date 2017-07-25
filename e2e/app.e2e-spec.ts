import { HumblrPage } from './app.po';

describe('humblr App', () => {
  let page: HumblrPage;

  beforeEach(() => {
    page = new HumblrPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
