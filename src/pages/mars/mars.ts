import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Form } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
/**
 * Generated class for the MarsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mars',
  templateUrl: 'mars.html',
})
export class MarsPage {
public form: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarsPage');
  }


  ngOnInit(){
    this.form = this.fb.group({
      length: ['', Validators.required],
    })
  }
  
    public submissions = [
  
      
    ]
  
    onSubmit() {
      var value = parseFloat(this.form.value.length);
      var squareroot = value/3.7;
      var squareroot1 =  Math.sqrt(squareroot);
      var newvalue = 6.28318 * squareroot1
      this.submissions.push(newvalue);
  
      console.log(newvalue);
  
    }
}
