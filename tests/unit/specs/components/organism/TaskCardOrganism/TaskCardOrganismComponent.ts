import { createLocalVue, mount } from '@vue/test-utils';
import TaskCardOrganism from '@/components/Organisms/TaskCardOrganism.vue';
import BaseComponent from '../../BaseComponent';
import router from '@/router';

const localVue = createLocalVue();

export default class TaskCardOrganismComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(TaskCardOrganism, {
      localVue,
      router,
      vuetify: this.vuetify,
    });
  }
}
