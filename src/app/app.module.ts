import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppLayoutModule } from "./layout/app.layout.module";
import { NotfoundComponent } from "./pages/notfound/notfound.component";
import { userReducer } from "./store/reducers/user.reducer";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, NotfoundComponent],
  imports: [HttpClientModule, AppRoutingModule, AppLayoutModule, StoreModule.forRoot({ user: userReducer })],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
