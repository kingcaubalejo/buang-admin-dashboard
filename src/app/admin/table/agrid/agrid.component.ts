import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AgGridAngular } from 'ag-grid-angular';

import { ColDef, ColGroupDef } from 'ag-grid-community';

@Component({
  selector: 'app-agrid',
  templateUrl: './agrid.component.html',
  styleUrls: ['./agrid.component.scss']
})
export class AgridComponent implements OnInit {

  public gridApi: any;
  public gridColumnApi: any;

  public columnDefs: ColDef[];
  // public autoGroupColumnDef: ColGroupDef;
  public defaultColDef: ColDef;
  public rowSelection;
  public rowGroupPanelShow;
  public pivotPanelShow;
  public rowData: any;

  @ViewChild('agGrid') agGrid!: AgGridAngular;

  constructor(private http: HttpClient) { 
    this.columnDefs = [
      {
        field: 'athlete',
        minWidth: 170,
        checkboxSelection: true,
        headerCheckboxSelection: true,
      },
      { field: 'age' },
      { field: 'country' },
      { field: 'year' },
      { field: 'date' },
      { field: 'sport' },
      { field: 'gold' },
      { field: 'silver' },
      { field: 'bronze' },
      { field: 'total' }
    ],
    // this.autoGroupColumnDef = {
    //   headerName: 'Group',
    //   // valueGetter: (params: any) => {
    //   //   if(params.node.group) {
    //   //     return params.node.key
    //   //   } else {
    //   //     return params.data[params.colDef.field];
    //   //   }
    //   // },
    //   // headerCheckboxSelection: true,
    //   // cellRenderer: 'agGroupCellRenderer',
    //   // cellRendererParams: { checkbox: true/ },
    // };
    this.defaultColDef = {
      editable: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      sortable: true,
      resizable: true,
      filter: true,
      flex: 1,
      minWidth: 100,
    };
    this.rowSelection = 'multiple';
    this.rowGroupPanelShow = 'always';
    this.pivotPanelShow = 'always';
  }

  getSelectedRows(): void {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData.map(node => `${node.make} ${node.model}`).join(', ');

    console.log(`Selected nodes: ${selectedDataStringPresentation}`);
  }

  onServeData(params: any): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .subscribe((data) => {
        this.rowData = data;
      });
  }


  private checkboxSelection = function (params: any) {
    return params.columnApi.getRowGroupColumns().length === 0;
  };
  
  private headerCheckboxSelection = function (params: any) {
    return params.columnApi.getRowGroupColumns().length === 0;
  };


  ngOnInit(): void {
  }

}
