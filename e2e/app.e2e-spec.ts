import { FootballWikiPage } from './app.po';

describe('football-wiki App', () => {
  let page: FootballWikiPage;

  beforeEach(() => {
    page = new FootballWikiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
