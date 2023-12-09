import { inject } from "@angular/core";
import { AuthService } from "../services/Auth.abstract";
import { CanActivateFn } from "@angular/router";

export const isAuthenticated: CanActivateFn = () => {
    const authService = inject(AuthService);
    return authService.isAuthenticated();
}