import CalendarOrganismComponent from './CalendarOrganismComponent';

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
    expect(false).toBeTruthy();
  });

  it('[CalendarOrganism] Renders one event with tasks at the same day', async () => {
    expect(false).toBeTruthy();
  });

  it('[CalendarOrganism] Renders 3 events with 3 tasks in different days', async () => {
    expect(false).toBeTruthy();
  });

  it('[CalendarOrganism] Changes weekdays after inputing weekdays select', async () => {
    expect(false).toBeTruthy();
  });

  it('[CalendarOrganism] Changes type after inputing types select', async () => {
    expect(false).toBeTruthy();
  });
});
