<!-- Page Heading -->
<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">
        Requisition Delivery
    </h1>
</div>

<section id="flashMsg"></section>


<section class="row">
    <div class="col-12">
        <div class="card mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-success">
                    <i class="fa fa-plus"></i> New Delivery
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

                <form id="inputForm" method="post" class="row">
                    <div class="col-5">
                        <div class="form-group">
                            <label class="d-block" for="refference_no">
                                Requisition No.
                            </label>
                            <div class="input-group input-group-lg">
                                <input name="requisition_no" id="requisition_no" type="text" class="form-control" placeholder="requisition no." autocomplete="off" autofocus="">
                            </div>
                        </div>
                    </div>

                    <div class="col-5">
                        <div class="form-group">
                            <label for="roll_no">Roll number</label>
                            <div class="input-group input-group-lg">
                                <input id="item" type="text" class="form-control" placeholder="Scann roll" readonly>
                            </div>
                        </div>
                    </div>

                    <div class="col-2">
                        <div class="form-group">
                            <label for="">&nbsp;</label>
                            <div class="input-group input-group-lg">
                                <button type="submit" id="submitBtn" class="btn btn-block btn-lg btn-outline-success">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>

                <div class="row">
                    <div class="col-lg-12">
                        <table class="table table-striped table-bordered">
                            <thead>
                                <tr class="m-0 font-weight-bold text-success text-center">
                                    <th colspan="6">Requisition Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Order No.</th>
                                    <th>Color</th>
                                    <th>Requisition No</th>
                                    <th>Fabric Types</th>
                                    <th>Fabric Type Wise QTY</th>
                                    <th>Total QTY</th>
                                </tr>
                                <tr>
                                    <td id="table_order_no"></td>
                                    <td id="table_color"></td>
                                    <td id="table_requisition_no"></td>
                                    <td id="table_fabric_types"></td>
                                    <td id="table_fabric_type_wise_qty"></td>
                                    <td id="table_total_qty"></td>
                                </tr>
                            </tbody>
                            <tfoot>
                            </tfoot>
                        </table>
                    </div>
                </div>


                <!--  
        <div class="row">
            <div class="col-lg-6">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr class="m-0 font-weight-bold text-success">
                            <th colspan="2">Requisition Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>Requisition No: </b></td>
                            <td id="requisition_no">0000</td>
                        </tr>
                        <tr>
                            <td><b>Chalan/Batch No: </b></td>
                            <td id="chalan_no">0000</td>
                        </tr>
                        <tr>
                            <td><b>Requisition Weight: </b></td>
                            <td id="requisition_weight">0000</td>
                        </tr>
                        <tr>
                            <td><b>Factory Name: </b></td>
                            <td id="factory_name">Epyllion</td>
                        </tr>
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>
            </div>
            <div class="col-lg-6">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr class="m-0 font-weight-bold text-success">
                            <th colspan="2">Order Item Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>Buyer Name: </b></td>
                            <td id="buyer_name">Barcode</td>
                        </tr>
                        <tr>
                            <td><b>Ref no: </b></td>
                            <td id="ref_no">0000</td>
                        </tr>
                        <tr>
                            <td><b>Fabric Type: </b></td>
                            <td id="fabric_type">SJ</td>
                        </tr>
                        <tr>
                            <td><b>Color: </b></td>
                            <td id="gsm">Black</td>
                        </tr>
                        <tr>
                            <td><b>GSM: </b></td>
                            <td id="gsm">160</td>
                        </tr>
                        <tr>
                            <td><b>Dia: </b></td>
                            <td id="dai">20</td>
                        </tr>
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>
            </div>
        </div>
         -->
                <div class="row">
                    <div class="col-lg-12">
                        <table class="table table-striped table-bordered" id="just_scanned_items">
                            <thead>
                                <tr>
                                    <th colspan="8">
                                        <h6 class="m-0 font-weight-bold text-success">
                                            <i class="fa fa-barcode"></i> Requisition Rolls
                                        </h6>
                                    </th>
                                </tr>
                                <tr>
                                    <th>Roll no.</th>
                                    <th>Weight</th>
                                    <th>Buyer Name</th>
                                    <th>Order no.</th>
                                    <th>Requisition No.</th>
                                    <th>Color</th>
                                    <th>Fabric Style</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- <tr class="">
                                    <td>1000_1</td>
                                    <td>10</td>
                                    <td>10</td>
                                    <td>10</td>
                                    <td>10</td>
                                    <td>10</td>
                                    <td>10</td>
                                    <td class="text-success"><i class="fa fa-check"></i></td>
                                </tr>
                                <tr class="">
                                    <td>1000_2</td>
                                    <td>10.40</td>
                                    <td>10.40</td>
                                    <td>10.40</td>
                                    <td>10.40</td>
                                    <td>10.40</td>
                                    <td>10.40</td>
                                    <td class="text-warning"><i class="fa fa-times"></i></td>
                                </tr> -->
                            </tbody>
                            <tfoot>
                                <tr class="">
                                    <th id="sum_total_rows" class="text-right">0</th>
                                    <th id="sum_total_weight" class="text-right">00.00</th>
                                    <th colspan="6"><b>&lArr; TOTAL</b></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div id="list_button_mirror" class="text-right"></div>

            </div>
        </div>
    </div>
</section>
