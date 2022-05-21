import HelperDate from '@/models/class/HelperDate';
import Task from '@/models/class/Task';
import { Colors } from '@/models/constants/Colors';
import TaskCardOrganismComponent from './TaskCardOrganismComponent';
import {
  propsTaskWithoutColor,
  propsTaskWithoutDescription,
  propsWithDoneTask,
  propsWithTask,
  selectors,
} from './TaskCardOrganismData';

describe('TaskCardOrganism.vue', () => {
  let taskCard: TaskCardOrganismComponent;

  beforeEach(async () => {
    taskCard = new TaskCardOrganismComponent();
  });

  it('[TaskCardOrganism] Renders a vue instance', async () => {
    taskCard.mount();
    expect(taskCard.component.vm).toBeTruthy();
  });

  it('[TaskCardOrganism] Should add done class to title if the task is done', async () => {
    taskCard.mount(propsWithDoneTask);

    const title = taskCard.component.find(selectors.title);

    expect(title.exists()).toBeTruthy();
    expect(title.classes()).toContain('task-done');
  });

  it('[TaskCardOrganism] Should generate card with done color', async () => {
    taskCard.mount(propsWithDoneTask);

    expect(taskCard.component.vm.$data.color).toBe(Colors.Done);
  });

  it('[TaskCardOrganism] Should generate card with active color', async () => {
    taskCard.mount();

    expect(taskCard.component.vm.$data.color).toBe(Colors.Active);
  });

  it('[TaskCardOrganism] Should get task color for tag', async () => {
    taskCard.mount();
    expect((taskCard.component.vm as any).taskColor).toBe(
      propsWithTask.task.color,
    );
  });

  it('[TaskCardOrganism] Should get black color for tag without a task color', async () => {
    taskCard.mount(propsTaskWithoutColor);
    expect((taskCard.component.vm as any).taskColor).toBe(Colors.Black);
  });

  it('[TaskCardOrganism] Should emit "change" after selecting the checkbox', async () => {
    taskCard.mount();

    const checkbox = taskCard.component.find(selectors.checkbox);
    expect(checkbox.exists()).toBeTruthy();

    checkbox.vm.$emit('change');
    await taskCard.component.vm.$nextTick();

    expect(taskCard.component.emitted('change')).toBeTruthy();
  });

  it('[TaskCardOrganism] Should make the active task done after selecting the checkbox', async () => {
    taskCard.mount();

    const checkbox = taskCard.component.find(selectors.checkbox);
    expect(checkbox.exists()).toBeTruthy();

    checkbox.vm.$emit('change', true);

    const task = taskCard.component.props().props.task as Task;

    expect(task.done).toBeTruthy();
  });

  it('[TaskCardOrganism] Should make the done task active after selecting the checkbox', async () => {
    taskCard.mount(propsWithDoneTask);

    const checkbox = taskCard.component.find(selectors.checkbox);
    expect(checkbox.exists()).toBeTruthy();

    checkbox.vm.$emit('change');

    const task = taskCard.component.vm.$props.props.task;

    expect(task.done).toBeFalsy();
  });

  it('[TaskCardOrganism] Should get task date formated', async () => {
    const helper = new HelperDate();
    taskCard.mount();

    const date = taskCard.component.find(selectors.date);

    expect(date.exists()).toBeTruthy();
    expect(date.text()).toBe(helper.getDateFormat(propsWithTask.task.date));
  });

  it('[TaskCardOrganism] Should render task description after clicking on expand', async () => {
    taskCard.mount();

    const expand = taskCard.component.find(selectors.expand);
    expect(expand.exists()).toBeTruthy();
    const description = taskCard.component.find(selectors.description);
    expect(description.exists()).toBeTruthy();

    expect(description.text()).toBe(propsWithTask.task.description);
  });

  it('[TaskCardOrganism] Should show expansive panel when the task has a description', async () => {
    taskCard.mount();

    const expand = taskCard.component.find(selectors.expand);

    expect(expand.exists()).toBeTruthy();
  });

  it('[TaskCardOrganism] Should not show expansive panel when the task has no description', async () => {
    taskCard.mount(propsTaskWithoutDescription);

    const expand = taskCard.component.find(selectors.expand);
    expect(expand.exists()).toBeFalsy();
  });
});
