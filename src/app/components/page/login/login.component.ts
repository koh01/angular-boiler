import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AbstractPage } from '../abstractPage';
import { Password } from '../../../shared/classes/session';
import { SessionService } from '../../../services/session.service';
import { forbiddenNameValidator } from '../../../shared/validators/forbidden-validator.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends AbstractPage implements OnInit {

  /** */
  loginForm: FormGroup;
  /** */
  isHidePass = true;
  public account: Password;
  resultmessage = '';
  constructor(protected title: Title,
              private sessionService: SessionService,
              private fb: FormBuilder) {
    super(title, 'ログイン');
    this.createForm();
  }

  ngOnInit() {
  }

  /**
   * ログインボタン
   * @param e
   */
  async submitLogin(e: Event) {
    // e.preventDefault();
    this.account = new Password();
    this.account.email = this.loginForm.controls.loginId.value;
    this.account.password = this.loginForm.controls.loginPassword.value;

    const result = await this.sessionService.login(this.account);
    this.resultmessage = result[1];
  }
  /**
   * フォームの作成
   */
  private createForm() {
    this.loginForm = this.fb.group({
      loginId: ['', [Validators.required,
                      Validators.minLength(1), Validators.maxLength(50)]],
      loginPassword: ['', [Validators.required,
                          forbiddenNameValidator(/bob/i)]],
      isSaved: '',
    });
  }

  get loginId(): AbstractControl { return this.loginForm.get('loginId'); }
  get loginPassword(): AbstractControl { return this.loginForm.get('loginPassword'); }
}
