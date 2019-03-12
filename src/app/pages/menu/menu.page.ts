import { Component, OnInit } from "@angular/core";
import { Router, RouterEvent } from "@angular/router";
import { AuthService } from "../../services/user/auth.services";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.page.html",
  styleUrls: ["./menu.page.scss"]
})
export class MenuPage implements OnInit {
  activeUrl = "";
  public userIn: any;
  public userNot: any = true;
  public userIs: any;

  pages = [
    {
      title: "Accueil",
      url: "/menu/(menucontent:home)"
    }
  ];

  constructor(private router: Router, private authService: AuthService) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.activeUrl = event.url;
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.userIn = [
          {
            title: "Mes notifications",
            url: "/menu/(menucontent:notifications)"
          },
          {
            title: "Mon profile",
            url: "/menu/(menucontent:profile)"
          },
          {
            title: "Mes parametres",
            url: "/menu/(menucontent:settings)"
          }
        ];

        this.userNot = false;
        this.userIs = true;
      }
    });
  }

  logOut(): void {
    this.authService.logoutUser().then(() => {
      this.router.navigateByUrl("/menu/(menucontent:login)");
    });
  }

  ngOnInit() {}
}
