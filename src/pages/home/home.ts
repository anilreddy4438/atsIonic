import { Component,ChangeDetectorRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Tab1Model} from "../../components/tab1/tab1.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab1Form: FormGroup;
    tab1: Tab1Model;
  constructor(public navCtrl: NavController,private formBuilder: FormBuilder,private cd: ChangeDetectorRef) {
    this.tab1 = new Tab1Model()
    console.log(this.tab1 )
    this.tab1Form = this.formBuilder.group({
      firstName: [this.tab1._firstName],
      lastName: [ this.tab1._lastName],
      middleName: [this.tab1._middleName],
      skypeId: [ this.tab1._contact.skypeId || "",[Validators.required]],
      mobileNumber: [ this.tab1._contact.mobileNumber,[Validators.required]],
      homeNumber: [ this.tab1._contact.homeNumber,[Validators.required]],
      email1: [ this.tab1._contact.email1,[Validators.required]],
      email2: [ this.tab1._contact.email2,[Validators.required]],
      jobTitle: [ this.tab1._jobTitle,[Validators.required]],
      totalExperience: [ this.tab1._totalExperience,[Validators.required]],
      workAuthorization: [ this.tab1._workAuthorization,[Validators.required]],
      educationLevel: [ this.tab1._educationLevel,[Validators.required]],
      rateSalary: [ this.tab1._rateSalary,[Validators.required]],
      jobType: [ this.tab1._jobType,[Validators.required]],
      employmentType: [ this.tab1._employmentType,[Validators.required]],
      relocation: [ this.tab1._relocation,[Validators.required]],
      securityClearance: [ this.tab1._securityClearance,[Validators.required]],
      willingtoTravel: [ this.tab1._willingtoTravel,[Validators.required]],
      private: [ this.tab1._private,[Validators.required]],
      owners: [ this.tab1._owners,[Validators.required]],
       source: [ this.tab1._source,[Validators.required]],
      userId: [ this.tab1._userId,[Validators.required]],
      candidateStatus: [ this.tab1._candidateStatus,[Validators.required]],


    });

  }


  onFileChange(event) {
    const reader = new FileReader();
    console.log(event);
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.tab1Form.patchValue({
          file: reader.result
       });

        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }



public changeListener(files: FileList){
  console.log(files);
  if(files && files.length > 0) {
     let file : File = files.item(0);
       let reader: FileReader = new FileReader();
       reader.readAsText(file);
       reader.onload = (e) => {
          let csv: string = reader.result;
          let headers = csv.split("\n");
         let headersArr = headers[0].split(",");
         let dataArr = headers.slice(1,-1);
         let arr =   dataArr.map(data =>{
           return data.split(",")
         });
      let objects  =  arr.map((data) =>{
           let obj ={};
           headersArr.map((head,index) =>{
             obj[head] = data[index]
           })
        return obj
         })
       }
    }
}
}
