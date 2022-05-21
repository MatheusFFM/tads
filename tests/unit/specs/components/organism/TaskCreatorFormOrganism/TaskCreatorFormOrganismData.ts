import SeletorService from '../../../SelectorService';

export const selectors = {
  titleInput: SeletorService.getSelector('title-input'),
  descriptionInput: SeletorService.getSelector('description-input'),
  datePicker: SeletorService.getSelector('date-picker'),
  colorPicker: SeletorService.getSelector('color-picker'),
  submit: SeletorService.getSelector('submit'),
  clear: SeletorService.getSelector('clear'),
};
