export class Logger {
  private type: string;

  // constructor function
  constructor(type: string) {
    this.type = type;
  }
  // shared methods
  log(text: string): void {
    console.log(`[${this.type}]: ${text}`);
  };
};
