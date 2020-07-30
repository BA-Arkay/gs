<!-- Page Heading -->
<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">
        Requisition Request List
    </h1>
</div>

<section id="flashMsg"></section>


<section class="row">
    <div class="col-12">
        <div class="card mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-success">
                    <i class="fa fa-asterisk"></i> Requisition Request List
                </h6>
                <div class="dropdown no-arrow">
                    <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                        <div class="dropdown-header">Export as:</div>
                        <a id="export" class="dropdown-item text-success" href="javascript:void(0);"><i class="fa fa-lg fa-file-excel"></i> Export as Excel</a>
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
                <!-- <div id="list_button_mirror" class="text-right"></div> -->
            </div>
        </div>

    </div>
</section>
