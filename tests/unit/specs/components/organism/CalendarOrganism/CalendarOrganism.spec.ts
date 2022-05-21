import CalendarOrganismComponent from './CalendarOrganismComponent';
import { propsWithoutTasks, selectors } from './CalendarOrganismData';

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
    calendar.mount();

    const select = calendar.component.find(selectors.selectWeekdays);
    expect(select.exists()).toBeTruthy();

    const { weekdays } = calendar.component.vm.$data;
    expect(weekdays.length).toBe(4);

    const weekday = [1, 3, 5];
    select.vm.$emit('input', weekday);

    expect(calendar.component.vm.$data.weekday).toBe(weekday);
  });

  it('[CalendarOrganism] Changes type after inputing types select', async () => {
    calendar.mount();

    const select = calendar.component.find(selectors.selectTypes);
    expect(select.exists()).toBeTruthy();

    const { types } = calendar.component.vm.$data;
    expect(types.length).toBe(4);

    const type = '4day';
    select.vm.$emit('input', type);

    expect(calendar.component.vm.$data.type).toBe(type);
  });
});
