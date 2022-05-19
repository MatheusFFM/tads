import ColorPickerMoleculeComponent from './ColorPickerMoleculeComponent';

describe('ColorPickerMolecule.vue', () => {
  let colorPicker: ColorPickerMoleculeComponent;

  beforeEach(async () => {
    colorPicker = new ColorPickerMoleculeComponent();
  });

  it('[ColorPickerMolecule] Renders a vue instance', async () => {
    colorPicker.mount();
    expect(colorPicker.component.vm).toBeTruthy();
  });

  it('[ColorPickerMolecule] Renders with start color equals to black', async () => {
    expect(false).toBeTruthy();
  });

  it('[ColorPickerMolecule] Renders with invisible color select', async () => {
    expect(false).toBeTruthy();
  });

  it('[ColorPickerMolecule] Shows color select after a input click', async () => {
    expect(false).toBeTruthy();
  });

  it('[ColorPickerMolecule] Emits "input" after a color update', async () => {
    expect(false).toBeTruthy();
  });

  it('[ColorPickerMolecule] Changes color to black after a color transformed into a object', async () => {
    expect(false).toBeTruthy();
  });
});
