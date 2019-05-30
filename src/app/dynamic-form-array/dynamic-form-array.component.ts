import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {SampleModel} from '../model/SampleModel';

@Component({
  selector: 'app-dynamic-form-array',
  templateUrl: './dynamic-form-array.component.html',
  styleUrls: ['./dynamic-form-array.component.scss']
})
export class DynamicFormArrayComponent implements OnInit {

  myFormGroup: FormGroup = this.formBuilder.group({
    myList: this.formBuilder.array([this.formBuilder.control('')])
  });

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

  get myList(): any {
    return this.myFormGroup.get('myList') as FormArray;
  }

  addMy() {
    this.myList.push(this.formBuilder.control(''));
  }

  upsert(sampleModel: SampleModel): void {
    for (let my of sampleModel.myList) {
      console.log('Value: ' + my);
    }
  }
}
