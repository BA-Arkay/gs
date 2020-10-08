<!-- Page Heading -->
<div class="d-sm-flex align-items-center justify-content-between mb-4">
	<h1 class="h3 mb-0 text-gray-800">
		Book Racks For Buyers
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
                    <i class="fa fa-plus"></i> Assign A Rack
                </h6>
            </a>
            <!-- Card Content - Collapse -->
            <div class="collapse" id="collapseCardExample" style="">
                <div class="card-body">
                    <form id="assignBuyerForm" method="post" class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <label for="racks">Racks:</label>
                                <div class="input-group input-group-lg">
                                    <select class="form-control" id="racks">
                                        <option value="">-- Select --</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="form-group">
                                <label for="buyers">Buyers:</label>
                                <div class="input-group input-group-lg">
                                    <select class="form-control" id="buyers">
                                        <option value="">-- Select --</option>
                                    </select>
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
                    <i class="fa fa-asterisk"></i> All Assigned Racks
                </h6>
            </div>
            <div class="card-body">

            <table class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Rack</th>
                        <th>Buyer</th>
                        <th class="text-center">#</th>
                    </tr>
                </thead>
                <tbody id="assignedRacks">
                </tbody>
            </table>

            <div id="list_button_mirror" class="text-right"></div>
            </div>
        </div>
    </div>
</section>
