import Task from '@/models/class/Task';
import { Colors } from '@/models/constants/Colors';
import LocalStorageMock from '../../LocalStorageMock';
import CalendarPageComponent from './CalendarPageComponent';

describe('CalendarPage.vue', () => {
  let calendar: CalendarPageComponent;
  const localStorageMock = new LocalStorageMock();

  beforeEach(async () => {
    calendar = new CalendarPageComponent();
  });

  it('[CalendarPage] Renders a vue instance', async () => {
    calendar.mount();
    expect(calendar.component.vm).toBeTruthy();
  });

  it('[CalendarPage] Should get tasks on mount', async () => {
    const task: Task = {
      code: 1,
      color: Colors.Active,
      date: new Date(),
      description: 'mock',
      done: false,
      title: 'Mock',
    };

    localStorageMock.setLocalStorageTask([task]);
    calendar.mount();
    await calendar.component.vm.$nextTick();

    const tasks = (calendar.component.vm as any).tasks;

    expect(tasks.length).toBeGreaterThan(0);
  });
});
