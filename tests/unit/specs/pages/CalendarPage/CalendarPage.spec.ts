import CalendarPageComponent from './CalendarPageComponent';

describe('CalendarPage.vue', () => {
  let calendar: CalendarPageComponent;

  beforeEach(async () => {
    calendar = new CalendarPageComponent();
  });

  it('[CalendarPage] Renders a vue instance', async () => {
    calendar.mount();
    expect(calendar.component.vm).toBeTruthy();
  });

  it('[CalendarPage] Should get tasks on mount', async () => {
    expect(false).toBeTruthy();
  });
});
