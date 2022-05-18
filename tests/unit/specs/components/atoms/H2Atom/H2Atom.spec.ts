import H2AtomComponent from './H2AtomComponent';

describe('H2Atom.vue', () => {
  let h2: H2AtomComponent;

  beforeEach(async () => {
    h2 = new H2AtomComponent();
  });

  it('[H2Atom] Renders a vue instance', async () => {
    h2.mount();
    expect(h2.component.vm).toBeTruthy();
  });

  it('[H2Atom] Shows text content correctly', async () => {
    const text = 'Test';
    h2.mount(text);
    expect(h2.component.text()).toBe(text);
  });
});
