import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CoadmissaoPage } from '../coadmissao/coadmissao';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

    openColAdm(){
      this.navCtrl.push(CoadmissaoPage, {}, {animate: true} );  
      console.log("I'm alive!");  
    }
  }

