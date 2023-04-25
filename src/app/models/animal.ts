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
  id: string;
  username: string;
  comment: 'string';
  parent_id?: string;
}
