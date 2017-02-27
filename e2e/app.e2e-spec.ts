import { TableBashPage } from './app.po';

describe('table-bash App', function() {
  let page: TableBashPage;

  beforeEach(() => {
    page = new TableBashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
