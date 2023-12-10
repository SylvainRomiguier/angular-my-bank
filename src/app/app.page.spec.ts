import { TestBed } from '@angular/core/testing';
import { AppPageComponent } from './app.page';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppPageComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppPageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
