import { Component, OnInit } from '@angular/core';

import * as Datastore from '../../../../node_modules/nedb/browser-version/out/nedb';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.ds();
  }


  async ds() {
    console.log('hi')
    let db = new Datastore('./db.db');
    console.log(db)
    db.loadDatabase();
    db.insert({
      name: 'shawn'
    });

    db.find({}, (err, docs) => {
      console.log(docs)
    })
    
  }
}
