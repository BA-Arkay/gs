/* 
stores data load sections 
this data load by get method form store api 
and append in table tr when declear id as a store-information
*/

$.ajax({
  url: API_URL + "/stores",
  type: "get",
  dataType:ajax_data_type,
  success: function(response) {
      for (let store_information of response) {
      $("#store-information").append(
        ` <tr><td style="color:#000;">${store_information.title}</td>
                <td>${store_information.location}</td>
                <td class="text-center">
                <div class="btn-group">
                  <a href="racks?store_id=${store_information.id}" title="Add RACKs in this STORE" data-toggle="tooltip" class="btn btn-primary"><i class="fa fa-plus"></i></a>
                  <button title="View STORE info" data-toggle="tooltip" data-toggle="tooltip" class="btn btn-info"><i class="fa fa-eye"></i></button>
                  <button title="Edit STORE info" data-toggle="tooltip" class="btn btn-success"><i class="fa fa-edit"></i></button>
                  <button title="Remove this STORE" data-toggle="tooltip" class="btn btn-danger"><i class="fa fa-trash"></i></button>
                </div>
              </td>
              </tr>
                `
      );
   
  }
  }});



















/*
this section is for store new store or add new store 
this data store will be in store api
*/

$("#create_store").on("submit", function(e) {
  e.preventDefault();
  let title = $("#store_title").val();
  let location = $("#store-location").val();

  if (title) {
    $.ajax({
      url: API_URL + "/stores",
      type: "POST",
      dataType:ajax_data_type,
      data: {
        title: title,
        location: location
      },
      success: function(data) {
        /* section button button disable for multiple submiting more time */
        if (data.success) {
          $("button[type=submit]")
            .prop("disabled", false)
            .html("submit");
          $("input").attr("readonly", false);
          $("input").val("");

          $("#store-information").prepend(
            ` <tr><td style="color:#000;">${data.title}</td>
                    <td>${data.location}</td>
                    <td class="text-center">
                    <div class="btn-group">
                      <a href="racks?store_id=${data.id}" title="Add RACKS in this STORE" data-toggle="tooltip" class="btn btn-primary"><i class="fa fa-plus"></i></a>
                      <button title="View STORE info" data-toggle="tooltip" data-toggle="tooltip" class="btn btn-info"><i class="fa fa-eye"></i></button>
                      <button title="Edit STORE info" data-toggle="tooltip" class="btn btn-success"><i class="fa fa-edit"></i></button>
                      <button title="Remove this STORE" data-toggle="tooltip" class="btn btn-danger"><i class="fa fa-trash"></i></button>
                    </div>
                  </td>
                  </tr>
                    `
          );
          data.id = "#flashMsg";
          alertMessagePro(data);
        } else {
          data.id = "#flashMsg";
          alertMessagePro(data);
        }
      },
      error: request => {
        $("button[type=submit]")
          .prop("disabled", false)
          .html("submit");
        $("#title").attr("readonly", false);
        title = null;
      }
    });
  } else {
    alertMessage("#flashMsg", "input field can't be empty", "Warning");
  }
});
