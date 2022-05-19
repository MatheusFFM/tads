import { createLocalVue, mount } from '@vue/test-utils';
import TaskCreatorOrganism from '@/components/Organisms/TaskCreatorOrganism.vue';
import BaseComponent from '../../BaseComponent';
import router from '@/router';

const localVue = createLocalVue();

export default class TaskCreatorOrganismComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(TaskCreatorOrganism, {
      localVue,
      router,
      vuetify: this.vuetify,
    });
  }
}
