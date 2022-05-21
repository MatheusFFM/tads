import { createLocalVue, mount } from '@vue/test-utils';
import TaskCreatorFormOrganism from '@/components/organisms/TaskCreatorFormOrganism.vue';
import BaseComponent from '../../../BaseComponent';

const localVue = createLocalVue();

export default class TaskCreatorFormOrganismComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(TaskCreatorFormOrganism, {
      localVue,
      vuetify: this.vuetify,
    });
  }
}
