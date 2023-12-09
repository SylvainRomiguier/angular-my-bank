import { Injectable } from "@angular/core";
import { InMemoryAuthService } from "./Auth.InMemory.service";

@Injectable({
  providedIn: 'root',
  useClass: InMemoryAuthService
})
export abstract class AuthService {
  abstract isAuthenticated(): boolean;
  abstract authenticate(username: string, password: string): boolean;
}
