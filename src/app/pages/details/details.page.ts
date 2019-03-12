import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-details",
  templateUrl: "./details.page.html",
  styleUrls: ["./details.page.scss"]
})
export class DetailsPage implements OnInit {
  public id: any;
  public title: string;

  projects = [
    {
      id: 1,
      title: "Collection de T-Shirts eSpring",
      subtitle: "Aide pour extension",
      img: "../../assets/images/projects/photo1.jpg",
      videoUrl: "false",
      description: `Depuis 2015, je confectionne des t-shirts que je vends a des prix accessibles dans le departement de l'ouest.
      Depuis 2015, je confectionne des t-shirts que je vends a des prix accessibles dans le departement de l'ouest.
      Depuis 2015, je confectionne des t-shirts que je vends a des prix accessibles dans le departement de l'ouest.
      Depuis 2015, je confectionne des t-shirts que je vends a des prix accessibles dans le departement de l'ouest.
      Depuis 2015, je confectionne des t-shirts que je vends a des prix accessibles dans le departement de l'ouest.
      Depuis 2015, je confectionne des t-shirts que je vends a des prix accessibles dans le departement de l'ouest.`,
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
      img: "../../assets/images/projects/photo2.jpeg",
      videoUrl: "false",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dolor nisi, sit amet pulvinar justo tempor non. Nam vel facilisis arcu.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dolor nisi, sit amet pulvinar justo tempor non. Nam vel facilisis arcu.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dolor nisi, sit amet pulvinar justo tempor non. Nam vel facilisis arcu.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dolor nisi, sit amet pulvinar justo tempor non. Nam vel facilisis arcu.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dolor nisi, sit amet pulvinar justo tempor non. Nam vel facilisis arcu.`,
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
      img: "../../assets/images/projects/photo3.jpg",
      videoUrl: "false",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dolor nisi, sit amet pulvinar justo tempor non. Nam vel facilisis arcu.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dolor nisi, sit amet pulvinar justo tempor non. Nam vel facilisis arcu.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dolor nisi, sit amet pulvinar justo tempor non. Nam vel facilisis arcu.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dolor nisi, sit amet pulvinar justo tempor non. Nam vel facilisis arcu.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dolor nisi, sit amet pulvinar justo tempor non. Nam vel facilisis arcu.`,
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
      img: "../../assets/images/projects/photo4.jpg",
      videoUrl: "https://www.youtube.com/embed/-E_TWPCkqy4",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dolor nisi, sit amet pulvinar justo tempor non. Nam vel facilisis arcu.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dolor nisi, sit amet pulvinar justo tempor non. Nam vel facilisis arcu.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dolor nisi, sit amet pulvinar justo tempor non. Nam vel facilisis arcu.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dolor nisi, sit amet pulvinar justo tempor non. Nam vel facilisis arcu.`,
      category: "Materiels de bureau",
      totalAmount: "20 000",
      raisedAmount: "1500",
      pendingAmount: "18 500",
      city: "Port-de-paix"
    }
  ];

  pledges = [
    {
      donationID: "4",
      amount: "5 000",
      reward: "Un concert gratuit chez vous",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dolor nisi, sit amet pulvinar justo tempor non. Nam vel facilisis arcu.",
      including: "2 T-Shirts",
      delivery: "23 Avril",
      shipping: "Air metropolitaine",
      pushuppers: "12"
    },
    {
      donationID: "4",
      amount: "20 000",
      reward: "Vous enmener avec nous dans 5 concert",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dolor nisi, sit amet pulvinar justo tempor non. Nam vel facilisis arcu.",
      including: "2 T-Shirts | 1 Guitar",
      delivery: "25 Avril",
      shipping: "Haiti",
      pushuppers: "32"
    },
    {
      donationID: "1",
      amount: "23",
      reward: "Un concert gratuit chez vous",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dolor nisi, sit amet pulvinar justo tempor non. Nam vel facilisis arcu.",
      including: "2 T-Shirts",
      delivery: "23 Avril",
      shipping: "Air metropolitaine",
      pushuppers: "12"
    },
    {
      donationID: "2",
      amount: "23",
      reward: "Un concert gratuit chez vous",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dolor nisi, sit amet pulvinar justo tempor non. Nam vel facilisis arcu.",
      including: "2 T-Shirts",
      delivery: "23 Avril",
      shipping: "Air metropolitaine",
      pushuppers: "12"
    },
    {
      donationID: "3",
      amount: "23",
      reward: "Un concert gratuit chez vous",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dolor nisi, sit amet pulvinar justo tempor non. Nam vel facilisis arcu.",
      including: "2 T-Shirts",
      delivery: "23 Avril",
      shipping: "Air metropolitaine",
      pushuppers: "12"
    },
    {
      donationID: "2",
      amount: "23",
      reward: "Un concert gratuit chez vous",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dolor nisi, sit amet pulvinar justo tempor non. Nam vel facilisis arcu.",
      including: "2 T-Shirts",
      delivery: "23 Avril",
      shipping: "Air metropolitaine",
      pushuppers: "12"
    },
    {
      donationID: "3",
      amount: "23",
      reward: "Un concert gratuit chez vous",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dolor nisi, sit amet pulvinar justo tempor non. Nam vel facilisis arcu.",
      including: "2 T-Shirts",
      delivery: "23 Avril",
      shipping: "Air metropolitaine",
      pushuppers: "12"
    },
    {
      donationID: "1",
      amount: "173873",
      reward: "Un concert gratuit chez vous",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dolor nisi, sit amet pulvinar justo tempor non. Nam vel facilisis arcu.",
      including: "2 T-Shirts",
      delivery: "23 Avril",
      shipping: "Air metropolitaine",
      pushuppers: "12"
    },
    {
      donationID: "1",
      amount: "2384848",
      reward: "Un concert gratuit chez vous",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dolor nisi, sit amet pulvinar justo tempor non. Nam vel facilisis arcu.",
      including: "2 T-Shirts",
      delivery: "23 Avril",
      shipping: "Air metropolitaine",
      pushuppers: "12"
    }
  ];

  constructor(private route: ActivatedRoute, private nav: NavController) {
    this.id = this.route.snapshot.paramMap.get("id");
    this.title = this.route.snapshot.paramMap.get("title");
  }

  ngOnInit() {}

  loadPaymentMethods(id) {
    this.nav.navigateForward(`/menu/(menucontent:card/${id}/)`);
  }
}
