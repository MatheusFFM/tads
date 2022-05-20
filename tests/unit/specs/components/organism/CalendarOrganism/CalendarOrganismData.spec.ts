import ICalendarProps from '@/models/components/ICalendarProps';
import SeletorService from 'tests/unit/specs/SelectorService';

const id = 'calendar';
const today = new Date();
const yesterday = new Date().setDate(today.getDate() - 1);
const tomorrow = new Date().setDate(today.getDate() + 1);
const defaultTaskProps = {
  color: '#000000',
  description: 'test',
  title: 'Test',
};

export const propsWithTasks = {
  id,
  tasks: [
    {
      ...defaultTaskProps,
      code: 1,
      date: today,
      done: false,
    },
    {
      ...defaultTaskProps,
      code: 2,
      date: tomorrow,
      done: false,
    },
    {
      ...defaultTaskProps,
      code: 3,
      date: yesterday,
      done: false,
    },
  ],
} as ICalendarProps;

export const propsWithoutTasks = {
  id,
  tasks: [],
} as ICalendarProps;

export const selectors = {
  datePicker: SeletorService.getSelector('date-picker'),
};
