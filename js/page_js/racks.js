/* 
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
 */

/* this function is for get id of single store */

$(document).ready(function () {
  // console.log(typeof url_store_id);

  $("#store_id").on("change", function() {
    let id = $("#store_id").val();
    let output = null;
    $(".rack-old-item").remove();
    $.ajax({
      type: "get",
      dataType: ajax_data_type,
      url: API_URL + "/racks/rackInfo/" + id,
      success: data => {
        console.log(data);
        for (let item of data) {
          output += `<option value="${item.id}">${item.title}</option>`;
        }
        $("#rack_id").append(output);
      }
    });
  });
}
)




/* 
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
 */

/* this method is for load all store and store id in selectbox */

$(document).ready(function storeIndex() {
  let searchParams = new URLSearchParams(window.location.search);
  let url_store_id = searchParams.get('store_id');
  let output = null;
  $.ajax({
    type: "get",
    dataType: ajax_data_type,
    url: API_URL + "/stores",
    success: data => {
      let sl = 0;
      for (let item of data) {
        output += `<option ${ (item.id == url_store_id) ? 'selected' : '' }  value="${item.id}">${item.title}</option>`;
      }
      $("#store_id").append(output);
    },
    complete: function(){
      $('#racks_title').focus();
    }
  });
});


/* 
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
 */


$.ajax({
  url: API_URL + "/racks/index",
  type: "get",
  dataType: ajax_data_type,
  success: response => {
    for (let racks_info of response) {
      $("#racks").append(`
            <tr>
            <td>${racks_info.store}</td>
            <td style="color:#000;">${racks_info.title}</td>
            <td class="text-center">
              <div class="btn-group">
                <a href="shelves?store_id=${racks_info.store_id}&rack_id=${racks_info.id}" title="Add shelves in this RACK" data-toggle="tooltip" class="btn btn-primary"><i class="fa fa-plus"></i></a>
                <button title="View RACK info" data-toggle="tooltip" data-toggle="tooltip" class="btn btn-info"><i class="fa fa-eye"></i></button>
                <button title="Edit RACK info" data-toggle="tooltip" class="btn btn-success"><i class="fa fa-edit"></i></button>
                <button title="Remove this RACK" data-toggle="tooltip" class="btn btn-danger"><i class="fa fa-trash"></i></button>
              </div>
            </td>
          </tr>
        `);
    }
  }
});

/* 
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
 */










//create a new racks

$("#rack_form").on("submit", function (e) {
  e.preventDefault();
  let store_id = $("#store_id").val();
  let racks_title = $("#racks_title").val();

  if (racks_title) {
    $.ajax({
      url: API_URL + "/racks",
      type: "POST",
      dataType: "json",
      data: {
        store_id: store_id,
        title: racks_title
      },
      success: function (data) {
        /* section button button disable for multiple submiting more time */
        if (data.success) {
          $("button[type=submit]")
            .prop("disabled", false)
            .html("submit");
          $("input").attr("readonly", false);
          $("input").val("");

          $("#racks").prepend(`<tr><td style="color:#000;">${data.store}</td>
                    <td>${data.title}</td>
                    <td class="text-center">
                    <div class="btn-group">
                      <a href="shelves?store_id=${data.store_id}&rack_id=${data.id}" title="Add RACKS in this STORE" data-toggle="tooltip" class="btn btn-primary"><i class="fa fa-plus"></i></a>
                      <button title="View STORE info" data-toggle="tooltip" data-toggle="tooltip" class="btn btn-info"><i class="fa fa-eye"></i></button>
                      <button title="Edit STORE info" data-toggle="tooltip" class="btn btn-success"><i class="fa fa-edit"></i></button>
                      <button title="Remove this STORE" data-toggle="tooltip" class="btn btn-danger"><i class="fa fa-trash"></i></button>
                    </div>
                  </td>
                  </tr>`);
          data.id = "#flashMsg";
          alertMessagePro(data);


        } else {
          data.id = "#flashMsg";
          alertMessagePro(data);
        }
      },
      error: function (request) {
        $("button[type=submit]")
          .prop("disabled", false)
          .html("submit");
        $("#racks_title").attr("readonly", false);
        title = null;
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