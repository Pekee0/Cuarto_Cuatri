import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Character } from '../interface/character.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  http = inject(HttpClient)

  urlBase = environment.urlBase

  getCharacters(): Observable<Character[]>{

    return this.http.get<Character[]>(this.urlBase);
  }

  getCharactersbyId(id: string|null): Observable<Character>{

    return this.http.get<Character>(`${this.urlBase}/${id}`)
  }

  postCharacters(character: Character): Observable<Character>{

    return this.http.post<Character>(this.urlBase,character);
  }

  putCharacters(character: Character, id: string): Observable<Character>{

    return this.http.put<Character>( `${this.urlBase}/${id}`, character);
  }

  deleteCharacterbyId(id: string): Observable<void>{

    return this.http.delete<void>(`${this.urlBase}/${id}`); 
  }
}

