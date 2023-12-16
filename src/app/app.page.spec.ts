import { TestBed } from '@angular/core/testing';
import { AppPageComponent } from './app.page';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthServiceMock } from './services/Auth.Mock.service';
import { AuthService } from './services/Auth.abstract';
import { NotificationService } from './services/NotificationService';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
    }).compileComponents();
  });

  it('should create the app', () => {
    TestBed.configureTestingModule({
      imports: [LayoutComponent],
      providers: [NotificationService, { provide: AuthService, useClass: AuthServiceMock}],
    });
    const fixture = TestBed.createComponent(AppPageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
