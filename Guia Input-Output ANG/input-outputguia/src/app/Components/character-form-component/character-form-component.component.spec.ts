import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterFormComponentComponent } from './character-form-component.component';

describe('CharacterFormComponentComponent', () => {
  let component: CharacterFormComponentComponent;
  let fixture: ComponentFixture<CharacterFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterFormComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
