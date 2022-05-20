import { createLocalVue, mount } from '@vue/test-utils';
import TaskCardListOrganism from '@/components/organisms/TaskCardListOrganism.vue';
import BaseComponent from '../../BaseComponent';

const localVue = createLocalVue();

export default class TaskCardListOrganismComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(TaskCardListOrganism, {
      localVue,
      vuetify: this.vuetify,
    });
  }
}
