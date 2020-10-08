
    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-success sidebar sidebar-dark accordion" id="accordionSidebar">


      <div class="container mt-3 text-center">
        <img src="http://202.4.110.173/epyllion/files/setting/photo/1/Epyllion-Textile.jpg" alt="Brand Image" class="img-thumbnail" style="width:50%">
      </div>


      <!-- Sidebar - Brand -->
      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="<?=base_url;?>">
        <div class="sidebar-brand-icon ">
          <i class="fas fa-cubes"></i>
        </div>
        <div class="sidebar-brand-text mx-3">
          G. Store <sup>V1.2</sup>
        </div>
      </a>

      <!-- Divider -->
      <hr class="sidebar-divider my-0">

      <!-- Nav Item - Dashboard -->
      <li class="nav-item">
        <a class="nav-link" href="<?=url('dashboard');?>">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span></a>
      </li>

      <!-- Nav Item - Dashboard -->
      <li class="nav-item">
        <a class="nav-link" href="<?=url('realtime_storemap');?>">
          <i class="fas fa-fw fa-table"></i>
          <span>Realtime Store Map</span></a>
      </li>

      <!-- Nav Item - Dashboard -->
<!--      <li class="nav-item">-->
<!--        <a class="nav-link" href="--><?//=url('batch_stock_status?status=ready');?><!--">-->
<!--          <i class="fas fa-fw fa-box"></i>-->
<!--          <span>Batch Stock Status</span></a>-->
<!--      </li>-->

      <!-- Divider -->
      <hr class="sidebar-divider">

      <!-- Heading -->
      <div class="sidebar-heading">
        Receive Sections
      </div>

      <!-- Nav Item - Charts -->
      <li class="nav-item">
        <a class="nav-link" href="<?=url('receive_item');?>">
          <i class="fas fa-fw fa-search"></i>
          <span>Inhouse Receive</span></a>
      </li>


      <!-- Nav Item - Charts -->
      <li class="nav-item">
        <a class="nav-link" href="<?=url('receive_subcontract_item');?>">
          <i class="fas fa-fw fa-search"></i>
          <span>Subcontract Receive</span></a>
      </li>
      <!-- Nav Item - Tables -->
      <li class="nav-item">
        <a class="nav-link" href="<?=url('rack_item');?>">
          <i class="fas fa-fw fa-table"></i>
          <span>Rack Fabric</span></a>
      </li>

    <!-- Nav Item - Tables -->
      <li class="nav-item">
        <a class="nav-link" href="<?=url('move_item');?>">
          <i class="fas fa-dolly"></i>
          <span>Move Fabric</span></a>
      </li>

      <!-- Nav Item - Tables -->
   <!--<li class="nav-item">
        <a class="nav-link" href="<?=url('random_delivery');?>">
          <i class="fas fa-fw fa-truck"></i>
          <span>Random Deliver</span></a>
      </li> -->

 	<!-- Divider -->
      <hr class="sidebar-divider">

      <!-- Heading -->
      <div class="sidebar-heading">
        Requisition & Issue
      </div>

      <li class="nav-item">
        <a class="nav-link" href="http://requisition.barcodetech-automation.com/requisition_requests.php" target="_blank">
          <i class="fa fa-paper-plane"></i>
          <span>Requisition Requests</span></a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="http://requisition.barcodetech-automation.com/confirmed_requisitions.php" target="_blank">
          <i class="fas fa-check"></i>
          <span>Confirmed Requisitions</span></a>
      </li>

      <hr class="sidebar-divider d-none d-md-block">

      <!-- Heading -->
      <div class="sidebar-heading">
        Reports
      </div>


      <!-- Nav Item - Utilities Collapse Menu -->
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseReports" aria-expanded="true" aria-controls="collapseReports">
          <!-- <i class="fas fa-fw fa-info-circle"></i> -->
          <i class="fas fa-chart-bar"></i>
          <span>Reports</span>
        </a>
        <div id="collapseReports" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">List:</h6>
	    <a class="collapse-item" href="http://192.168.57.21/pfmsreports/view/detailed_stock_report.php" target="_blank">Detailed Stock Report</a>
            <a class="collapse-item" href="http://192.168.57.21/pfmsreports/view/summarized_stock_report.php" target="_blank">Summarized Stock Report</a>
            <a class="collapse-item" href="<?=url("views/receive_report");?>">Receiveing Report</a>
            <a class="collapse-item" href="<?=url("views/rack_report");?>">Racking Report</a>
            <a class="collapse-item" href="--><?= url('requisition_report');?>">Delivery Report</a>
<!--            <a class="collapse-item" href="--><?//=url();?><!--">Order wise Report</a>-->
<!--            <a class="collapse-item" href="--><?//=url();?><!--">Buyer wise Report</a>-->
<!--            <a class="collapse-item" href="--><?//=url();?><!--">Color wise Report</a>-->
<!--            <a class="collapse-item" href="--><?//=url();?><!--">Other</a>-->
          </div>
        </div>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider">




      <!-- Nav Item - Utilities Collapse Menu -->
      <li class="nav-item <?=!isset($_SESSION['show_settings'])?'d-none':null;?>">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
          <i class="fas fa-fw fa-wrench"></i>
          <span>Settings</span>
        </a>
        <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Manage Store:</h6>
            <a class="collapse-item" href="<?=url('stores');?>">Stores</a>
            <a class="collapse-item" href="<?=url('racks');?>">Racks</a>
            <a class="collapse-item" href="<?=url('shelves');?>">Shelves</a>
            <a class="collapse-item" href="<?=url('boxes');?>">Boxes</a>
          </div>
        </div>
      </li>

      <!-- Sidebar Toggler (Sidebar) -->
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

    </ul>
    <!-- End of Sidebar -->
