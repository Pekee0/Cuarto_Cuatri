import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListComponentComponent } from './character-list-component.component';

describe('CharacterListComponentComponent', () => {
  let component: CharacterListComponentComponent;
  let fixture: ComponentFixture<CharacterListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
