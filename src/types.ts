export class Note {
  title?: string;
  description?: string;
  done: boolean;
  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
    this.done = false;
  }
};
