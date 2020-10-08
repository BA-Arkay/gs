<!-- Page Heading -->
<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">
        Delivered Rolls
    </h1>
</div>

<section id="flashMsg"></section>


<section class="row">
    <div class="col-12">
        <div class="card mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-success">
                    <i class="fa fa-asterisk"></i> All Delivered Rolls
                </h6>
            </div>
            <div class="card-body">
                <div class="row my-3">
                    <div class="col-lg-4">
                        <div class="form-group">
                            <label for="">Reference No </label>
                            <div class="input-group input-group-lg">
                                <input id="ref_no" type="text" class="form-control" placeholder="Reference no" readonly>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="form-group">
                            <label for="">Batch No </label>
                            <div class="input-group input-group-lg">
                                <input id="batch_no" type="text" class="form-control" placeholder="Batch no" readonly>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="form-group">
                            <label for="">Total Weight</label>
                            <div class="input-group input-group-lg">
                                <input id="total_weight" type="text" class="form-control" placeholder="Weight" readonly>
                            </div>
                        </div>
                    </div>
                </div>
                <table id="delivered_item" class="table table-bordered table-striped">
                    <thead>
                        <th>Roll no</th>
                        <th  class="text-right">Weight</th>
                    </thead>
                    <tbody>
                       
                    </tbody>
                </table>
                <div id="list_button_mirror" class="text-right"></div>
            </div>
        </div>

    </div>
</section>