import SeletorService from '../../../SelectorService';

export const selectors = {
  colorPicker: SeletorService.getSelector('color-picker'),
  input: SeletorService.getSelector('input'),
  menu: SeletorService.getSelector('menu'),
};
