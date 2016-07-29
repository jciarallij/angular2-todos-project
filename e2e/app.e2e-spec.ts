import { Angular2TodosPage } from './app.po';

describe('angular2-todos App', function() {
  let page: Angular2TodosPage;

  beforeEach(() => {
    page = new Angular2TodosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
