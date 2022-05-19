import TaskCardListOrganismComponent from './TaskCardListOrganismComponent';

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
    expect(false).toBeTruthy();
  });

  it('[TaskCardListOrganism] Should generate groups on mount', async () => {
    expect(false).toBeTruthy();
  });

  it('[TaskCardListOrganism] Generates h2 atoms equal to groups count', async () => {
    expect(false).toBeTruthy();
  });

  it('[TaskCardListOrganism] Should update tasks group after changing a task', async () => {
    expect(false).toBeTruthy();
  });
});
