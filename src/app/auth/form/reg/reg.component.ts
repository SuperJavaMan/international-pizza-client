import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {RegForm} from '../../model/reg-form';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  form: FormGroup;
  infoMessage;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  reg(data) {
    const regForm: RegForm = new RegForm(data.username, data.password);
    this.authService.reg(regForm).subscribe(response => {
        this.infoMessage = 'You sigh up successfully! Please login!';
      },
      error => this.infoMessage = error.error.message);
  }
}
