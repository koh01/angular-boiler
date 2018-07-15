import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';
import { SessionService } from '../../../services/session.service';
import { AbstractPage } from '../abstractPage';
import { ConfirmDialogComponent } from '../../commons/confirm-dialog/confirm-dialog.component';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends AbstractPage implements OnInit {

  baseDate: Moment;
  loadDate: Moment;
  diffDates: number;

  constructor(protected title: Title,
    public sessionService: SessionService,
    private dialog: MatDialog) {
      super(title, 'メイン');
    }

  ngOnInit() {

    // moment.jsを利用した日付の操作
    this.loadDate = moment(new Date());
    // const fromDate = moment('2018-01-01 0:00').add(6, 'months').add(7, 'days').add(5, 'hours');
    this.baseDate = moment([2018, 0, 1]).add({months: 6, days: 7, hours: 5});
    this.diffDates = this.loadDate.diff(this.baseDate, 'days');


  }

  onButtonClick(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      disableClose: true, // trueを設定するとダイアログの外側をクリックで閉じなくなる
      hasBackdrop: true,  // 背景を付ける（モーダル化）
      backdropClass: 'test',
      data: {
        title: '確認',
        message: 'この内容で登録してもよろしいでしょうか？'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        alert('OK');
      } else {
        alert('NG');
      }
    });
  }
}
