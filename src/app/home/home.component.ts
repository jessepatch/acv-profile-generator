import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fileToUpload: File = null;
  frequency: number;

  constructor() { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = reader.result.toString().trim();
      const fileTextArray = text.split('\n');
      console.log(fileTextArray);
      const frequencyLine = fileTextArray[12].split(' ');
      this.setFrequency(parseInt(frequencyLine[3], 10));
      console.log('frequency', this.frequency);
     };
    const fileText = reader.readAsText(this.fileToUpload);

    console.log(this.fileToUpload.name);
    console.log(this.fileToUpload.size);
    console.log(this.fileToUpload.type);
  }

  convertAcvArray() {

  }

  setFrequency(frequency: number) {
    this.frequency = frequency;
  }

  parseArrays(frequency: Array<string>) {

  }
}
