import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  messageEdu: string = "Grad of MAX Techicnal Training";
  college: string = "UD School of Engineering"
  
  constructor() { }

  ngOnInit(): void {
  }

}
