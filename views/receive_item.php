<!-- Page Heading -->
<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">
        <i class="fa fa-barcode"></i><i class="fa fa-search" style="position:relative;left:-15px;top:10px;"></i>
        Scan & Receive Rolls
    </h1>
    <div id="list_button">
        <a href="<?= url("views/receive_report"); ?>" class="d-none d-sm-inline-block btn btn-sm btn-success shadow-sm">
            <i class="fas fa-list text-white-50"></i> All Received Rolls List
        </a>
    </div>
</div>

<section id="flashMsg"></section>


<!-- Content Row -->
<section class="row">

    <div class="col-12">

        <div class="card mb-4">
            <div class="d-none card-header">
                Scan & Receive Rolls
            </div>
            <div class="card-body">


                <form id="inputForm" action="" method="post" class="row">

                    <div class="col-10">
                        <div class="input-group input-group-lg">
                            <input type="text" class="form-control" id="item" placeholder="Scan Roll Barcode..."
                                autofocus="on" autocomplete="off">
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
                Rolls That Are Received:
            </div>
            <div class="card-body">

                <table id="just_scanned_items" class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Roll no.</th>
                        <th>Weight</th>
                        <!--              <th>Location</th>-->
                        <th>Buyer Name</th>
                        <th>Order no.</th>
                        <th>Fabric Style</th>
                        <th>Color</th>
                        <th>Status</th>
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
                    <tfoot>
                    <tr class="">
                        <th id="sum_total_rows" class="text-right">0</th>
                        <th id="sum_total_weight" class="text-right">00.00</th>
                        <th colspan="6"><b>&lArr; TOTAL</b></th>
                    </tr>
                    </tfoot>
                </table>

                <div id="list_button_mirror" class="text-right"></div>
            </div>
        </div>

    </div>

    <div class="col-12">
        <div class="card mb-4">
            <div class="card-header">
                Locations:
            </div>
            <div id="locationsBody" class="card-body col-md-12 d-flex flex-wrap">
            </div>
        </div>
    </div>
</section>

