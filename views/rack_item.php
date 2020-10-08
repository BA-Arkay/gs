<!-- Page Heading -->
<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">
        <i class="fa fa-barcode"></i><i class="fa fa-search" style="position:relative;left:-15px;top:10px;"></i>
        Scan & Rack Rolls
    </h1>
    <div id="list_button">
        <button class="btn btn-success btn-md" id="refresh">
            <i class="fas fa-sync-alt fa-lg"></i>
        </button>
        <a href="<?= url("views/rack_report"); ?>" class="d-none d-sm-inline-block btn btn-sm btn-success shadow-sm">
            <i class="fas fa-table text-white-50"></i> All Racked Rolls List
        </a>
    </div>
</div>

<section id="flashMsg"></section>

<!-- Content Row -->
<section class="row">

    <div class="col-12">

        <div class="card mb-4">
            <div class="d-none card-header">
                Scan & Rack Rolls
            </div>
            <div class="card-body">


                <form id="inputForm" action="" method="post" class="row">
                    <div class="col-5">
                        <div class="input-group input-group-lg">
                            <input type="text" class="form-control" id="location" name="location" placeholder="Scan Box Barcode ..." autofocus="on" autocomplete="off">
                        </div>
                    </div>

                    <div class="col-5">
                        <div class="input-group input-group-lg">
                            <input type="text" class="form-control" id="item" name="item" placeholder="Scan Roll Barcode ..." autocomplete="off" readonly>
                        </div>
                    </div>

                    <div class="col-2">
                        <div class="input-group input-group-lg">
                            <button type="submit" class="btn btn-lg btn-block btn-outline-success">Submit</button>
                        </div>

                    </div>

                </form>




            </div>
        </div>

    </div>


</section>


<section class="row">
    <div class="col-12">
        <div class="card mb-4">
            <div class="card-header">
                Rolls That Are Racked:
            </div>
            <div class="card-body">

                <table id="just_scanned_items" class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Roll no.</th>
                        <th>Weight</th>
                        <th>Location</th>
                        <th>Buyer Name</th>
                        <th>Order no.</th>
                        <th>Fabric Style</th>
                        <th>Color</th>
                        <th>Remarks</th>
                    </tr>
                    </thead>
                    <tbody>
                    <!--
                      <tr id="dummy_tr">
                      <td colspan="7" class="text-center">
                        please scan to receive rolls
                      </td>
                    </tr> -->
                    <!-- <tr>
                      <td>00012345_6</td>
                      <td class="text-right">15.25</td>
                      <td>R01A1</td>
                      <td>3216</td>
                      <td>WR-646464</td>
                      <td>1525/2019</td>
                      <td>Adidas</td>
                    </tr> -->
                    </tbody>
<!--                    <tfoot>-->
<!--                    <tr class="">-->
<!--                        <th class="text-right">0</th>-->
<!--                        <th class="text-right">00.00</th>-->
<!--                        <th class="text-center">--</th>-->
<!--                        <th class="text-right">0</th>-->
<!--                        <th class="text-center">--</th>-->
<!--                        <th class="text-right"></th>-->
<!--                        <th class="text-right"></th>-->
<!--                    </tr>-->
<!--                    </tfoot>-->
                </table>

                <div id="list_button_mirror" class="text-right"></div>
            </div>
        </div>

    </div>
</section>