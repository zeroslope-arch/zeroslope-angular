import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
//import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SidebarModule } from "ng-sidebar";

import { AppRoutingModule } from "./app.routes";
import { RootComponent } from "./root/root.component";
// import { TokenInterceptor } from "./shared/interceptors/token.interceptor";
// import { ErrorInterceptor } from "./shared/interceptors/error.interceptor";

@NgModule({
  imports: [
    AppRoutingModule,
    //ComponentsModule,
    RouterModule,
    NgbModule,
    BrowserModule,
    HttpClientModule,
    SidebarModule.forRoot()
  ],
  declarations: [RootComponent],
  bootstrap: [RootComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ErrorInterceptor,
    //   multi: true
    // }
  ]
})
export class AppModule {}
