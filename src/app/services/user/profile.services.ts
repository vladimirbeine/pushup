import { Injectable } from "@angular/core";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  public userProfile: firebase.firestore.DocumentReference;
  public currentUser: firebase.User;

  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.currentUser = user;
        this.userProfile = firebase
          .firestore()
          .doc(`/usersprofile/${user.uid}`);
      }
    });
  }

  getUserProfile(): firebase.firestore.DocumentReference {
    return this.userProfile;
  }

  updateName(nickName: string, fullName: string): Promise<any> {
    return this.userProfile.update({ nickName, fullName });
  }

  updateDOB(birthDate: string): Promise<any> {
    return this.userProfile.update({ birthDate });
  }

  updateEmail(newEmail: string, password: string): Promise<any> {
    const credential: firebase.auth.AuthCredential = firebase.auth.EmailAuthProvider.credential(
      this.currentUser.email,
      password
    );

    return this.currentUser
      .reauthenticateAndRetrieveDataWithCredential(credential)
      .then(() => {
        this.currentUser.updateEmail(newEmail).then(() => {
          this.userProfile.update({ email: newEmail });
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  updatePassword(newPassword: string, oldPassword: string): Promise<any> {
    const credential: firebase.auth.AuthCredential = firebase.auth.EmailAuthProvider.credential(
      this.currentUser.email,
      oldPassword
    );

    return this.currentUser
      .reauthenticateAndRetrieveDataWithCredential(credential)
      .then(() => {
        this.currentUser.updatePassword(newPassword).then(() => {
          console.log("Password Changed");
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
}
