import CalendarTemplateComponent from './CalendarTemplateComponent';

describe('CalendarTemplate.vue', () => {
  let calendar: CalendarTemplateComponent;

  beforeEach(async () => {
    calendar = new CalendarTemplateComponent();
  });

  it('[CalendarTemplate] Renders a vue instance', async () => {
    calendar.mount();
    expect(calendar.component.vm).toBeTruthy();
  });

  it('[CalendarTemplate] Renders calendar title', async () => {
    calendar.mount();
    expect(false).toBeTruthy();
  });

  it('[CalendarTemplate] Renders calendar organism props correctly', async () => {
    calendar.mount();
    expect(false).toBeTruthy();
  });
});
