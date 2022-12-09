import { Component, OnInit } from '@angular/core';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-accepted-candi',
  templateUrl: './accepted-candi.component.html',
  styleUrls: ['./accepted-candi.component.css']
})
export class AcceptedCandiComponent implements OnInit {

  downloadPdf(pdfUrl: string, pdfName: string) {
    // const pdfUrl = './assets/sample.pdf';
    // const pdfName = 'your_pdf_file';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
