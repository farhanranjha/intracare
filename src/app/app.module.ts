import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { AppLayoutModule } from "./layout/app.layout.module";
import { NotfoundComponent } from "./pages/notfound/notfound.component";
import { userReducer } from "./store/reducers/user.reducer";

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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
