import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feats } from './feats';

describe('Feats', () => {
  let component: Feats;
  let fixture: ComponentFixture<Feats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Feats],
    }).compileComponents();

    fixture = TestBed.createComponent(Feats);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
