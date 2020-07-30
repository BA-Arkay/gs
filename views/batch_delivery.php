<!-- Page Heading -->
<div class="d-sm-flex align-items-center justify-content-between mb-4">
  <h1 class="h3 mb-0 text-gray-800">
    <i class="fa fa-cube"></i> Batch Delivery
  </h1>
  <a href="<?= url("views/pending_deliveries"); ?>" class="d-none d-sm-inline-block btn btn-sm btn-outline-warning shadow-sm">
    <i class="fa fa-sync-alt "></i> Pending Deliveries <span class="badge badge-warning">5</span>
  </a>
</div>

<section id="flashMsg"></section>



<!-- Content Row -->
<section class="row">

  <div class="col-12">

    <div class="card shadow mb-4">
      <!-- Card Header - Accordion -->
      <a href="#collapseCardExample" class="d-block card-header py-3 " data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCardExample">
        <h6 class="m-0 font-weight-bold text-success">
          <i class="fa fa-plus"></i> New Delivery
        </h6>
      </a>
      <!-- Card Content - Collapse -->
      <div class="collapse show" id="collapseCardExample" style="">
        <div class="card-body">


          <form id="batch_delivery" method="post" class="row">

            <div class="col-4">
              <div class="form-group">
                <label class="d-block" for="refference_no">
                  Referrence no.
                  <button id="autoGenRefID" title="Auto Generate (Numeric)" type="button" data-toggle="tooltip" class="btn btn-md btn-link float-right"><i class="fa fa-hashtag"></i></button>
                  <button id="autoGenRefTimestamp" title="Auto Generate (Timestamp)" type="button" data-toggle="tooltip" class="btn btn-md btn-link float-right"><i class="fa fa-clock"></i></button>
                </label>
                <div class="input-group input-group-lg">
                  <input name="ref_no" id="ref_no" type="text" class="form-control" placeholder="reference no." autocomplete="off" autofocus="">
                </div>
              </div>
            </div>

            <div class="col-2">
              <div class="form-group">
                <label for="roll_no">Batch no.</label>
                <div class="input-group input-group-lg">
                  <input id="batch_no" type="text" class="form-control" placeholder="batch no." readonly style="font-weight:900;">
                </div>
              </div>
            </div>

            <div class="col-4">
              <div class="form-group">
                <label for="roll_no">Roll number</label>
                <div class="input-group input-group-lg">
                  <input id="roll_no" type="text" class="form-control" placeholder="Scann roll" readonly>
                </div>
              </div>
            </div>

            <div class="col-2">
              <div class="form-group">
                <label for="">&nbsp;</label>
                <div class="input-group input-group-lg">
                  <button type="submit" id="submitBtn" class="btn btn-block btn-lg btn-outline-success">Submit</button>
                </div>
              </div>

            </div>

          </form>

        </div>
      </div>
    </div>



  </div>


</section>


<section class="row">
  <div class="col-12">



    <div class="card mb-4">
      <!-- Card Header - Dropdown -->
      <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 class="m-0 font-weight-bold text-success">
          <i class="fa fa-barcode"></i><i class="fa fa-search" style="position:relative;left:-10px;top:7px;"></i>
          Scanned rolls' list
        </h6>
        <div class="dropdown no-arrow">
          <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
          </a>
          <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
            <div class="dropdown-header">Dropdown Header:</div>
            <a class="dropdown-item" href="#">All Stores</a>
            <a class="dropdown-item" href="#">Empty</a>
            <a class="dropdown-item" href="#">Overloaded</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Trashed</a>
          </div>
        </div>
      </div>
      <div class="card-body">

        <table id="delivered_roll_table" class="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Roll no.</th>
              <th>Weight</th>
              <th>Location</th>
              <th>Order no</th>
              <th>Buyer Name</th>
            </tr>
          </thead>
          <tbody>
            <!--
            <tr id="dummy_tr">
              <td colspan="7" class="text-center">
                please scan to receive rolls
              </td>
            </tr> -->


          </tbody>
          <!--          <tfoot>-->
          <!--            <tr class="">-->
          <!--              <th>1</th>-->
          <!--              <th></th>-->
          <!--              <th>21</th>-->
          <!--              <th>00.00</th>-->
          <!--              <th>#</th>-->
          <!--            </tr>-->
          <!--          </tfoot>-->  
        </table>

        <div class="">
          <button id="confirmDelivery" class="btn btn-outline-success btn-lg" disabled> 
            <i class="fa fa-check"></i> Confirm Delivery
          </button>
        </div>

        <div id="list_button_mirror" class="text-right"></div>
      </div>
    </div>

  </div>
</section>

<!--  -->
<div id="mydiv" class="d-none">
  <div id="mydivheader" title="Drag to move..." data-toggle="tooltip">
    <i class="fa fa-arrows-alt text-muted">&nbsp;</i> <b>Scanning vs Batch Calc.</b>
  </div>
  <div class="container-fluid">
    <table class="table table-sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Qty.</th>
          <th>Num.</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-primary">
          <th>Batch</th>
          <th class="text-right"><span id="loadBatchQty">00.00</span></th>
          <th class="text-right"><span id="loadBatchRollNum">00</span></th>
        </tr>
        <tr class="text-success">
          <th>Scanned</th>
          <th class="text-right"><span id="loadScanQty">00.00</span></th>
          <th class="text-right"><span id="loadScanRollNum">00</span></th>
        </tr>
      </tbody>
      <tfoot>
        <tr class="text-danger">
          <th>Remaining</th>
          <th class="text-right"><span id="calcRemainingQty">00.00</span></th>
          <th class="text-right"><span id="calcRemainingRollNum">00</span></th>
        </tr>
      </tfoot>
    </table>
  </div>
</div>