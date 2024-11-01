import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardComponentComponent } from './character-card-component.component';

describe('CharacterCardComponentComponent', () => {
  let component: CharacterCardComponentComponent;
  let fixture: ComponentFixture<CharacterCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterCardComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
