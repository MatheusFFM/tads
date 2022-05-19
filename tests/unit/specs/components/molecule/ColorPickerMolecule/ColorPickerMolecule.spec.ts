import ColorPickerMoleculeComponent from './ColorPickerMoleculeComponent';
import { selectors } from './ColorPickerMoleculeData.spec';

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
    colorPicker.mount();
    expect(colorPicker.component.vm.$data.color).toBe('#000000');
  });

  it('[ColorPickerMolecule] Renders with invisible color picker', async () => {
    colorPicker.mount();
    const picker = colorPicker.component.find(selectors.colorPicker);
    expect(picker.vm).toBeFalsy();
  });

  it('[ColorPickerMolecule] Shows color picker after a menu click', async () => {
    colorPicker.mount();
    colorPicker.component.vm.$data.menu = true;
    await colorPicker.component.vm.$nextTick();

    const picker = colorPicker.component.find(selectors.colorPicker);
    expect(picker.vm).toBeTruthy();
  });

  it('[ColorPickerMolecule] Emits "input" after a color update', async () => {
    colorPicker.mount();
    const color = '#333333';
    colorPicker.component.vm.$data.menu = true;
    await colorPicker.component.vm.$nextTick();

    const picker = colorPicker.component.find(selectors.colorPicker);
    picker.vm.$emit('input', color);
    await colorPicker.component.vm.$nextTick();

    expect(colorPicker.component.vm.$data.color).toBe(color);
    expect(colorPicker.component.emitted('input')).toBeTruthy();
  });

  it('[ColorPickerMolecule] Changes color to black after a color transformed into a object', async () => {
    colorPicker.mount();
    colorPicker.component.vm.$data.menu = true;
    await colorPicker.component.vm.$nextTick();

    const picker = colorPicker.component.find(selectors.colorPicker);
    picker.vm.$emit('input', {});
    await colorPicker.component.vm.$nextTick();

    expect(colorPicker.component.vm.$data.color).toBe('#000000');
  });
});
