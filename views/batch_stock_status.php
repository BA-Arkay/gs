<!-- Page Heading -->
<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">
        Batch-Stock Status
    </h1>
</div>

<section id="flashMsg"></section>


<section class="row">
    <div class="col-12">
        <div class="card mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <?php 
                    $___x = ['', 'asterisk', 'Batch: All'];
                    if(isset($_GET['status'])):
                        if($_GET['status']=='empty')
                            $___x = ['info', 'exclamation-circle', 'Batch: Booked (No Stock / Empty)'];
                        elseif($_GET['status']=='running')
                            $___x = ['warning', 'sync-alt', 'Batch: Stock Running'];
                        elseif($_GET['status']=='ready')
                            $___x = ['success', 'check', 'Batch: Ready'];
                        elseif($_GET['status']=='delivered')
                            $___x = ['primary', 'truck', 'Batch: Delivered'];
                    endif;
                ?>
                <h6 class="m-0 font-weight-bold text-<?=$___x[0];?>">
                    <i class="fa fa-<?=$___x[1];?>"></i> <?=$___x[2];?>
                </h6>
                <div class="dropdown no-arrow">
                    <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                        <div class="dropdown-header">Go to:</div>
                        <a class="dropdown-item text-info" href="?status=empty"><i class="fa fa-exclamation-circle"></i> Booking (No stock)</a>
                        <a class="dropdown-item text-warning" href="?status=running"><i class="fa fa-sync-alt"></i> Stock Running</a>
                        <a class="dropdown-item text-success" href="?status=ready"><i class="fa fa-check"></i> Ready</a>
                        <a class="dropdown-item text-primary" href="?status=delivered"><i class="fa fa-truck"></i> Delivered</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="?status=*"><i class="fa fa-asterisk"></i> All</a>
                    </div>
                </div>
            </div>
            <div class="card-body" style="overflow-x:auto">
                <table id="show_data" class="table table-bordered table-striped">
                    <thead class="text-center">
                        <tr>
                            <th colspan="9">Batch status</th>
                            <th colspan="5">Stock status</th>
                            <th rowspan="2">Status</th>
                        </tr>
                        <tr>
                            <td>Booking Date</td>
                            <th>Batch no</th>
                            <th>Weight</th>
                            <th>Num. Rolls</th>
                            <th>Color</th>
                            <th>Size</th>
                            <th>Style no.</th>
                            <th>Order no.</th>
                            <th>Buyer Name</th>
                            <td>Stock Date</td>
                            <th>Location</th>
                            <th>Stock Rolls</th>
                            <th>Weight</th>
                            <th>Num. Roll</th>
                        </tr>
                    </thead>
                    <tbody>


                    </tbody>
                    <tfoot>
                        <!-- <tr class="">
                            <th>1</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>21</th>
                            <th>00.00</th>
                            <th></th>
                            <th>#</th>
                        </tr> -->
                    </tfoot>
                </table>
                <div id="list_button_mirror" class="text-right"></div>
            </div>
        </div>

    </div>
</section>