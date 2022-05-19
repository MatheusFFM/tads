export default class SeletorService {
  public static getSelector(testId: string): string {
    return `.${testId}`;
  }
}
