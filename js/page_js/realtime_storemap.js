(function ($) {
    $(document).ready(function () {
        let output = '';
        $.ajax({
            url: API_URL + '/boxes/dash',
            dataType: ajax_data_type,
            type: 'get',
            success: function (data) {
                for (let store of data) {
                    output += `<div class="col-12">
                             <button class="btn btn-success my-3">
                                 ${store.title} <span class="badge badge-success"></span>
                             </button>`;

                    for (let rack of store.racks) {
                        output += `<div class="card mb-4">
                                 <!-- Card Header - Dropdown -->
                                 <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                     <h6 class="m-0 font-weight-bold text-success">
                                         ${rack.title}
                                     </h6>
                                     <div class="dropdown no-arrow">
                                         <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                             <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                         </a>
                                         <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                             <div class="dropdown-header">Go to:</div>
                                             <a class="dropdown-item" href="<?= url(''); ?>">Add Box</a>
                                             <a class="dropdown-item" href="<?= url(''); ?>">Add Shelf</a>
                                             <div class="dropdown-divider"></div>
                                             <a class="dropdown-item" href="<?= url('stores'); ?>">Stores</a>
                                             <a class="dropdown-item" href="<?= url('racks'); ?>">Racks</a>
                                             <a class="dropdown-item" href="<?= url('shelves'); ?>">Shelves</a>
                                             <a class="dropdown-item" href="<?= url('boxes'); ?>">Boxes</a>
                                         </div>
                                     </div>
                                 </div>
                                 <div class="card-body auto-scroll" id="storemap">
                                     <div class="storeRack">
                                         <table class="mb-3">`;

                        for (let shelf of rack.shelves.reverse()) {
                            output += ` <!-- each shelf -->
                                                    <tr class="storeShelf">`;
                            for (let box of shelf.boxes) {
                                var     status_icon     = '',
                                        status_title    = '';

                                if(box.batch_barcode==null){
                                    status_icon     = 'fa fa-2x fa-exclamation-circle text-dark';
                                    status_title    = 'No Booking!';
                                }else{
                                    if(box.number_of_items==0){
                                        status_icon     = 'fa fa-2x fa-sync-alt text-danger';
                                        status_title    = 'Booked but empty!';
                                    }else if(box.number_of_items>=box.batch_rolls && box.occupied>=box.booked_quantity){
                                        status_icon     = 'fa fa-2x fa-check text-success';
                                        status_title    = 'Ready for Delivery';
                                    }else{
                                        status_icon     = 'fa fa-2x fa-sync-alt text-warning fa-spin';
                                        status_title    = 'Receiving Rolls...';

                                    }

                                }
                                        
                                output += ` <!-- each box -->
                                                                <td class="storeBox">
                                                                    <div class="storeBoxWrap">
                                                                        <b class="lead">${box.identifier}</b>
                                                                        <small title="Capacity" data-toggle="tooltip" class="float-right">${box.capacity}</small>
                                                                        <div class="row text-center">
                                                                            <div title="Batch no." data-toggle="tooltip" class="col-4 text-white bg-info">B: ${box.batch_barcode}</div>
                                                                            <div title="Batch Weight" data-toggle="tooltip" class="col-4 text-white bg-primary">W: ${box.booked_quantity}</div>
                                                                            <div title="Batch Roll Count" data-toggle="tooltip" class="col-4 text-white bg-info">R: ${box.batch_rolls}</div>

                                                                            <div title="${status_title}" data-toggle="tooltip" class="col-4"><i class="${status_icon}"></i></div>

                                                                            <div title="Stock Weight" data-toggle="tooltip" class="col-4 text-white bg-success">S: ${box.occupied}</div>
                                                                            <div title="Stock Roll Count" data-toggle="tooltip" class="col-4 text-white bg-primary">N: ${box.number_of_items}</div>
                                                                        </div>
                                                                        <div class="col mt-3 text-center">
                                                                            <a href="<?= url('box_details'); ?>">Detail info...</a>
                                                                        </div>
                                                                    </div>
                                                                </td><!-- each box -->`;
                            }
                            output += `</tr>
                                                    <!-- each shelf -->`;
                        }

                        output += `</table>
                                     </div>
                                     <div id="list_button_mirror" class="text-right"></div>
                                 </div>
                             </div>`;
                    }
                    output += `</div>`;
                }
                $("#realtime_storemap").append(output);
            }
        })
    })
})(jQuery)
