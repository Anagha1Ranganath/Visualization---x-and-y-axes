import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[ChartComponent]
})

export class AppComponent {

  user = this.fb.group ({

    vehId: ['', Validators.required],
    // node_Id: ['', Validators.required],
    // node_X: ['', Validators.required],
    // node_Y: ['', Validators.required]

  });

  constructor(private fb: FormBuilder, private appService: AppService) {}

  app() {
    this.appService.plot(this.user.value)
    .subscribe( res => {
      console.log('Res: ', res);
    });
  }

}


