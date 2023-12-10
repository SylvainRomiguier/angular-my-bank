import { inject } from "@angular/core";
import { AuthService } from "../services/Auth.abstract";
import { CanActivateFn } from "@angular/router";

export const isAuthenticated: CanActivateFn = () => {
    const authService = inject(AuthService);
    if (!authService.isAuthenticated()) {
        authService.logout();
    }
    return authService.isAuthenticated();
}