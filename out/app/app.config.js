"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const router_1 = require("@angular/router");
const http_1 = require("@angular/common/http"); // Importa el módulo HTTP
const app_routes_1 = require("./app.routes");
const platform_browser_1 = require("@angular/platform-browser");
exports.appConfig = {
    providers: [
        (0, router_1.provideRouter)(app_routes_1.routes),
        (0, platform_browser_1.provideClientHydration)(),
        (0, http_1.provideHttpClient)() // Asegúrate de incluir HttpClient aquí
    ]
};
