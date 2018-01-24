import { RelatorioPage } from "./relatorio"
import { NgModule } from "@angular/core"
import { IonicPageModule } from "ionic-angular"

@NgModule({
    declarations: [RelatorioPage],
    imports: [IonicPageModule.forChild(RelatorioPage)],
    exports: [RelatorioPage]
})
export class RelatorioPageModule{}