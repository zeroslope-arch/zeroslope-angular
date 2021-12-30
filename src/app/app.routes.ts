import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomePage } from "./pages/home/home.component";
import { SamplePage } from "./pages/sample/sample.component";
import { NotFoundPage } from "./pages/not-found/not-found.component";

const routes: Routes = [
  { path: "", component: HomePage },
  { path: "sample", component: SamplePage },
  { path: "**", component: NotFoundPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [HomePage, NotFoundPage, SamplePage]
})
export class AppRoutingModule {}
