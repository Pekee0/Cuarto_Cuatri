import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailsComponentComponent } from './character-details-component.component';

describe('CharacterDetailsComponentComponent', () => {
  let component: CharacterDetailsComponentComponent;
  let fixture: ComponentFixture<CharacterDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterDetailsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
