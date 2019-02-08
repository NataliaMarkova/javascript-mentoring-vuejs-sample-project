export class Note {
  id: number;
  title?: string;
  description?: string;
  done: boolean;
  archived: boolean;
  constructor(title: string, description: string) {
    this.id = -1;
    this.title = title;
    this.description = description;
    this.done = false;
    this.archived = false;
  }
};
