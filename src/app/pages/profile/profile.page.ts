import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { AuthService } from "../../services/user/auth.services";
import { ProfileService } from "../../services/user/profile.services";
import { Router } from "@angular/router";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { ActionSheetController } from "@ionic/angular";
import * as firebase from "firebase/app";
import { storage } from "firebase";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"]
})
export class ProfilePage implements OnInit {
  public userProfile: any;
  public birthDate: Date;
  public uCredentials: firebase.auth.UserCredential;

  constructor(
    private alertCtrl: AlertController,
    public actionSC: ActionSheetController,
    private authService: AuthService,
    private profileService: ProfileService,
    private camera: Camera,
    private router: Router
  ) {}

  ngOnInit() {
    this.profileService
      .getUserProfile()
      .get()
      .then(userProfileSnapshot => {
        this.userProfile = userProfileSnapshot.data();
        this.birthDate = userProfileSnapshot.data().birthDate;
      });
  }

  async takePhoto() {
    try {
      const options: CameraOptions = {
        quality: 70,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.CAMERA,
        encodingType: this.camera.EncodingType.PNG,
        saveToPhotoAlbum: true
      };
      const result = await this.camera.getPicture(options);
      const image = `data:image/jpeg;base64${result}`;
      const picture = storage().ref(
        `/usersprofile/${this.uCredentials.user.uid}/profile`
      );
      picture.putString(image, "data_url");
    } catch (err) {
      console.log(err);
    }
  }

  async selectPhoto() {
    try {
      const options: CameraOptions = {
        quality: 70,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true
      };
      const result = await this.camera.getPicture(options);
      const image = `data:image/jpeg;base64${result}`;
      const picture = storage().ref(
        `/usersprofile/${this.uCredentials.user.uid}/profile`
      );
      picture.putString(image, "data_url");
    } catch (err) {
      console.log(err);
    }
  }

  async presentPicActionSheet() {
    const actionSheet = await this.actionSC.create({
      header: "Choisir une photo de profile",
      buttons: [
        {
          text: "Avec la camera",
          role: "destructive",
          icon: "camera",
          handler: () => {
            this.takePhoto();
          }
        },
        {
          text: "A partir de la gallerie",
          icon: "images",
          handler: () => {
            this.selectPhoto();
          }
        }
      ]
    });
    await actionSheet.present();
  }

  logOut(): void {
    this.authService.logoutUser().then(() => {
      this.router.navigateByUrl("/menu/(menucontent:login)");
    });
  }

  async updateName(): Promise<void> {
    const alert = await this.alertCtrl.create({
      subHeader: "Surnom et Nom complet",
      inputs: [
        {
          type: "text",
          name: "nickName",
          placeholder: "Modifier votre surnom",
          value: this.userProfile.nickName
        },
        {
          type: "text",
          name: "fullName",
          placeholder: "Modifier votre nom complet",
          value: this.userProfile.fullName
        }
      ],
      buttons: [
        { text: "Annuler" },
        {
          text: "Sauvegarder",
          handler: data => {
            this.profileService.updateName(data.nickName, data.fullName);
          }
        }
      ]
    });
    await alert.present();
  }

  updateDOB(birthDate: any): void {
    if (birthDate === undefined) {
      return;
    }
    this.profileService.updateDOB(birthDate);
  }

  async updateEmail(): Promise<void> {
    const alert = await this.alertCtrl.create({
      inputs: [
        {
          type: "text",
          name: "newEmail",
          placeholder: "Taper votre nouvel email"
        },
        {
          name: "password",
          placeholder: "Votre mot de passe actuel",
          type: "password"
        }
      ],
      buttons: [
        { text: "Annuler" },
        {
          text: "Sauvegarder",
          handler: data => {
            this.profileService
              .updateEmail(data.newEmail, data.password)
              .then(() => {
                console.log("Email Changed Successfully");
              })
              .catch(error => {
                console.log("ERROR: " + error.message);
              });
          }
        }
      ]
    });
    await alert.present();
  }

  async updatePassword(): Promise<void> {
    const alert = await this.alertCtrl.create({
      inputs: [
        {
          name: "newPassword",
          placeholder: "Entrer votre nouveau mot de passe",
          type: "password"
        },
        {
          name: "oldPassword",
          placeholder: "Entrer votre ancien mot de passe",
          type: "password"
        }
      ],
      buttons: [
        { text: "Annuler" },
        {
          text: "Sauvegarder",
          handler: data => {
            this.profileService.updatePassword(
              data.newPassword,
              data.oldPassword
            );
          }
        }
      ]
    });
    await alert.present();
  }
}
