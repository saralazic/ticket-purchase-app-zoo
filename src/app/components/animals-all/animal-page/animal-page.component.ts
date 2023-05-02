import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ANIMAL_ERROR } from 'src/app/constants/errors';
import { Animal } from 'src/app/models/animal';
import { animalService } from 'src/app/services/animal.service';
import { Comment } from 'src/app/models/animal';
import { authService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-animal-page',
  templateUrl: './animal-page.component.html',
  styleUrls: ['./animal-page.component.css'],
})
export class AnimalPageComponent {
  private authService = authService;
  private animalService = animalService;
  public error?: string;
  public animal: Animal | null = null;
  public displayReply = -1;

  public newComment: string = '';
  public reply = '';
  private index: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params); // Object containing the query parameters
      console.log(params['index']); // Accessing a specific query parameter\
      const index = params['index'];
      if (index) {
        this.animal = this.animalService.getAnimalByIndex(index);
        this.index = index;
      } else this.error = ANIMAL_ERROR;
    });
  }

  addComment(): void {
    const author = this.authService.getLoggedUser();

    if (this.newComment) {
      this.animal?.comments.push({
        author: author?.username ?? 'User',
        date: new Date(),
        text: this.newComment,
        replies: [],
      });
      this.newComment = '';
    }

    this.animalService.saveAnimalByIndex(this.animal, this.index);
  }

  replyToComment(comment_index: number): void {
    const author = this.authService.getLoggedUser();
    if (this.reply) {
      this.animal?.comments[comment_index].replies.push({
        author: author?.username ?? 'User',
        date: new Date(),
        text: this.reply,
        replies: [],
      });
    }
    this.animalService.saveAnimalByIndex(this.animal, this.index);
    this.reply = '';
    this.displayReply = -1;
  }

  initial(name: string): string {
    return name ? name.charAt(0).toUpperCase() : '';
  }

  setDisplayReply(i: number) {
    this.displayReply = this.displayReply === i ? -1 : i;
  }
}
