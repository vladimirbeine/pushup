import { Component, OnInit } from "@angular/core";
import { Router, RouterEvent } from "@angular/router";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.page.html",
  styleUrls: ["./menu.page.scss"]
})
export class MenuPage implements OnInit {
  activeUrl = "";

  pages = [
    {
      title: "Accueil",
      url: "/menu/(menucontent:home)"
    },
    {
      title: "Mes notifications",
      url: "/menu/(menucontent:notifications)"
    },
    {
      title: "Mon profile",
      url: "/menu/(menucontent:profile)"
    },
    {
      title: "Mon tableau de bord",
      url: "/menu/(menucontent:admin)"
    },
    {
      title: "Mes parametres",
      url: "/menu/(menucontent:settings)"
    },
    {
      title: "A propos",
      url: "/menu/(menucontent:about)"
    }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.activeUrl = event.url;
    });
  }

  ngOnInit() {}
}
