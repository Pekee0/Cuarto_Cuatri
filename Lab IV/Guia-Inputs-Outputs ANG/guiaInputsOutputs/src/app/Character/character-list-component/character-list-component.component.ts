import { Component, EventEmitter, inject, Input, OnInit } from '@angular/core';
import { Character } from '../interface/character.interface';
import { CharacterFormComponent } from '../character-form/character-form.component';
import { CharacterService } from '../sevice/character.service';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from '../../pages/details/details.component';

@Component({
  selector: 'app-character-list-component',
  standalone: true,
  imports: [CharacterFormComponent,RouterModule],
  templateUrl: './character-list-component.component.html',
  styleUrl: './character-list-component.component.css'
})
export class CharacterListComponentComponent implements OnInit {
  ngOnInit(): void {

    this.getCharactersFromDB()
  }


  service = inject(CharacterService)

  

  CharacterList: Character[] = []

  AddList(character:Character)
  {
      this.CharacterList.push({...character})
  }

  getCharactersFromDB()
  {
    this.service.getCharacters().subscribe(
      {
        next:(CharacterL: Character[]) =>{
          this.CharacterList = CharacterL
        },
        error: (e: Error) =>{
            console.log(e.message);
        }
      }
    )
  }

  getCharacterbyId(id: string)
  {
    const pjporID = this.service.getCharactersbyId(id).subscribe(
      {
        next: () =>{
            console.log(pjporID);
            
        },
        error: (e: Error) =>
        {
          console.log(e.message);
          
        }
      }
    )
  }

  DeleteCharacter(id: string)
  {
    this.service.deleteCharacterbyId(id).subscribe(
      {
        next: () =>{
          console.log("Eliminado");
        },
        error: (e:Error) =>{
          e.message
        }
      }
    )
  }
}



