import { Component, inject, Input, OnInit } from '@angular/core';
import { Character } from '../interface/character.interface';
import { CharacterService } from '../sevice/character.service';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})

export class CharacterCardComponent implements OnInit{
  ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe(
        {
          next: (param) =>
          {
            this.id = param.get('id')
            console.log( 'la id es:' + this.id);
            
            this.getCharacter(this.id)
          }
        }
      )
  }

  
  id: string | null = null

  personaje: Character = {
    id: '', 
    nombre: '',
    universo: '', 
    habilidad: '', 
    ultimate: '',
  }

  service = inject(CharacterService)
  activatedRoute = inject(ActivatedRoute)

  getCharacter(id: string|null)
  {
    this.service.getCharactersbyId(id).subscribe(
      {
        next: (pj:Character) =>{

          this.personaje = pj

        

        },
        error: (e: Error) => 
          {
            console.log(e.message);  
        }
      }
    )
  } 


}
