import { createLocalVue, mount } from '@vue/test-utils';
import TaskCardListOrganism from '@/components/organisms/TaskCardListOrganism.vue';
import BaseComponent from '../../../BaseComponent';
import { propsWithTasks } from './TaskCardListOrganismData';

const localVue = createLocalVue();

export default class TaskCardListOrganismComponent extends BaseComponent {
  public mount(props = propsWithTasks): void {
    this.component = mount(TaskCardListOrganism, {
      localVue,
      vuetify: this.vuetify,
      propsData: {
        props,
      },
    });
  }
}
