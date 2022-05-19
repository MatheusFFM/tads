import DatePickerMoleculeComponent from './DatePickerMoleculeComponent';

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
    expect(false).toBeTruthy();
  });

  it('[DatePickerMolecule] Renders with invisible calendar', async () => {
    expect(false).toBeTruthy();
  });

  it('[DatePickerMolecule] Shows calendar after a input click', async () => {
    expect(false).toBeTruthy();
  });

  it('[DatePickerMolecule] Emits "input" after a date update', async () => {
    expect(false).toBeTruthy();
  });
});
