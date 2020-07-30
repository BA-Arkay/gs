<!-- Page Heading -->
<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">
        Racked Rolls
    </h1>
    <div id="list_button">
        <a href="<?= url("views/receive_item"); ?>" class="d-none d-sm-inline-block btn btn-sm btn-success shadow-sm">
            <i class="fas fa-table text-white-50"></i> Rack New Roll
        </a>
    </div>
</div>

<section id="flashMsg"></section>


<!-- xxx Content Row -->
<section class="row">
    <div class="col-lg-12">

        <div id="grid_filter"></div>
        <table id="jqGrid"></table>
        <div id="jqGridPager"></div>
        <button id="export" class="btn btn-success btn-md shadow-sm mt-2"><i class="fa fa-download fa-lg" aria-hidden="true"></i> Export to Excel</button>
    </div>

</section><!-- xxx Content Row -->