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
import { ResetPasswordPage } from "../reset-password/reset-password.page";
import { AuthGuard } from "../../services/user/auth.guard";
import { CardProcessingPage } from "../card-processing/card-processing.page";
import { DiscoverPage } from "../discover/discover.page";
import { CreateCampainPage } from "../create-campain/create-campain.page";

const routes: Routes = [
  {
    path: "menu",
    component: MenuPage,
    children: [
      {
        path: "notifications",
        outlet: "menucontent",
        component: NotificationsPage,
        canActivate: [AuthGuard]
      },
      {
        path: "profile",
        outlet: "menucontent",
        component: ProfilePage,
        canActivate: [AuthGuard]
      },
      {
        path: "settings",
        outlet: "menucontent",
        component: SettingsPage,
        canActivate: [AuthGuard]
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
        path: "details/:id/:title",
        outlet: "menucontent",
        component: DetailsPage
      },
      {
        path: "about",
        outlet: "menucontent",
        component: AboutPage,
        canActivate: [AuthGuard]
      },
      {
        path: "admin",
        outlet: "menucontent",
        component: AdminPage,
        canActivate: [AuthGuard]
      },
      {
        path: "resetpassword",
        outlet: "menucontent",
        component: ResetPasswordPage
      },
      {
        path: "card/:id",
        outlet: "menucontent",
        component: CardProcessingPage
      },
      {
        path: "discover",
        outlet: "menucontent",
        component: DiscoverPage
      },
      {
        path: "create-campain",
        outlet: "menucontent",
        component: CreateCampainPage
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
