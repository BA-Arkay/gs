<!-- Page Heading -->
<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">
        Forge Remove Booking
    </h1>
</div>

<section id="flashMsg"></section>


<section class="row">
    <div class="col-12">
        <div class="card mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-success">
                    <i class="fa fa-times"></i> Remove Booking From Box
                </h6>
            </div>
            <div class="card-body">
                <form id="forge_remove_booking" method="post" class="row">

                    <div class="col-10">
                        <div class="form-group">
                            <!-- <label for="store_title">Store Title</label> -->
                            <div class="input-group input-group-lg">
                                <input name="identifier" id="identifier" type="text" class="form-control" placeholder="Enter Box Title">
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="form-group">
                            <!-- <label for="store_title"></label> -->
                            <div class="input-group input-group-lg">
                                <button type="submit" class="btn btn-lg btn-outline-success">Submit</button>
                            </div>
                        </div>
                    </div>

                </form>
                <div id="list_button_mirror" class="text-right"></div>
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
                    <i class="fa fa-times"></i> Recent Remove Booking
                </h6>
            </div>
            <div class="card-body">

                <table id="forge_remove_booking_table" class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Box Title</th>
                            <th>Batch</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

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