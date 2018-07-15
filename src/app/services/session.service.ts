import { Injectable } from '@angular/core';
import { Session, Password } from 'src/app/shared/classes/session';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  session = new Session();
  sessionSubject = new Subject<Session>();
  sessionState = this.sessionSubject.asObservable();

  constructor(private router: Router,
              private afAuth: AngularFireAuth) { }

  /**
   * ログイン処理
   * @param account アカウント
   */
  login(account: Password): Promise<[boolean, string]> {

    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(account.email, account.password).then(() => {
        this.session.login = true;
        this.sessionSubject.next(this.session);
        return this.router.navigate(['/main']);
      }).then(() => {
        resolve([true, 'ログインしました。']);
      }).catch(err => {
        resolve([false, 'ログインに失敗しました。\n' + err]);
      });
   });
  }

  /**
   * ログアウト処理
   */
  logout(): Promise<[boolean, string]> {

    return new Promise((resolve, reject) => {
      this.afAuth.auth.signOut().then(() => {
        this.sessionSubject.next(this.session.reset());
        return this.router.navigate(['/login']);
      }).then(() => {
        resolve([true, 'ログアウトしました。']);
      }).catch( err => {
        resolve([false, 'ログアウトに失敗しました。\n' + err]);
      });
    });
  }

  // /**
  //  * サインアップ処理
  //  * @param account アカウント
  //  */
  // signup(account: Password): void {

  //    // アカウント作成
  //   this.afAuth.auth.createUserWithEmailAndPassword(account.email, account.password)
  //   .then( user => user.sendEmailVerification()) // メールアドレス確認
  //   .then(() => alert('メールアドレス確認メールを送信しました。'))
  //   .catch( err => {
  //     console.log(err);
  //     alert('アカウントの作成に失敗しました。\n' + err);
  //   });
  // }
}

