import { DatePipe } from '@angular/common';
import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef, } from '@angular/core';

import { SortEvent } from 'primeng/api';
import { Table, TableColResizeEvent, TableRowSelectEvent, TableRowUnSelectEvent, } from 'primeng/table';

@Component({
  selector: 'lib-ptable',
  templateUrl: './ptable.component.html',
  styleUrls: ['./ptable.component.scss'],
  providers: [DatePipe],
})
export class PtableComponent implements OnInit, OnDestroy {
  @ViewChild('ptable')
  public ptable!: Table;

  private readonly minWidth: string = '45px';
  private get defaultSortValue(): { order: number; columnDef: string } {
    return { order: 0, columnDef: '' };
  }

  private readonly pScrollHeight = {
    more: '55vh',
    less: '281px',
  };

  public ptableConfig: IPtableConfig = {
    id: 'p-table',
    scrollable: true,
    scrollHeight: this.pScrollHeight.more,
    customSort: true,
    sort: this.defaultSortValue,
    sortFunction: (event: SortEvent) => { },
    initializeTable: () => { },
    resetTable: () => {
      this.ptableConfig.selectedRows = [];
      this.ptableConfig.sort = this.defaultSortValue;
    },
    onRowSelect: (event: TableRowSelectEvent) => { },
    onRowUnselect: (event: TableRowUnSelectEvent) => { },
    onColResize: (event: TableColResizeEvent) => {
      this.onColResize(event);
    },
    virtualScroll: true,
    virtualScrollItemSize: 49,
    selectionMode: 'multiple',
    selectedRows: [],
    metaKeySelection: true,
    dataKey: 'id',
    resizableColumns: true,
    pResizableColumnDisabled: false,
    columnResizeMode: 'expand',
    rowGroupMode: 'rowspan',
    groupRowsBy: 'id',
  };

  public cols: IPtableColumn[] = [
    {
      columnDef: 'name',
      header: `Name`,
      value: (rowData): string => `${rowData.name ?? ''}`,
      width: {
        min: this.minWidth,
        max: '200px',
      },
      id: (colData: IPtableColumn, index: number | string): string =>
        `id-${colData.columnDef ?? ''}-${index}`,
      type: 'text',
      isRowgroup: true,
      show: true,
    },
    {
      columnDef: 'id',
      header: `ID`,
      value: (rowData): string => `${rowData.id ?? ''}`,
      width: {
        min: this.minWidth,
        max: '150px',
      },
      id: (colData: IPtableColumn, index: number | string): string =>
        `id-${colData.columnDef ?? ''}-${index}`,
      type: 'text',
      isRowgroup: false,
      show: true,
    },
    {
      columnDef: 'birthDate',
      header: `Date of Birth`,
      value: (rowData): string => `${this.datepipe.transform(rowData.birthDate) ?? ''}`,
      width: {
        min: this.minWidth,
        max: '150px',
      },
      id: (colData: IPtableColumn, index: number | string): string =>
        `id-${colData.columnDef ?? ''}-${index}`,
      type: 'text',
      isRowgroup: false,
      show: true,
    },
    {
      columnDef: 'pk',
      header: `PK`,
      value: (rowData): string => `${rowData.pk ?? ''}`,
      width: {
        min: this.minWidth,
        max: '250px',
      },
      id: (colData: IPtableColumn, index: number | string): string =>
        `id-${colData.columnDef ?? ''}-${index}`,
      type: 'text',
      isRowgroup: false,
      show: true,
    },
  ];

  public values: { id: string; birthDate: string; pk: number; name: string; }[] = 
  [
    {
      id: 'Z004RJT101',
      birthDate: '20020310T000000',
      pk: 101,
      name: 'Superman',
    },
    {
      id: 'Z004RJT102',
      birthDate: '19930328T000000',
      pk: 102,
      name: 'Thor',
    },
    {
      id: 'Z004RJT102',
      birthDate: '19930328T000000',
      pk: 103,
      name: 'Thor',
    },
    {
      id: 'Z004RJT104',
      birthDate: '20080526T000000',
      pk: 104,
      name: 'Wolverine',
    },
    {
      id: 'Z004RJT104',
      birthDate: '20080526T000000',
      pk: 105,
      name: 'Wolverine',
    },
    {
      id: 'Z004RJT104',
      birthDate: '20080526T000000',
      pk: 106,
      name: 'Wolverine',
    },
    {
      id: 'Z004RJT107',
      birthDate: '19611103T000000',
      pk: 107,
      name: 'Spider-Man',
    },
    {
      id: 'Z004RJT107',
      birthDate: '19611103T000000',
      pk: 108,
      name: 'Spider-Man',
    },
    {
      id: 'Z004RJT107',
      birthDate: '19611103T000000',
      pk: 109,
      name: 'Spider-Man',
    },
    {
      id: 'Z004RJT107',
      birthDate: '19611103T000000',
      pk: 110,
      name: 'Spider-Man',
    },
    {
      id: 'Z004RJT107',
      birthDate: '19611103T000000',
      pk: 111,
      name: 'Spider-Man',
    },
    {
      id: 'Z004RJT107',
      birthDate: '19611103T000000',
      pk: 112,
      name: 'Spider-Man',
    },
    {
      id: 'Z004RJT113',
      birthDate: '19310101T000000',
      pk: 113,
      name: 'Iron Fist',
    },
    {
      id: 'Z004RJT113',
      birthDate: '19310101T000000',
      pk: 114,
      name: 'Iron Fist',
    },
    {
      id: 'Z004RJT115',
      birthDate: '19681114T000000',
      pk: 115,
      name: 'Hellboy',
    },
    {
      id: 'Z004RJT116',
      birthDate: '19630408T000000',
      pk: 116,
      name: 'Doctor Strange',
    },
    {
      id: 'Z004RJT116',
      birthDate: '19630408T000000',
      pk: 117,
      name: 'Doctor Strange',
    },
    {
      id: 'Z004RJT118',
      birthDate: '19310101T000000',
      pk: 118,
      name: 'The Defenders',
    },
    {
      id: 'Z004RJT119',
      birthDate: '19780101T000000',
      pk: 119,
      name: 'Black Panther',
    },
    {
      id: 'Z004RJT120',
      birthDate: '18910101T000000',
      pk: 120,
      name: 'Batman',
    },
    {
      id: 'Z004RJT121',
      birthDate: '19410101T000000',
      pk: 121,
      name: 'X-Men',
    },
    {
      id: 'Z004RJT122',
      birthDate: '20050908T000000',
      pk: 122,
      name: 'Wonder Woman',
    },
    {
      id: 'Z004RJT122',
      birthDate: '20050908T000000',
      pk: 123,
      name: 'Wonder Woman',
    },
    {
      id: 'Z004RJT122',
      birthDate: '20050908T000000',
      pk: 124,
      name: 'Wonder Woman',
    },
    {
      id: 'Z004RJT125',
      birthDate: '20060425T000000',
      pk: 125,
      name: 'Nagraj',
    },
    {
      id: 'Z004RJT126',
      birthDate: '18060425T000000',
      pk: 126,
      name: 'Fantastic Four',
    },
    {
      id: 'Z004RJT127',
      birthDate: '19630408T000000',
      pk: 127,
      name: 'Iron Man',
    },
    {
      id: 'Z004RJT127',
      birthDate: '19630408T000000',
      pk: 128,
      name: 'Iron Man',
    },
    {
      id: 'Z004RJT127',
      birthDate: '19630408T000000',
      pk: 129,
      name: 'Iron Man',
    },
    {
      id: 'Z004RJT130',
      birthDate: '19611103T000000',
      pk: 130,
      name: 'Hulk',
    },
  ];

  private readonly _cols: IPtableColumn[] = JSON.parse(JSON.stringify([...this.cols]));

  constructor(private _changeDetectorRef: ChangeDetectorRef, private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.ptableConfig.initializeTable();
  }

  ngOnDestroy() {
    this.ptableConfig.resetTable();
  }

  public tableReset(): void {
    console.log('called tableReset()');

    this.ptable.destroyStyleElement();
  }

  public addRemoveColumn(col: IPtableColumn): void {
    console.log('called addRemoveColumn()');

    col.show = !col.show;

    if (col.show === false) {
      col.width.max = this._cols.find((_col: IPtableColumn): boolean => _col.columnDef === col.columnDef)?.width.max;
    }

    this.tableReset();
  }

  private onColResize(tableColResizeEvent: TableColResizeEvent): void {
    console.log('#resize value', tableColResizeEvent.delta);
    console.log('resized column is: ', tableColResizeEvent.element.id);

    const columnIndex: number = this.ptable.columns.filter((col: IPtableColumn): boolean => col.show)
      .findIndex((_col: IPtableColumn): boolean => _col.columnDef === tableColResizeEvent.element.id?.split('-')[1]);
    if (columnIndex != null && columnIndex != -1) {
      const initialColWidth: number = this.ptable['_initialColWidths'][columnIndex];

      const column: IPtableColumn = this.cols.filter((col: IPtableColumn): boolean => col.show)[columnIndex];
      column.width.max = this.getColResizedWidth(initialColWidth, tableColResizeEvent);
    } else {
      console.error('Invalid columnIndex: ' + columnIndex);
    }

    this._changeDetectorRef.detectChanges();
  }

  private getColResizedWidth(initialColWidth: number, tableColResizeEvent: TableColResizeEvent): string {
    let columnWidth = '';

    const colResizedWidth: number = initialColWidth + tableColResizeEvent.delta;
    if (colResizedWidth < +this.minWidth.split('px')[0]) {
      console.error('-ve value.');
      columnWidth = this.minWidth;
    } else {
      columnWidth = colResizedWidth + 'px';
    }

    return columnWidth;
  }

}

export interface IPtableColumn {
  columnDef: string;
  header: string;
  value(rowData: any): string;
  width: {
    min: string;
    max: string;
  };
  id(colData: IPtableColumn, index: number | string): string;
  type: 'text' | 'badge';
  isRowgroup: boolean;
  show: boolean;
}

export interface IPtableConfig {
  id: string;
  /**
   * Enables scrollable tables.
   */
  scrollable: boolean | undefined;

  /**
   * Height of the scroll viewport in fixed pixels or the "flex" keyword for a dynamic size.
   */
  scrollHeight: string | undefined;

  /**
   * A function to implement custom sorting, refer to sorting section for details.
   */
  sortFunction(event: SortEvent): void;

  /**
   * Callback to invoke when a row is selected.
   */
  onRowSelect(event: TableRowSelectEvent): void;

  /**
   * Callback to invoke when a row is unselected.
   */
  onRowUnselect(event: TableRowUnSelectEvent): void;

  /**
   * Callback to invoke when a column is resized.
   */
  onColResize(event: TableColResizeEvent): void;

  /**
   * Whether to use the default sorting or a custom one using sortFunction.
   */
  customSort: boolean | undefined;

  /**
   * Whether the data should be loaded on demand during scroll.
   */
  virtualScroll: boolean | undefined;

  /**
   * Height of a row to use in calculations of virtual scrolling.
   */
  virtualScrollItemSize: number | undefined;

  /**
   * Specifies the selection mode, valid values are "single" and "multiple".
   */
  selectionMode: 'single' | 'multiple' | undefined | null;

  /**
   * Selected row in single mode or an array of values in multiple mode.
   */
  selectedRows: any[];

  /**
   * Defines whether metaKey should be considered for the selection. On touch enabled devices, metaKeySelection is turned off automatically.
   */
  metaKeySelection: boolean | undefined;

  /**
   * A property to uniquely identify a record in data.
   */
  dataKey: string | undefined;

  sort: { order: number; columnDef: string };

  /**
   * When enabled, columns can be resized using drag and drop.
   */
  resizableColumns: boolean | undefined;

  /**
   * Defines whether the overall table width should change on column resize, valid values are "fit" and "expand".
   */
  columnResizeMode: 'fit' | 'expand';

  pResizableColumnDisabled: boolean | undefined;

  /**
   * Type of the row grouping, valid values are "subheader" and "rowspan".
   */
  rowGroupMode: 'subheader' | 'rowspan' | undefined;

  /**
   * Field name to use in row grouping.
   */
  groupRowsBy: string;

  initializeTable(): void;

  resetTable(): void;
}
