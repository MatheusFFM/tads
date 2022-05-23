import AppComponent from './AppComponent';

describe('App.vue', () => {
  let app: AppComponent;

  beforeEach(async () => {
    app = new AppComponent();
    jest.spyOn(console, 'error').mockImplementation(() => {
      return;
    });
  });

  it('[App] Renders a vue instance', async () => {
    app.mount();
    expect(app.component.vm).toBeTruthy();
  });
});
