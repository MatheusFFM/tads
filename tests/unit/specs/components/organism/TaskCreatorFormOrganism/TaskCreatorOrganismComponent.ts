import { createLocalVue, mount } from '@vue/test-utils';
import TaskCreatorOrganism from '@/components/organisms/TaskCreatorOrganism.vue';
import BaseComponent from '../../BaseComponent';
import VueRouter from 'vue-router';

const localVue = createLocalVue();

export default class TaskCreatorOrganismComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(TaskCreatorOrganism, {
      localVue,
      router: new VueRouter(),
      vuetify: this.vuetify,
    });
  }
}
