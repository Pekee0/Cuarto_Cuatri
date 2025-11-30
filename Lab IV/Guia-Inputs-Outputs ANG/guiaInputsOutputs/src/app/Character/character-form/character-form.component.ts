import { Component, EventEmitter, inject, Output} from '@angular/core';
import { FormBuilder, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { Character } from '../interface/character.interface';
import { CharacterService } from '../sevice/character.service';

@Component({
  selector: 'app-character-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './character-form.component.html',
  styleUrl: './character-form.component.css'
})
export class CharacterFormComponent {

  @Output()
  emitCharacter: EventEmitter<Character> = new EventEmitter();

    Character: Character = {
      id: '', 
      nombre: '',
      universo: '', 
      habilidad: '', 
      ultimate: '',
    }

fb = inject(FormBuilder); 
Service = inject(CharacterService)

formulario = this.fb.nonNullable.group(
  {
    id:[,[Validators.required]],
    nombre:['',[Validators.required]],
    universo:['',[Validators.required]],
    habilidad: ['',[Validators.required]],
    ultimate: ['',[Validators.required]],
  }
)

addCharacter()
  {
    if(this.formulario.invalid) return;
    

    const character = this.formulario.getRawValue(); 
    this.postCharacter(character)
    this.emitCharacter.emit(character) 
    

  }

  postCharacter(pj: Character)
  {
    this.Service.postCharacters(pj).subscribe(
      {
        next: (pj: Character) =>{
          console.log(pj);
        },
        error: (err: Error) => {
            console.log(err.message);
        },  
      }
    )
  }



}
