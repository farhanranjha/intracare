import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { AppLayoutModule } from "./layout/app.layout.module";
import { StoreModule } from "@ngrx/store";
import { userReducer } from "./store/reducers/user.reducer";

@NgModule({
  declarations: [AppComponent, NotfoundComponent],
  imports: [AppRoutingModule, AppLayoutModule, StoreModule.forRoot({ user: userReducer })],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
