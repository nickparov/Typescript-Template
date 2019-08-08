export default class _Logger {
  private type: string;

  constructor(type: string) {
    this.type = type;
  }

  log(text: string): void {
    console.log(`[${this.type}]: ${text}`);
  }

};
