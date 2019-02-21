import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { MenuPage } from "./menu.page";
import { MenuRoutingModule } from "./menu-routing.module";
import { NotificationsPageModule } from "../notifications/notifications.module";
import { ProfilePageModule } from "../profile/profile.module";
import { SettingsPageModule } from "../settings/settings.module";
import { AboutPageModule } from "../about/about.module";
import { DetailsPageModule } from "../details/details.module";
import { HomePageModule } from "../home/home.module";
import { LoginPageModule } from "../login/login.module";
import { SignupPageModule } from "../signup/signup.module";
import { AdminPageModule } from "../admin/admin.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuRoutingModule,
    NotificationsPageModule,
    ProfilePageModule,
    SettingsPageModule,
    AboutPageModule,
    DetailsPageModule,
    HomePageModule,
    LoginPageModule,
    SignupPageModule,
    AdminPageModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
