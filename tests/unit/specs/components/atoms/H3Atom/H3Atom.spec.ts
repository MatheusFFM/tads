import H3AtomComponent from './H3AtomComponent';

describe('H3Atom.vue', () => {
  let h3: H3AtomComponent;

  beforeEach(async () => {
    h3 = new H3AtomComponent();
  });

  it('[H3Atom] Renders a vue instance', async () => {
    h3.mount();
    expect(h3.component.vm).toBeTruthy();
  });

  it('[H3Atom] Shows text content correctly', async () => {
    const text = 'Test';
    h3.mount(text);
    expect(h3.component.text()).toBe(text);
  });
});
