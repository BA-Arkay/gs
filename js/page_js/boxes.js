
let searchParams = new URLSearchParams(window.location.search);
let url_store_id = searchParams.get('store_id');
let url_rack_id = searchParams.get('rack_id');
let url_shelf_id = searchParams.get('shelf_id');

(function ($) {
    $(document).ready(function () {


        $("#inputForm").on('submit', function (e) {
            e.preventDefault();
            let store_id = $("#store_id").val();
            let rack_id = $("#rack_id").val();
            let shelf_id = $("#shelf_id").val();
            let title = $("#title").val();
            let capacity = $("#capacity").val();

            if (title && store_id && rack_id && shelf_id && capacity) {

                $('button[type=submit]').prop('disabled', true).html('<i class="fa fa-spinner fa-spin"></i> Loading...');
                $('input').attr('readonly', true);
                $.ajax({
                    type: "post",
                    url: API_URL + '/boxes',
                    data: {
                        store_id,
                        rack_id,
                        shelf_id,
                        title,
                        capacity
                    },
                    dataType: ajax_data_type,
                    success: (response) => {
                        console.log(response);

                        /* reset form */
                        $('button[type=submit]').prop('disabled', false).html('submit');
                        $('input').attr('readonly', false);
                        $('input').val('');

                        boxTr(response, true);

                        response.id = '#flashMsg';
                        alertMessagePro(response);

                    },
                    error: function (response) {
                        let errorResult = JSON.parse(response.responseText);
                        /* reset form */
                        $('button[type=submit]').prop('disabled', false).html('submit');
                        $('input').attr('readonly', false);
                        $('input').val('');
                        response.id = '#flashMsg';
                        response.message = errorResult;
                        alertMessagePro(response);
                    }
                });
            }
            else {
                let obj = {
                    id: '#flashMsg',
                    message: 'Please Enter values!',
                    message_type: 'warning',
                }
                alertMessagePro(obj);
            }

        });
        storeIndex();
        index();

        if (url_store_id) {
            racksByStore(url_store_id);
        }

        if (url_rack_id) {
            shelvesByRack(url_rack_id);
        }

        $("#store_id").on('change', function () {
            racksByStore(this.value);
            $('#shelf_id').empty();

            let output = `<option class="shelf-old-item" value="0">--Select One--</option>`;
            $('#shelf_id').append(output);
        })
        $("#rack_id").on('change', function () {
            shelvesByRack(this.value);
        })

        $(document).on('click', '.editStatus', (e) => {
            // console.log(e.target.prop());
            let id = e.target.id;
            if ($("#" + id).prop("checked") == true) {
                changeToActive(id);
            } else {
                changeToDisable(id);
            }
        });
    });
})(jQuery)


function storeIndex() {
    let output = null;
    $.ajax({
        type: "get",
        dataType: ajax_data_type,
        url: API_URL + "/stores",
        success: data => {
            let sl = 0;
            for (let item of data) {
                output += `<option ${(item.id == url_store_id) ? 'selected' : ''} value="${item.id}">${item.title}</option>`;
            }
            $("#store_id").append(output);
        }
    });
}

function racksByStore(store_id) {
    $(".rack-old-item").remove();
    let output = null;
    $.ajax({
        type: "get",
        url: API_URL + '/racks/rackInfo/' + store_id,
        success: (data) => {
            console.log(data);
            for (let item of data) {
                output += `<option ${(item.id == url_rack_id ? 'selected' : '')} class="rack-old-item" value="${item.id}">${item.title}</option>`;
            }
            $("#rack_id").append(output);
        }
    });
}


function shelvesByRack(id) {
    $(".shelf-old-item").remove();
    let output = null;
    $.ajax({
        type: "get",
        url: API_URL + '/shelves/shelfInfo/' + id,
        success: (data) => {
            for (let item of data) {
                output += `<option ${(item.id == url_shelf_id ? 'selected' : '')}  class="shelf-old-item" value="${item.id}">${item.title}</option>`;
            }
            $("#shelf_id").append(output);
        }
    });
}

function index() {
    $.ajax({
        type: "get",
        url: API_URL + '/boxes/index',
        dataType: 'json',
        success: function (data) {
            for (let item of data) {
                (item.is_active === 1) ? item.is_active = 'checked' : item.is_active = '';
                boxTr(item);
            }
        }
    });
}

function boxTr(item, bg = false) {
    let output = `<tr ${bg ? 'style="background:limegreen;' : ''}">
                    <td><img src="${API_URL}/barcodes/${item.barcode}"></td>
                    <td>${item.identifier}</td>
                    <td>${item.store}</td>
                    <td>${item.rack}</td>
                    <td>${item.shelf}</td>
                    <td>${item.title}</td>
                    <td>${item.capacity}</td>
                    <td>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input editStatus" id="${item.id}" ${item.is_active}>
                            <label class="custom-control-label" for="${item.id}"></label>
                        </div>
                    </td>
                    <td>
                        <div class="btn-group">
                            <a disabled href="<?= base_url; ?>/rack_item.php?box_id=R01A1" title="Rack ROLLs in this BOX" data-toggle="tooltip" class="btn btn-primary"><i class="fa fa-search"></i></a>
                            <button title="View BOX info" data-toggle="tooltip" data-toggle="tooltip" class="btn btn-info"><i class="fa fa-eye"></i></button>
                            <button title="Edit BOX info" data-toggle="tooltip" class="btn btn-success"><i class="fa fa-edit"></i></button>
                            <button title="Remove this BOX" data-toggle="tooltip" class="btn btn-danger"><i class="fa fa-trash"></i></button>
                        </div>
                    </td>
                </tr>`;
    $("#show_data tbody").prepend(output);
}

function changeToActive(id) {
    $.ajax({
        type: "put",
        url: API_URL + '/boxes/active/' + id,
        success: (data) => {
            console.log(data);
        },
        error: function(request) {
            console.log(request);
        }
    });

}

function changeToDisable(id) {
    $.ajax({
        type: "put",
        url: API_URL + '/boxes/disable/' + id,
        success: (data) => {
            console.log(data);
        },
        error: function(request) {
            console.log(request);
        }
    });
}
