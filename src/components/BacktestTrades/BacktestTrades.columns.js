import React from 'react'
import prepareAmount from '../../util/precision/prepare_amount'
import preparePrice from '../../util/precision/prepare_price'
import FormatPL from '../../ui/Format/pl'

export default [{
  width: 200,
  label: 'Created',
  dataKey: 'trade.mts',
  cellRenderer: ({ rowData = {} }) => (
    new Date(rowData.trade.mts).toLocaleString()
  )
}, {
  width: 80,
  label: 'Symbol',
  dataKey: 'trade.symbol',
  cellRenderer: ({ rowData = {} }) => rowData.trade.symbol,
}, {
  width: 100,
  label: 'Price',
  dataKey: 'trade.price',
  className: 'table__cell-alignright',
  headerClassName: 'table__cell-alignright',
  cellRenderer: ({ rowData = {} }) => preparePrice(rowData.trade.price),
}, {
  width: 100,
  label: 'Amount',
  dataKey: 'trade.amount',
  cellRenderer: ({ rowData = {} }) => prepareAmount(rowData.trade.amount),
}, {
  width: 100,
  label: 'Fee',
  dataKey: 'trade.fee',
  cellRenderer: ({ rowData = {} }) => prepareAmount(rowData.trade.fee),
}, {
  width: 200,
  label: 'P/L',
  dataKey: 'trade.pl',
  className: 'table__cell-alignright',
  headerClassName: 'table__cell-alignright',
  cellRenderer: ({ rowData = {} }) => (
    <FormatPL v={rowData.trade.pl}>
      {prepareAmount(rowData.trade.pl)}
    </FormatPL>
  ),
}, {
  width: 200,
  flexGrow: 1,
  label: 'Label',
  dataKey: 'trade.label',
  cellRenderer: ({ rowData = {} }) => rowData.trade.label || '',
}]