import { Colors } from '@/models/constants/Colors';
import TaskCardOrganismComponent from './TaskCardOrganismComponent';
import { propsWithDoneTask, propsWithTask } from './TaskCardOrganismData';

describe('TaskCardOrganism.vue', () => {
  let taskCard: TaskCardOrganismComponent;

  beforeEach(async () => {
    taskCard = new TaskCardOrganismComponent();
  });

  it('[TaskCardOrganism] Renders a vue instance', async () => {
    taskCard.mount();
    expect(taskCard.component.vm).toBeTruthy();
  });

  it('[TaskCardOrganism] Should generate card with done color', async () => {
    taskCard.mount(propsWithDoneTask);
    expect((taskCard.component.vm as any).taskColor).toBe(Colors.Done);
  });

  it('[TaskCardOrganism] Should generate card with active color', async () => {
    taskCard.mount();
    expect((taskCard.component.vm as any).taskColor).toBe(Colors.Active);
  });

  it('[TaskCardOrganism] Should get task color for tag', async () => {
    taskCard.mount();
    expect((taskCard.component.vm as any).taskColor).toBe(
      propsWithTask.task.color,
    );
  });

  it('[TaskCardOrganism] Should get black color for tag without a task color', async () => {
    taskCard.mount();
    expect((taskCard.component.vm as any).taskColor).toBe(Colors.Black);
  });

  it('[TaskCardOrganism] Should emit "change" after selecting the checkbox', async () => {
    expect(false).toBeTruthy();
  });

  it('[TaskCardOrganism] Should make the active task done after selecting the checkbox', async () => {
    expect(false).toBeTruthy();
  });

  it('[TaskCardOrganism] Should make the done task active after selecting the checkbox', async () => {
    expect(false).toBeTruthy();
  });

  it('[TaskCardOrganism] Should get task date formated', async () => {
    expect(false).toBeTruthy();
  });

  it('[TaskCardOrganism] Should render task description after clicking on expand', async () => {
    expect(false).toBeTruthy();
  });

  it('[TaskCardOrganism] Should show expansive panel when the task has a description', async () => {
    expect(false).toBeTruthy();
  });

  it('[TaskCardOrganism] Should not show expansive panel when the task has no description', async () => {
    expect(false).toBeTruthy();
  });

  it('[TaskCardOrganism] Should add done class to title if the task is done', async () => {
    expect(false).toBeTruthy();
  });
});
