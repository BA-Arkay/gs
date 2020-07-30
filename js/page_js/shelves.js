/* 
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
 */

let searchParams = new URLSearchParams(window.location.search);
let url_store_id = searchParams.get('store_id');
let url_rack_id = searchParams.get('rack_id');

$(document).ready(function () {
  if (url_store_id) {
    racksByStore(url_store_id);
  }

  $("#store_id").on('change', function () {
    racksByStore(this.value);
  })


})


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



/* 
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
 */


$(document).ready(function storeIndex() {
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
});



/* 
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
 */

$("#shelves_form").on("submit", e => {
  e.preventDefault();
  let store_id = $("#store_id").val();
  let rack_id = $("#rack_id").val();
  let shelf_title = $("#shelves_title").val();

  if (shelf_title) {
    $.ajax({
      url: API_URL + "/shelves",
      type: "post",
      dataType: ajax_data_type,
      data: {
        store_id: store_id,
        rack_id: rack_id,
        title: shelf_title
      },
      success: response => {
        if (response.success) {
          /* section button button disable for multiple submiting more time */
          $("button[type=submit]")
            .prop("disabled", false)
            .html("submit");
          $("input").attr("readonly", false);
          $("input").val("");

          $("#shelves").prepend(`
            <tr>
              <td>${response.store}</td>
              <td >${response.rack}</td>
              <td style="color:#000;">${response.title}</td>
              <td class="text-center">
                <div class="btn-group">
                  <a href="boxes?store_id=${response.store_id}&rack_id=${response.rack_id}&shelf_id=${response.id}" title="Add shelves in this RACK" data-toggle="tooltip" class="btn btn-primary"><i class="fa fa-plus"></i></a>
                  <button title="View RACK info" data-toggle="tooltip" data-toggle="tooltip" class="btn btn-info"><i class="fa fa-eye"></i></button>
                  <button title="Edit RACK info" data-toggle="tooltip" class="btn btn-success"><i class="fa fa-edit"></i></button>
                  <button title="Remove this RACK" data-toggle="tooltip" class="btn btn-danger"><i class="fa fa-trash"></i></button>
                </div>
              </td>
            </tr>
          </tbody>`);
          response.id = "#flashMsg";
          alertMessagePro(response);
        } else {
          $("button[type=submit]")
            .prop("disabled", false)
            .html("submit");
          $("input").attr("readonly", false);
          $("input").val("");
          response.id = "#flashMsg";
          alertMessagePro(response);
        }
      },
      error: request => {
        $("button[type=submit]")
          .prop("disabled", false)
          .html("submit");
        $("input").attr("readonly", false);
        document.getElementById("item").value = "";
      }
    });
  } else {
    alertMessage("#flashMsg", "input field can't be empty", "Warning");
  }
});




/* 
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
 */

$.ajax({
  url: API_URL + "/shelves/index",
  type: "get",
  dataType: ajax_data_type,
  success: response => {
    for (let shelves_info of response) {
      $("#shelves").append(`
            <tr>
              <td>${shelves_info.store}</td>
              <td >${shelves_info.rack}</td>
              <td style="color:#000;">${shelves_info.title}</td>
              <td class="text-center">
                <div class="btn-group">
                  <a href="boxes?store_id=${shelves_info.store_id}&rack_id=${shelves_info.rack_id}&shelf_id=${shelves_info.id}" title="Add shelves in this RACK" data-toggle="tooltip" class="btn btn-primary"><i class="fa fa-plus"></i></a>
                  <button title="View RACK info" data-toggle="tooltip" data-toggle="tooltip" class="btn btn-info"><i class="fa fa-eye"></i></button>
                  <button title="Edit RACK info" data-toggle="tooltip" class="btn btn-success"><i class="fa fa-edit"></i></button>
                  <button title="Remove this RACK" data-toggle="tooltip" class="btn btn-danger"><i class="fa fa-trash"></i></button>
                </div>
              </td>
            </tr>
    </tbody>`);
    }
  }
});
/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
 */