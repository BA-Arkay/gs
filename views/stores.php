
<!-- Page Heading -->
<div class="d-sm-flex align-items-center justify-content-between mb-4">
  <h1 class="h3 mb-0 text-gray-800">
    Stores
  </h1>
</div>

<section id="flashMsg"></section>



<!-- Content Row -->
<section class="row">

  <div class="col-12">
    
    <div class="card shadow mb-4">
      <!-- Card Header - Accordion -->
      <a href="#collapseCardExample" class="d-block card-header py-3 collapsed" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCardExample">
        <h6 class="m-0 font-weight-bold text-success">
          <i class="fa fa-plus"></i> Add new store
        </h6>
      </a>
      <!-- Card Content - Collapse -->
      <div class="collapse" id="collapseCardExample" style="">
        <div class="card-body">


        <form id="create_store" method="post" class="row">
          
          <div class="col-6">
            <div class="form-group">
              <label for="store_title">Store Title</label>
              <div class="input-group input-group-lg">
                <input name="title" id="store_title" type="text" class="form-control" placeholder="New Store...">
              </div>
            </div>
          </div>

          <div class="col-6">
            <div class="form-group">
              <label for="store-location">Store Location</label>
              <div class="input-group input-group-lg">
                <input id="store-location" type="text" class="form-control" placeholder="West Building...">
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="input-group input-group-lg">
              <button type="submit" class="btn btn-lg btn-outline-success">Submit</button>
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
          <i class="fa fa-asterisk"></i> All Stores
        </h6>
        <div class="dropdown no-arrow">
          <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
          </a>
          <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
            <div class="dropdown-header">Go to:</div>
            <a class="dropdown-item" href="<?=url('stores');?>">Stores</a>
            <a class="dropdown-item" href="<?=url('racks');?>">Racks</a>
            <a class="dropdown-item" href="<?=url('shelves');?>">Shelves</a>
            <a class="dropdown-item" href="<?=url('boxes');?>">Boxes</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="<?=url('');?>">Trashed</a>
            <a class="dropdown-item" href="<?=url('');?>">Archived</a>
          </div>
        </div>
      </div>
      <div class="card-body">
        
        <table class="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Store Title</th>
              <th>Store Description</th>
<!--              <th>Num. Rack</th>-->
<!--              <th>Capacity</th>-->
              <th class="text-center">#</th>
            </tr>
          </thead>
          <tbody id="store-information">
            <tr id="dummy_tr">
              <!--
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

        <div id="list_button_mirror" class="text-right"></div>
      </div>
    </div>

  </div>
</section>


