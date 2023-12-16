import { AuthService } from "./Auth.abstract";

export class AuthServiceMock implements AuthService {
    isAuthenticated(): boolean {
        return true;
    }
    authenticate(username: string, password: string): boolean {
        return true;
    }
    logout(): void {
        return;
    }
}