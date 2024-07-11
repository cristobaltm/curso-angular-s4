import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class DBZAddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = { id: '', name : '', power : undefined };

  emitCharacter() : void {
    if( this.character.name.length === 0) return;

    this.onNewCharacter.emit( this.character );
    this.character = { id: '', name : '', power : undefined };
  }

}
