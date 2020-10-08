<!-- Page Heading -->
<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">
        Batch Wise Stock Report
    </h1>
    <!-- <div id="list_button">
        <a href="<?= url("views/receive_item"); ?>" class="d-none d-sm-inline-block btn btn-sm btn-success shadow-sm">
            <i class="fas fa-table text-white-50"></i> Receive New Roll
        </a>
    </div> -->
</div>


<section id="flashMsg"></section>


<!-- xxx Content Row -->
<section class="row">
    <div class="col-12">
        <div class="card mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-success">
                    <i class="fa fa-asterisk"></i> Batch Wise Stock Report
                </h6>
                <div class="dropdown no-arrow">
                    <a title="Export as" class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-download fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                        <div class="dropdown-header">Export as:</div>
                        <a class="dropdown-item text-success" href="javascript:void(0);"><i class="fa fa-lg fa-file-excel"></i> Export as Excel</a>
                        <a class="dropdown-item text-primary" href="javascript:void(0);"><i class="fa fa-lg fa-file-word"></i> Export as Word</a>
                        <a class="dropdown-item text-danger" href="javascript:void(0);"><i class="fa fa-lg fa-file-pdf"></i> Export as PDF</a>
                        <a class="dropdown-item text-dark" href="javascript:void(0);"><i class="fa fa-lg fa-file-csv"></i> Export as PDF</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">...</a>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div id="grid_filter"></div>
                <table id="jqGrid"></table>
                <div id="jqGridPager"></div>
                <table id="just_scanned_items" class="table table-bordered table-striped">
                    <tfoot>
                        <tr class="">
                            <th class="text-right">BATCH QTY : <strong id="batch_qty">...</strong></th>
                            <th class="text-right">STOCK QTY : <strong id="stock_qty">...</strong></th>
                            <th colspan="6"><b>&lArr; TOTAL</b></th>
                        </tr>
                    </tfoot>
                </table>
                <!-- <button id="export" class="btn btn-outline-success shadow-sm mt-2 btn-md"><i class="fa fa-download fa-lg" aria-hidden="true"></i> Export to Excel</button> -->
            </div>
            <div id="list_button_mirror" class="text-right"></div>
        </div>
    </div>
</section>
<!-- xxx Content Row -->