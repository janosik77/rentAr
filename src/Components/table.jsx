/* eslint-disable react/prop-types */
import {
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table';

// eslint-disable-next-line react/prop-types
function Table({
	// eslint-disable-next-line react/prop-types
	data,
	columns,
	columnFilters,
	pagination,
	setData,
	setPagination,
	setColumnFilters,
}) {
	const table = useReactTable({
		data,
		columns,
		state: {
			columnFilters,
			pagination,
			setColumnFilters,
		},
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		columnResizeMode: 'onChange',
		onPaginationChange: setPagination,
		meta: {
			updateData: (rowIndex, columnId, value) => {
				setData((prev) => {
					prev.map((row, index) =>
						index === rowIndex ? { ...prev[rowIndex], [columnId]: value } : row
					);
				});
			},
		},
	});

	return (
		<>
			<div className='col-12 overflow-x-scroll mt-5 table-container'>
				<table className='table table-hover'>
					{table.getHeaderGroups().map((headerGroup) => (
						<thead key={headerGroup.id}>
							<tr>
								{headerGroup.headers.map((header) => (
									<th
										className='sorting-header'
										// onClick={header.column.getToggleSortingHandler()}
										key={header.id}
									>
										{header.column.columnDef.header}

										{/* {header.column.getCanSort()}
										{
											{
												asc: '>',
												desc: '>',
											}[header.column.getIsSorted()]
										} */}
										{/* <div
											onMouseDown={header.getResizeHandler()}
											onTouchStart={header.getResizeHandler()}
											className={`resizer ${
												header.column.getIsResizing() ? 'isResizing' : ''
											}`}
										/> */}
									</th>
								))}
							</tr>
						</thead>
					))}
					<tbody>
						{table.getRowModel().rows.map((row) => (
							<tr key={row.id}>
								{row.getVisibleCells().map((cell) => (
									<td key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
				{Object.keys(table.getRowModel().rowsById).length > 3 && (
					<div className='pagination-row'>
						<p className='pagination-info'>
							Page <span>{table.getState().pagination.pageIndex + 1}</span> of{' '}
							<span>{table.getPageCount()}</span>
						</p>
						<div className='pagination-btns'>
							<div className='pagination-btns__group'>
								<button
									onClick={() => table.previousPage()}
									disabled={!table.getCanPreviousPage()}
								>
									<span>{'<'}</span>
									<span>Previous</span>
								</button>
							</div>
							<div className='pagination-btns__group'>
								<button
									onClick={() => table.nextPage()}
									disabled={!table.getCanNextPage()}
								>
									<span>Next</span>
									<span>{'>'}</span>
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
}

export default Table;
