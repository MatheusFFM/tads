import Task from '@/models/class/Task';

export default class LocalStorageMock {
  public setLocalStorageTask(tasks: Task[]): void {
    window.localStorage.__proto__.getItem = jest
      .fn()
      .mockReturnValue(JSON.stringify(tasks));
  }
}
