import CalendarOrganismComponent from './CalendarOrganismComponent';
import { propsWithoutTasks } from './CalendarOrganismData.spec';

describe('CalendarOrganism.vue', () => {
  let calendar: CalendarOrganismComponent;

  beforeEach(async () => {
    calendar = new CalendarOrganismComponent();
  });

  it('[CalendarOrganism] Renders a vue instance', async () => {
    calendar.mount();
    expect(calendar.component.vm).toBeTruthy();
  });

  it('[CalendarOrganism] Renders 0 events without tasks', async () => {
    calendar.mount(propsWithoutTasks);

    const events = calendar.component.vm.$data.events;

    expect(events.length).toBe(0);
  });

  it('[CalendarOrganism] Renders 3 events with 3 tasks in different days', async () => {
    calendar.mount();

    const events = calendar.component.vm.$data.events;

    expect(events.length).toBe(3);
  });

  it('[CalendarOrganism] Changes weekdays after inputing weekdays select', async () => {
    expect(false).toBeTruthy();
  });

  it('[CalendarOrganism] Changes type after inputing types select', async () => {
    expect(false).toBeTruthy();
  });
});
