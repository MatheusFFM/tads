import DatePickerMoleculeComponent from './DatePickerMoleculeComponent';
import { selectors } from './DatePickerMoleculeData';

describe('DatePickerMolecule.vue', () => {
  let datePicker: DatePickerMoleculeComponent;

  beforeEach(async () => {
    datePicker = new DatePickerMoleculeComponent();
  });

  it('[DatePickerMolecule] Renders a vue instance', async () => {
    datePicker.mount();
    expect(datePicker.component.vm).toBeTruthy();
  });

  it('[DatePickerMolecule] Renders with start date equals to today', async () => {
    datePicker.mount();
    expect(datePicker.component.vm.$data.date).toBe(
      new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substring(0, 10),
    );
  });

  it('[DatePickerMolecule] Renders with invisible calendar', async () => {
    datePicker.mount();
    const picker = datePicker.component.find(selectors.datePicker);
    expect(picker.vm).toBeFalsy();
  });

  it('[DatePickerMolecule] Shows calendar picker after a menu open', async () => {
    datePicker.mount();
    datePicker.component.vm.$data.menu = true;
    await datePicker.component.vm.$nextTick();

    const picker = datePicker.component.find(selectors.datePicker);
    expect(picker.vm).toBeTruthy();
  });

  it('[DatePickerMolecule] Emits "input" after a date update', async () => {
    datePicker.mount();
    const date = '2022-01-01';
    datePicker.component.vm.$data.menu = true;
    await datePicker.component.vm.$nextTick();

    const picker = datePicker.component.find(selectors.datePicker);
    picker.vm.$emit('input', date);
    await datePicker.component.vm.$nextTick();

    expect(datePicker.component.vm.$data.date).toBe(date);
    expect(datePicker.component.emitted('input')).toBeTruthy();
  });
});
