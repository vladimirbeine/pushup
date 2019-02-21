import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MenuPage } from "./menu.page";
import { NotificationsPage } from "../notifications/notifications.page";
import { ProfilePage } from "../profile/profile.page";
import { SettingsPage } from "../settings/settings.page";
import { LoginPage } from "../login/login.page";
import { HomePage } from "../home/home.page";
import { SignupPage } from "../signup/signup.page";
import { DetailsPage } from "../details/details.page";
import { AboutPage } from "../about/about.page";
import { AdminPage } from "../admin/admin.page";
import { TabsPage } from "../tabs/tabs.page";

const routes: Routes = [
  {
    path: "menu",
    component: MenuPage,
    children: [
      {
        path: "notifications",
        outlet: "menucontent",
        component: NotificationsPage
      },
      {
        path: "profile",
        outlet: "menucontent",
        component: ProfilePage
      },
      {
        path: "settings",
        outlet: "menucontent",
        component: SettingsPage
      },
      {
        path: "login",
        outlet: "menucontent",
        component: LoginPage
      },
      {
        path: "home",
        outlet: "menucontent",
        component: HomePage
      },
      {
        path: "signup",
        outlet: "menucontent",
        component: SignupPage
      },
      {
        path: "details",
        outlet: "menucontent",
        component: DetailsPage
      },
      {
        path: "about",
        outlet: "menucontent",
        component: AboutPage
      },
      {
        path: "admin",
        outlet: "menucontent",
        component: AdminPage
      }
    ]
  },
  {
    path: "",
    redirectTo: "/menu/(menucontent:home)"
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {}
