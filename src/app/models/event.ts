export class ZooEvent {
  id: number;
  image: string;
  caption: string;
  description: string;
  likes: string[]; // emails

  constructor(data: ZooEventData) {
    this.id = data.id;
    this.image = data.image;
    this.caption = data.caption;
    this.description = data.description;
    this.likes = data.likes;
  }

  public getDto(): ZooEventData {
    return {
      id: this.id,
      image: this.image,
      caption: this.caption,
      description: this.description,
      likes: this.likes,
    };
  }

  public like(email: string) {
    const like = this.likes.find((e) => e === email);
    if (like) this.likes = this.likes.filter((l) => l !== email);
    else this.likes.push(email);
  }
}

export interface ZooEventData {
  id: number;
  image: string;
  caption: string;
  description: string;
  likes: string[];
}
