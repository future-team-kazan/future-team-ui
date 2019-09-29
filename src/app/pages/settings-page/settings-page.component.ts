import { Component } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';
// import { SmartTableData } from '../../@core/data/smart-table';

@Component({
  selector: 'ngx-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
})
export class SettingsPageComponent {

  factorsIsGood: any;

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

  constructor() {
    // const data = this.service.getData();
    this.source.load([
      {factorName: 'Наличае перенатального центра', factorType: 'Да/Нет', isGood: true},
      {factorName: 'Внедрена телемедицина', factorType: 'Да/Нет', isGood: true},
      {factorName: 'Количество медучреждений', factorType: 'Число', isGood: false},
      {factorName: 'Количество врачей', factorType: 'Число', isGood: true},
      {factorName: 'Расходы на здравоохранение', factorType: 'Число', isGood: false},
      {factorName: 'Население', factorType: 'Число', isGood: true},
      {factorName: 'Транспортная доступность', factorType: 'Число', isGood: true},
      {factorName: 'Коффициент фертильности', factorType: 'Число', isGood: false},
    ]);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  calculateFactors(): void {
    this.source.getAll().then(value => {
      this.factorsIsGood = value.map(item => {
        // return Object.assign(item, {isGood: this.getRandBool()} )
        // return {isGood: this.getRandBool()};
        return item.isGood;
      });

    });
  }

  private getRandBool() {
    return ( (+new Date() % 2) !== 0); // Readable, succint
  }

}
