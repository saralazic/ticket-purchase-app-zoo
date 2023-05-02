export interface Animal {
  specie: string;
  latin: string;
  descent: string;
  population: string;
  lifespan: string;
  img: string;
  comments: Comment[];
}

export interface Comment {
  author: string;
  date: Date;
  text: string;
  replies: Comment[];
}
