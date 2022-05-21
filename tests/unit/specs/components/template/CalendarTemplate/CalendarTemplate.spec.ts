import ICalendarProps from '@/models/components/ICalendarProps';
import CalendarTemplateComponent from './CalendarTemplateComponent';
import { propsWithTasks, selectors } from './CalendarTemplateData';

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

    const title = calendar.component.find(selectors.title);

    expect(title.exists()).toBeTruthy();
    expect(title.text()).toBe('Calendar');
  });

  it('[CalendarTemplate] Renders calendar organism props correctly', async () => {
    calendar.mount();

    const content = calendar.component.find(selectors.content);

    expect(content.exists()).toBeTruthy();
    const props = content.vm.$props.props as ICalendarProps;

    expect(props.tasks).toStrictEqual(propsWithTasks.tasks);
  });
});
