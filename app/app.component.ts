import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PetInformation } from './model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export const MOCK_PET_LIST: PetInformation[] = [
  {
    id: 1,
    name: "Otis",
    status: 1
  },
  {
    id: 2,
    name: "Sir Barks-a-lot",
    status: 1
  },
  {
    id: 3,
    name: "Scooby",
    status: 2
  },
  {
    id: 4,
    name: "Brownie",
    status: 3
  },
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'vet-app';
  public petInformationList: PetInformation[] = [];
  public newPet: string = '';

  constructor() {
    this.petInformationList = MOCK_PET_LIST;
  }

  async ngOnInit() {

  }

  getListedPets() {
    return this.petInformationList.filter(pet => pet.status === 1);
  }
  getExaminingPets() {
    return this.petInformationList.filter(pet => pet.status === 2);
  }
  getFinishedPets() {
    return this.petInformationList.filter(pet => pet.status === 3);
  }

  changePetStatus(pet: PetInformation, opt: number) {
    pet.status = opt === 1 ? 2 : 3;
  }

  addNewPet() {
    const petMemo: PetInformation = {
      id: this.petInformationList.length,
      name: this.newPet,
      status: 1
    }
    this.petInformationList.push(petMemo);
    this.newPet = '';
  }

}
