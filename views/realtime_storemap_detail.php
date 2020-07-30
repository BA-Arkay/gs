<!-- Page Heading -->
<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">
        Store Map Detail
    </h1>
</div>

<section id="flashMsg"></section>


<section class="row">
    <div class="col-12">
        <div class="card mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-success">
                    <i class="fa fa-barcode"></i> Rack : R01A1
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
                <div class="row">
                    <div class="col-12">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td class="bg-successX"><i class="fa fa-check fa-lg text-success"></i>&nbsp;<span>Capacity</span>&nbsp;&nbsp;<span id="box_capacity" class="badge badge-success store-current-stock">...</span> </td>
                                    <td class="bg-warningX"><i class="fa fa-sync fa-lg fa-spin text-warning"></i>&nbsp;<span>Stock Weight</span>&nbsp;&nbsp;<span id="receiving_batches" class="badge badge-warning store-current-stock">...</span></td>
                                    <td class="bg-dangerX"><i class="fa fa-sync fa-lg text-danger"></i>&nbsp;<span>Not Receiving</span>&nbsp;&nbsp;<span id="not_receiving_batches" class="badge badge-danger store-current-stock">...</span></td>
                                    <td class="bg-dangerX"><i class="fa fa-exclamation-circle fa-lg text-dark"></i>&nbsp;<span>Not Booked</span>&nbsp;&nbsp;<span id="not_booked_boxes" class="badge badge-dark store-current-stock">...</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <table class="table table-striped table-bordered">
                    <thead class="thead-inverse">
                        <tr>
                            <th>Roll No </th>
                            <th>Weight</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
                <div id="list_button_mirror" class="text-right"></div>
            </div>
        </div>

    </div>
</section>