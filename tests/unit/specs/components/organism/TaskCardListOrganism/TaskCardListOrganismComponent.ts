import { createLocalVue, mount } from '@vue/test-utils';
import TaskCardListOrganism from '@/components/Organisms/TaskCardListOrganism.vue';
import BaseComponent from '../../BaseComponent';
import router from '@/router';

const localVue = createLocalVue();

export default class TaskCardListOrganismComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(TaskCardListOrganism, {
      localVue,
      router,
      vuetify: this.vuetify,
    });
  }
}
