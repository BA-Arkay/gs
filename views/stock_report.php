<!-- Page Heading -->
<header class="d-sm-flex align-items-center justify-content-between mb-4">
  <h1 class="h3 mb-0 text-gray-800">
    <i class="fa fa-lg fa-boxes"></i>
    Stock Report
  </h1>
  <div id="list_button">

    <a href="<?= url("stock_report"); ?>" class="d-none d-sm-inline-block btn btn-sm btn-success shadow-sm">
      <i class="fa fa-sync text-white-50"></i> Reload
    </a>
  </div>
</header>

<section id="flashMsg"></section>



<!-- Content Row -->
<section class="row">

  <div class="col-12">

    <div class="card mb-4">
		<div class="d-none card-header">
			Scan & Receive Rolls
		</div>
		<div class="card-body">
			<iframe src="http://192.168.4.224/pfms-reports/reports/stockreport" frameborder="0" height="750" width="100%"></iframe>
		</div>
    </div>

  </div>


</section>

