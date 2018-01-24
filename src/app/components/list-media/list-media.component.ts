import {Component, OnInit} from '@angular/core';
import {MediaService} from '../../services/media.service';
import {DigitransitService} from '../../services/digitransit.service';

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.css'],
})
export class ListMediaComponent implements OnInit {

  printThis: string;
  mediaArray: any;
  stopsArray: any;
  input: string;

  constructor(public mediaService: MediaService, private digitransitService: DigitransitService) {
  }

  ngOnInit() {
    this.printThis = this.mediaService.test;
    this.mediaService.getAllMedia().subscribe(data => {
      console.log(data);
      this.mediaArray = data;
    });


    // console.log(this.digitransitService.getRoutes('Gransinmäki'));
  }

  thumbNailer(filename: string): string {
    const i = filename.indexOf('.');
    let temp = filename.slice(0, i);
    return temp + '-tn320.png';
  }

  getStop() {
    this.digitransitService.getRoutes(this.input).subscribe(response => {
      console.log(response['data'].stops);
      this.stopsArray = response['data'].stops;
    });
  }
}
