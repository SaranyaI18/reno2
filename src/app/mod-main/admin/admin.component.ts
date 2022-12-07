import { Component, OnInit } from '@angular/core';

declare var require: any
const FileSaver = require('file-saver');

interface candidateapplications{
    src: String
    name: String
    email: string
    mobile: number
    experience: number
    resume: string
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  downloadPdf(pdfUrl: string, pdfName: string) {
    // const pdfUrl = './assets/sample.pdf';
    // const pdfName = 'your_pdf_file';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  public candidateapplication=[
    {
      src: "../../../assets/images/SARANYA.jpeg",
      name: "Saranya",
      email: "saranya.ilavarasu@gmail.com",
      mobile: "8923493243",
      experience: "2",
      resume: "saranya_resume.pdf"
    },
    {
      src: "../../../assets/images/SARANYA.jpeg",
      name: "Saranya",
      email: "saranya.ilavarasu@gmail.com",
      mobile: "8923493243",
      experience: "2",
      resume: "saranya_resume.pdf"
    },
    {
      src: "../../../assets/images/SARANYA.jpeg",
      name: "Saranya",
      email: "saranya.ilavarasu@gmail.com",
      mobile: "8923493243",
      experience: "2",
      resume: "saranya_resume.pdf"
    },
    {
      src: "../../../assets/images/SARANYA.jpeg",
      name: "Saranya",
      email: "saranya.ilavarasu@gmail.com",
      mobile: "8923493243",
      experience: "2",
      resume: "saranya_resume.pdf"
    },
    {
      src: "../../../assets/images/SARANYA.jpeg",
      name: "Saranya",
      email: "saranya.ilavarasu@gmail.com",
      mobile: "8923493243",
      experience: "2",
      resume: "saranya_resume.pdf"
    },
    {
      src: "../../../assets/images/SARANYA.jpeg",
      name: "Saranya",
      email: "saranya.ilavarasu@gmail.com",
      mobile: "8923493243",
      experience: "2",
      resume: "saranya_resume.pdf"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
