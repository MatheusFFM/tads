import CreatePageComponent from './CreatePageComponent';

describe('CreatePage.vue', () => {
  let create: CreatePageComponent;

  beforeEach(async () => {
    create = new CreatePageComponent();
  });

  it('[CreatePage] Renders a vue instance', async () => {
    create.mount();
    expect(create.component.vm).toBeTruthy();
  });
});
