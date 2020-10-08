<!-- Page Heading -->
<div class="d-sm-flex align-items-center justify-content-between mb-4">
	<h1 class="h3 mb-0 text-gray-800">
		<i class="fa fa-sync-alt"></i> Pending Deliveries
	</h1>
</div>

<section id="flashMsg"></section>


<!-- xxx Content Row -->
<section class="row">
	
<div class="col-12">

<div class="card mb-4">
      <!-- Card Header - Dropdown -->
      <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 class="m-0 font-weight-bold text-success">
          <i class="fa fa-asterisk"></i> All pending deliveries list
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
          <thead class="text-center">
            <tr>
              <th rowspan="2">Ref. no.</th>
              <th colspan="2">Scanned Rolls</th>
              <th colspan="1">Batch Info.</th>
              <th rowspan="2">Timestamp</th>
              <th rowspan="2">#</th>
            </tr>
            <tr>
                <th rowspan="">Num. Rolls</th>
                <th rowspan="">Qty.</th>
                <th rowspan="">Batch no.</th>
                <!-- <th rowspan="">Num. Rolls</th> -->
                <!-- <th rowspan="">Qty.</th> -->
            </tr>
          </thead>
          <tbody>
           <!-- <tr>
               <td>135454313</td>
               <td>10</td>
               <td>120</td>
               <td>1234</td>
               <td>25</td>
               <td>500</td>
               <td>2019-05-05 10:15:25</td>
               <td class="pending_delivery_detail text-center">
                    <button title="Details" data-toggle="tooltip" class="btn btn-link" data-all="{}">
                       <i class="fa fa-edit"></i>
                    </button>
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

        <div id="list_button_mirror" class="text-right"></div>
      </div>
    </div>

</div>

</section><!-- xxx Content Row -->


<div id="pending_delivery_detail_modal" class="modal" tabindex="" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Ref. no.: <code id="pending_delivery_detail_modal_ref">12345678</code></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" data-roll_no="">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <table id="">
            <tr>
                <th>Batch No: </th>
                <th><code id="pending_delivery_detail_modal_batch_no">1234</code></th>
                <!-- <td>|</td>
                <th>Num. Rolls: </th>
                <th><code>1234</code></th>
                <td>|</td>
                <th>Qty.: </th>
                <th><code>123.4</code></th> -->
            </tr>
        </table>
        <br>
        <table id="pending_delivery_detail_modal_roll_info_table" class="table">
            <thead>
                <tr>
                    <th>Roll no.</th>
                    <th>Weight</th>
                    <th>Batch</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody>
                <!-- <tr>
                    <td>0123456_1</td>
                    <td>50.25</td>
                    <td>2575</td>
                    <td>
                        <button class="btn btn-link text-danger">
                            <i class="fa fa-times"></i>
                        </button>
                    </td>
                </tr> -->
            </tbody>
            <tfoot>
                <tr>
                    <th id="pending_delivery_detail_modal_num_of_items">10</th>
                    <th id="pending_delivery_detail_modal_tatal_qty">1025</th>
                    <th colspan="2">&larr; Total</th>
                </tr>
            </tfoot>
        </table>
      </div>
      <div class="modal-footer">
        <!-- <button type="button" class="btn btn-dark" data-dismiss="modal">Close</button> -->
        <button type="button" class="btn btn-danger">
            <i class="fa fa-times"></i> Remove
        </button>
        <!-- <button type="button" class="btn btn-success">
            <i class="fa fa-sync-alt"></i> Reload
        </button> -->
      </div>
    </div>
  </div>
</div>