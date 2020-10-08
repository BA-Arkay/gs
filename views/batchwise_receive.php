<!-- Page Heading -->
<div class="d-sm-flex align-items-center justify-content-between mb-4">
  <h1 class="h3 mb-0 text-gray-800">
    <i class="fa fa-cubes"></i><i class="fa fa-search" style="position:relative;left:-15px;top:10px;"></i>
    Batchwise Roll Receive
  </h1>
  <div id="list_button">

    <a href="<?= url("views/receive_report"); ?>" class="d-none d-sm-inline-block btn btn-sm btn-success shadow-sm">
      <i class="fas fa-list text-white-50"></i> All Received Rolls List
    </a>
  </div>
</div>

<section id="flashMsg"></section>

<div class="col-6">
	<div class="card mb-3">
		<div class="card-body">
	        <form id="inputForm" action="" method="post" class="">
	          <div class="form-group">
	            <div class="input-group input-group-lg">
	              <input type="text" class="form-control" id="item" placeholder="Scan Roll Barcode ..." autofocus="on" autocomplete="off">
	            </div>
	          </div>

	          <div class="form-group">
	            <div class="input-group">
	              <button type="submit" class="btn btn-sm btn-outline-success">Submit</button>
	            </div>

	          </div>

	        </form>
		</div>
	</div>

	<div class="card">
		<div class="card-body">
			x
		</div>
	</div>
</div>