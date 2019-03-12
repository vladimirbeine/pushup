import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  projects = [
    {
      id: 1,
      title: "Collection de T-Shirts eSpring",
      subtitle: "Aide pour extension",
      img: "../../assets/images/projects/photo1.jpg",
      videoUrl: "false",
      description: `Depuis 2015, je confectionne des t-shirts que je vends a des prix accessibles dans le departement de l'ouest.`,
      category: "Fournitures",
      totalAmount: "10 000",
      raisedAmount: "500",
      pendingAmount: "9 500",
      city: "Petit-Goave"
    },
    {
      id: 2,
      title: "Moyen de transport pour ma Startup",
      subtitle: "Aide pour achat",
      img: "../../assets/images/projects/photo1.jpg",
      videoUrl: "false",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dolor nisi, sit amet pulvinar justo tempor non. Nam vel facilisis arcu.`,
      category: "Materiels de bureau",
      totalAmount: "30 000",
      raisedAmount: "1500",
      pendingAmount: "28 500",
      city: "Cabaret"
    },
    {
      id: 3,
      title: "Hospitalisation pour cause de maladie diabetique",
      subtitle: "Aide d'urgence",
      img: "../../assets/images/projects/photo1.jpg",
      videoUrl: "false",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dolor nisi, sit amet pulvinar justo tempor non. Nam vel facilisis arcu.`,
      category: "Materiels de bureau",
      totalAmount: "20 000",
      raisedAmount: "1500",
      pendingAmount: "18 500",
      city: "Leogane"
    },
    {
      id: 4,
      title: "Frais de voyage pour participer a un concours aux Etats-unis",
      subtitle: "Aide d'urgence",
      img: "../../assets/images/projects/photo1.jpg",
      videoUrl: "https://www.youtube.com/embed/-E_TWPCkqy4",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dolor nisi, sit amet pulvinar justo tempor non. Nam vel facilisis arcu.`,
      category: "Materiels de bureau",
      totalAmount: "20 000",
      raisedAmount: "1500",
      pendingAmount: "18 500",
      city: "Port-de-paix"
    }
  ];

  constructor(private router: Router, private nav: NavController) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
      }
    });
  }

  goToHome() {
    this.router.navigateByUrl("/menu/(menucontent:home)");
  }

  goToSettings() {
    this.nav.navigateForward("/menu/(menucontent:settings)");
  }

  goToNotifs() {
    this.router.navigateByUrl("/menu/(menucontent:notifications)");
  }

  openProjectDetail(pid, ptitle) {
    this.nav.navigateForward(`/menu/(menucontent:details/${pid}/${ptitle})`);
    console.log(pid, ptitle);
  }

  ngOnInit() {}
}
