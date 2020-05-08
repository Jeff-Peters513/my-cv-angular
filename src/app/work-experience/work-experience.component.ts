import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  messageWork:string = "Full Time Student"
  // a single work experience
  experience1: string = "MAX Techincal Training";
  

  constructor() { }

  ngOnInit(): void {
  }

}
