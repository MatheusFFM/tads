import { createLocalVue, mount } from '@vue/test-utils';
import TaskCreatorOrganism from '@/components/organisms/TaskCreatorOrganism.vue';
import BaseComponent from '../../../BaseComponent';

const localVue = createLocalVue();

export default class TaskCreatorOrganismComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(TaskCreatorOrganism, {
      localVue,
      vuetify: this.vuetify,
    });
  }
}
