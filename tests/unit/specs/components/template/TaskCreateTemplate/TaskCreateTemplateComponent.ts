import { createLocalVue, mount } from '@vue/test-utils';
import TaskCreateTemplate from '@/components/Templates/TaskCreateTemplate.vue';
import BaseComponent from '../../BaseComponent';
import VueRouter from 'vue-router';

const localVue = createLocalVue();

export default class TaskCreateTemplateComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(TaskCreateTemplate, {
      localVue,
      router: new VueRouter(),
      vuetify: this.vuetify,
    });
  }
}
