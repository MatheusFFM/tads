import TabsMoleculeComponent from './TabsMoleculeComponent';
import { selectors } from './TabsMoleculeData';

describe('TabsMolecule.vue', () => {
  let tabs: TabsMoleculeComponent;

  beforeEach(async () => {
    tabs = new TabsMoleculeComponent();
  });

  it('[TabsMolecule] Renders a vue instance', async () => {
    tabs.mount();
    expect(tabs.component.vm).toBeTruthy();
  });

  it('[TabsMolecule] Renders 3 tabs', async () => {
    tabs.mount();
    const allTabs = tabs.component.findAll(selectors.tab);
    expect(allTabs.length).toBe(3);
  });
});
