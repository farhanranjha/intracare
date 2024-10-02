import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppLayoutModule } from "./layout/app.layout.module";
import { NotfoundComponent } from "./pages/notfound/notfound.component";
import { userReducer } from "./store/reducers/user.reducer";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { ErrorInterceptor } from "./interceptors/error.interceptor";

@NgModule({
  declarations: [AppComponent, NotfoundComponent],
  imports: [HttpClientModule, AppRoutingModule, AppLayoutModule, StoreModule.forRoot({ user: userReducer })],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
