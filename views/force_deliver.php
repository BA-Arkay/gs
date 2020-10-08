<!-- Page Heading -->
<div class="d-sm-flex align-items-center justify-content-between mb-4">
	<h1 class="h3 mb-0 text-gray-800">
		Force Deliver
	</h1>
</div>

<section id="flashMsg"></section>


<section class="row">

  <div class="col-md-4 offset-md-4 mb-5 mt-5">
    <div class="input-group input-group-lg">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-lg"><i class="fa fa-pen"></i></span>
      </div>
      <input type="text" id="order_no" class="form-control text-center" placeholder="Order No." autofocus="">
    </div>
  </div>

  <div class="col-12">
    <div class="card mb-4">
      <!-- Card Header - Dropdown -->
      <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 class="m-0 font-weight-bold text-success">
          <i class="fa fa-calendar"></i> All Delivery
        </h6>
      </div>
      <div class="card-body">

          <table id="batches" class="table table-bordered table-striped table-smX">
              <thead class="text-center bg-primary text-white table-striped">
                  <th>Batch no</th>
                  <th>Location</th>
                  <th>#</th>
              </thead>
              <tbody></tbody>
              <tfoot></tfoot>
          </table>
        <div id="list_button_mirror" class="text-right"></div>
      </div>
    </div>

  </div>
</section>

