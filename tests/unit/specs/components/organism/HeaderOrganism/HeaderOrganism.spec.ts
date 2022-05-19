import HeaderOrganismComponent from './HeaderOrganismComponent';

describe('HeaderOrganism.vue', () => {
  let header: HeaderOrganismComponent;

  beforeEach(async () => {
    header = new HeaderOrganismComponent();
  });

  it('[HeaderOrganism] Renders a vue instance', async () => {
    header.mount();
    expect(header.component.vm).toBeTruthy();
  });
});
