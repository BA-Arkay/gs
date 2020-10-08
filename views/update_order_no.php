<!-- Page Heading -->
<div class="d-sm-flex align-items-center justify-content-between mb-4">
  <h1 class="h3 mb-0 text-gray-800">
    Update Order No.
  </h1>
</div>

<section id="flashMsg"></section>




<section class="row">
  <div class="col-12">
    <div class="card mb-4">
      <!-- Card Header - Dropdown -->
      <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 class="m-0 font-weight-bold text-success">
          <i class="fa fa-sync"></i> UPDATE STATUS
        </h6>
        <div class="dropdown no-arrow">
          <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
          </a>
          <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
            <div class="dropdown-header">Go to:</div>
          </div>
        </div>
      </div>
      <div class="card-body">

        <div class="col-md-4">
          <table class="table table-lg" style="font-size: 1.5em">
            <tr class="bg-info text-white">
              <td>Total Batches</td>
              <td id="available" class="text-right">00</td>
            </tr>
            <tr class="bg-success text-white">
              <td>Updated</td>
              <td id="updated" class="text-right">00</td>
            </tr>
            <tr class="bg-dark text-white">
              <td>Deliveries</td>
              <td id="deliveries" class="text-right">00</td>
            </tr>
            <tr class="bg-warning text-white">
              <td>Remaining</td>
              <td id="remaining" class="text-right">00</td>
            </tr>
          </table>

          <button id="start_updating" class="btn btn-primary">START UPDATING</button>
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
          <i class="fa fa-bell"></i> Notifications
        </h6>
        <div class="dropdown no-arrow">
          <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
          </a>
          <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
            <div class="dropdown-header">Go to:</div>
          </div>
        </div>
      </div>
      <div class="card-body" style="height:300px; overflow: auto;">

        <div id="notifications" class="container"></div>

      </div>
    </div>

  </div>
</section>

