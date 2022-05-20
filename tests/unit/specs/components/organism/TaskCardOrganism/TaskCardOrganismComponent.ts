import { createLocalVue, mount } from '@vue/test-utils';
import TaskCardOrganism from '@/components/organisms/TaskCardOrganism.vue';
import BaseComponent from '../../../BaseComponent';

const localVue = createLocalVue();

export default class TaskCardOrganismComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(TaskCardOrganism, {
      localVue,
      vuetify: this.vuetify,
    });
  }
}
