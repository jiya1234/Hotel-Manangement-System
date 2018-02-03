import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { $ } from 'protractor';
declare const $ : any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    closeResult: string;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    // (function($) {
    //     "use strict";
    
    //     // manual carousel controls
    //     $('.next').click(function(){ $('.carousel').carousel('next');return false; });
    //     $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
        
    // })(jQuery);
    $(document).ready(function () {
      
          $('.btn-vertical-slider').on('click', function () {
              
              if ($(this).attr('data-slide') == 'next') {
                  $('#myCarousel').carousel('next');
              }
              if ($(this).attr('data-slide') == 'prev') {
                  $('#myCarousel').carousel('prev')
              }
      
          });
      });
  }
}
