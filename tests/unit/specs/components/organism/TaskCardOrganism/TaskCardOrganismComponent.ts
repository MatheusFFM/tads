import { createLocalVue, mount } from '@vue/test-utils';
import TaskCardOrganism from '@/components/organisms/TaskCardOrganism.vue';
import BaseComponent from '../../../BaseComponent';
import { propsWithTask } from './TaskCardOrganismData';

const localVue = createLocalVue();

export default class TaskCardOrganismComponent extends BaseComponent {
  public mount(props = propsWithTask): void {
    this.component = mount(TaskCardOrganism, {
      localVue,
      vuetify: this.vuetify,
      propsData: {
        props,
      },
    });
  }
}
