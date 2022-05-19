import TabsMoleculeComponent from './TabsMoleculeComponent';

describe('TabsMolecule.vue', () => {
  let h3: TabsMoleculeComponent;

  beforeEach(async () => {
    h3 = new TabsMoleculeComponent();
  });

  it('[TabsMolecule] Renders a vue instance', async () => {
    h3.mount();
    expect(h3.component.vm).toBeTruthy();
  });

  it('[TabsMolecule] Renders 3 tabs', async () => {
    expect(false).toBeTruthy();
  });

  it('[TabsMolecule] Redirects to list page', async () => {
    expect(false).toBeTruthy();
  });

  it('[TabsMolecule] Redirects to create page', async () => {
    expect(false).toBeTruthy();
  });

  it('[TabsMolecule] Redirects to calendar page', async () => {
    expect(false).toBeTruthy();
  });
});
