import { createLocalVue, mount } from '@vue/test-utils';
import DatePickerMolecule from '@/components/molecules/DatePickerMolecule.vue';
import BaseComponent from '../../BaseComponent';
import router from '@/router';

const localVue = createLocalVue();

export default class DatePickerMoleculeComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(DatePickerMolecule, {
      localVue,
      router,
      vuetify: this.vuetify,
    });
  }
}
