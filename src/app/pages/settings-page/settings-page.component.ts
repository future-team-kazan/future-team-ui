import { Component } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';
// import { SmartTableData } from '../../@core/data/smart-table';

@Component({
  selector: 'ngx-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
})
export class SettingsPageComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      factorName: {
        title: 'Название показателя',
        type: 'string',
      },
      factorType: {
        title: 'Тип показателя',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  /*constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }*/

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}