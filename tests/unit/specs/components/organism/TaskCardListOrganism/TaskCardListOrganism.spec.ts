import { propsWithoutTasks } from '../CalendarOrganism/CalendarOrganismData';
import TaskCardListOrganismComponent from './TaskCardListOrganismComponent';
import {
  propsWithTasks,
  propsWithTasksSameDay,
  selectors,
} from './TaskCardListOrganismData';

describe('TaskCardListOrganism.vue', () => {
  let taskCardList: TaskCardListOrganismComponent;

  beforeEach(async () => {
    taskCardList = new TaskCardListOrganismComponent();
  });

  it('[TaskCardListOrganism] Renders a vue instance', async () => {
    taskCardList.mount();
    expect(taskCardList.component.vm).toBeTruthy();
  });

  it('[TaskCardListOrganism] Generates cards equal to tasks count', async () => {
    taskCardList.mount();
    await taskCardList.component.vm.$nextTick();

    const tasksCount = propsWithTasks.tasks.length;
    expect(tasksCount).toBeGreaterThan(0);

    for (let i = 1; i <= tasksCount; i++) {
      const card = taskCardList.component.find(selectors.card(i));
      expect(card.exists()).toBeTruthy();
    }
  });

  it('[TaskCardListOrganism] Should generate groups on mount', async () => {
    taskCardList.mount();
    await taskCardList.component.vm.$nextTick();

    const groups = taskCardList.component.vm.$data.taskGroups;

    expect(groups.length).toBeGreaterThan(0);
  });

  it('[TaskCardListOrganism] Should generate groups count equals to tasks in different days', async () => {
    taskCardList.mount();
    await taskCardList.component.vm.$nextTick();

    const tasksCount = propsWithTasks.tasks.length;
    const groups = taskCardList.component.vm.$data.taskGroups;

    expect(groups.length).toBe(tasksCount);
  });

  it('[TaskCardListOrganism] Should generate only one group with every task on same day', async () => {
    taskCardList.mount(propsWithTasksSameDay);
    await taskCardList.component.vm.$nextTick();

    const groups = taskCardList.component.vm.$data.taskGroups;

    expect(groups.length).toBe(1);
  });

  it('[TaskCardListOrganism] Should generate zero groups without tasks', async () => {
    taskCardList.mount(propsWithoutTasks);
    await taskCardList.component.vm.$nextTick();

    const groups = taskCardList.component.vm.$data.taskGroups;

    expect(groups.length).toBe(0);
  });

  it('[TaskCardListOrganism] Generates rows equal to groups count', async () => {
    taskCardList.mount();
    await taskCardList.component.vm.$nextTick();

    const groups = taskCardList.component.vm.$data.taskGroups;
    expect(groups.length).toBeGreaterThan(0);

    for (let i = 0; i < groups.length; i++) {
      const card = taskCardList.component.find(selectors.group(i));
      expect(card.exists()).toBeTruthy();
    }
  });
});
