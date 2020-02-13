import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-servers',
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewSever = false;
  serverCreationStatus = 'No Server was created!';
  serverName = 'Testserver';
  username = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver_2'];
  showParagraph = false;
  showParagraphTimeStemp = [];

  constructor() {
    setTimeout( () => {
      this.allowNewSever = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }

  onDetailsButton() {
    this.showParagraph = !this.showParagraph;
    this.showParagraphTimeStemp.push(Date.now());
  }

  getBackgroundColor(item: number) {
    return this.showParagraphTimeStemp.indexOf(item) > 3 ? 'blue' : 'inherit';
  }

}
