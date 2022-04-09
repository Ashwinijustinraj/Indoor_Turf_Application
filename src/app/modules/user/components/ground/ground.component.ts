import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { grounds } from 'src/app/shared/grounds';

@Component({
  selector: 'app-ground',
  templateUrl: './ground.component.html',
 
  styleUrls: ['./ground.component.scss']
})
export class GroundComponent implements OnInit {
  grounds=grounds;
  
  constructor(private modalService: NgbModal) { }
  
  ngOnInit(): void {
  }

}
