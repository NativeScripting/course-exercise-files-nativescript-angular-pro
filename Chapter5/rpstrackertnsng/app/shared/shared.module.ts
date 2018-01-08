import { NgModule } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { LogoutDirective } from './directives/app-logout-attribute.directive';


@NgModule({
    imports: [],
    exports: [
        MenuComponent,
        LogoutDirective
    ],
    declarations: [
        MenuComponent,
        LogoutDirective
    ],
    providers: [],
})
export class SharedModule { }
