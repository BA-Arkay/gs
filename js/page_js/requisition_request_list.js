$(document).ready(function () {
    $("#jqGrid").jqGrid({
        colModel: [

            {
                label: 'Order No.',
                name: 'order_no',
                width: 200,
                align: 'center',
                sorttype: "text",
            },
            {
                label: 'Color',
                name: 'color',
                width: 200,
                align: 'center',
                sorttype: "text",
            },
            {
                label: 'Batch No',
                name: 'batch_no',
                width: 200,
                align: 'center',
                sorttype: "text",
            },
            {
                label: 'Fabric Types',
                name: 'fabri_types',
                width: 200,
                align: 'center',
                sorttype: "text",
            },
            {
                label: 'Fabric Type Wise QTY',
                name: 'fabri_type_wise_qty',
                width: 200,
                align: 'center',
                sorttype: "text",
            },
            {
                label: 'Total QTY',
                name: 'total_qty',
                width: 200,
                align: 'center',
                sorttype: "text",
            },
            {
                label: 'Comment',
                name: 'comment',
                width: 200,
                align: 'center',
                sorttype: "text",
            },
        ],

        viewrecords: true, // show the current page, data rang and total records on the toolbar
        autowidth: true,
        shrinkToFit: false,
        height: '80vh',
        rowNum: 100,
        datatype: 'local',
        pager: "#jqGridPager",
        filterModel: {
            on: true,
            header: true,
            type: 'remote',
            menuIcon: true
        },
        // caption: "<strong>Items"
    });

    $('.ui-jqgrid .ui-jqgrid-bdiv').css('overflow-x', 'auto');

    fetchGridData();

    function fetchGridData() {

        var gridArrayData = [];
        // show loading message
        $("#jqGrid")[0].grid.beginReq();
        $.ajax({
            url: requisition_url + "/requisition/pending_requests",
            datatype: ajax_data_type,
            type: 'get',
            success: function (result) {
                // console.log(result.data);
                for (let item of result.data) {
                    gridArrayData.push({
                        order_no: item.order_barcode ? item.order_barcode : 'N/A',
                        color: item.color ? item.color : 'N/A',
                        batch_no: item.title ? item.title : 'N/A',
                        fabri_types: item.fabric_types ? item.fabric_types : 'N/A',
                        fabri_type_wise_qty: item.fabric_typewise_qty ? item.fabric_typewise_qty : 'N/A',
                        total_qty: item.qty ? item.qty : 'N/A',
                        comment: item.request_comment ? item.request_comment : 'N/A'
                    });
                }
                // set the new data
                $("#jqGrid").jqGrid('setGridParam', {
                    data: gridArrayData
                });
                // hide the show message
                $("#jqGrid")[0].grid.endReq();
                // refresh the grid
                $("#jqGrid").trigger('reloadGrid');
            }
        });
    }

    /* function formatTitle(cellValue, options, rowObject) {
        return cellValue.substring(0, 50);
    }; */

    function formatLink(cellValue, options, rowObject) {
        return "<a href='" + cellValue + "'>" + cellValue.substring(0, 25) + "..." + "</a>";
    };
    let d = new Date();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let second = d.getSeconds();
    let minute = d.getMinutes();
    let hours = d.getHours();
    $("#export_excel").on("click", function () {
        $("#jqGrid").jqGrid("exportToExcel", {
            includeLabels: true,
            includeGroupHeader: true,
            includeFooter: true,
            fileName: `${date}-${month}-${year}_${hours}-${minute}-${second}-requisition_request.xlsx`,
            maxlength: 40 // maxlength for visible string data 
        })
    });

    $('#jqGrid').jqGrid('filterToolbar');
    $('#jqGrid').jqGrid('navGrid', "#jqGridPager", {
        search: false, // show search button on the toolbar
        add: false,
        edit: false,
        del: false,
        refresh: true
    });

    // $("#jqGridPager .navtable .ui-pg-div>span").removeClass("ui-icon");

});

