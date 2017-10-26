import { AngularDemoPart2Page } from './app.po';

describe('angular-demo-part2 App', () => {
  let page: AngularDemoPart2Page;

  beforeEach(() => {
    page = new AngularDemoPart2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
