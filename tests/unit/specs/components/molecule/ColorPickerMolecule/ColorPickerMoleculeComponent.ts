import { createLocalVue, mount } from '@vue/test-utils';
import ColorPickerMolecule from '@/components/molecules/ColorPickerMolecule.vue';
import BaseComponent from '../../BaseComponent';

const localVue = createLocalVue();

export default class ColorPickerMoleculeComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(ColorPickerMolecule, {
      localVue,
      vuetify: this.vuetify,
    });
  }
}
