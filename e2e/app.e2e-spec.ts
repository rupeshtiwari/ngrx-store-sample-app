import { NgrxAppPage } from './app.po';

describe('ngrx-app App', () => {
  let page: NgrxAppPage;

  beforeEach(() => {
    page = new NgrxAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
