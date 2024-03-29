import { createLocalVue, mount } from '@vue/test-utils';
import TaskCreateTemplate from '@/components/templates/TaskCreateTemplate.vue';
import BaseComponent from '../../../BaseComponent';

const localVue = createLocalVue();

export default class TaskCreateTemplateComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(TaskCreateTemplate, {
      localVue,
      vuetify: this.vuetify,
    });
  }
}
