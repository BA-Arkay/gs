$(document).ready(function () {
    $("#jqGrid").jqGrid({
        colModel: [

            {
                label: 'Buyer Name',
                name: 'buyer_name',
                width: 200,
                // align: 'center',
                // formatter: formatTitle,
                sorttype: "text",
            },
            {
                label: 'Order no.',
                name: 'order_no',
                width: 200,
                align: 'center',
                // formatter: formatTitle,
                sorttype: "text",
            },
            {
                label: 'Style no.',
                name: 'style_no',
                width: 200,
                align: 'center',
                // formatter: formatTitle,
                sorttype: "text",
            },
            {
                label: 'Batch no.',
                name: 'batch_no',
                width: 200,
                align: 'center',
                // formatter: formatTitle,
                sorttype: "text",
            },
            {
                label: 'Location.',
                name: 'location',
                width: 200,
                align: 'center',
                // formatter: formatTitle,
                sorttype: "text",
            },
            {
                label: 'Status',
                name: 'status',
                search: true,
                width: 200,
                align: 'center',
                // formatter: formatTitle
            },
            {
                label: 'Color',
                name: 'color',
                width: 200,
                align: 'center',
                // formatter: formatTitle,
                sorttype: "text",
            },
            {
                label: 'Size',
                name: 'size',
                width: 150,
                align: 'center',
                // formatter: formatTitle,
                sorttype: "text",
            },
            {
                label: 'Batch Quantity',
                name: 'batch_total_weight',
                width: 200,
                align: 'right',
                search: false,
                // formatter: formatTitle,
                sorttype: "text",
            },
            {
                label: 'Batch Rolls',
                name: 'batch_total_items',
                width: 150,
                search: true,
                align: 'center',
                // formatter: formatTitle
            },
            {
                label: 'Total Stock Weight',
                name: 'gs_total_weight',
                width: 200,
                search: false,
                align: 'right',
                // formatter: formatTitle
            },
            {
                label: 'Total Stock Rolls',
                name: 'gs_total_items',
                search: false,
                width: 150,
                align: 'center',
                // formatter: formatTitle
            },
            {
                label: 'Total Delivered Quantity',
                name: 'gs_total_delivered_weight',
                search: false,
                width: 200,
                align: 'right',
                // formatter: formatTitle
            }

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
            url: API_URL + "/report/batch_wise",
            datatype: ajax_data_type,
            type: 'get',
            success: function (result) {
                let batch_qty = 0,
                    stock_qty = 0;
                let data = result.data;
                // console.log(result.data);
                for (let item of data) {
                    item.item_detail = item.item_detail ? JSON.parse(item.item_detail) : [];
                    item.batch_detail = item.batch_detail ? JSON.parse(item.batch_detail) : [];

                    batch_qty += item.batch_detail.total_weight ? Number(item.batch_detail.total_weight) : 0;
                    stock_qty += item.gs_total_stock_weight ? item.gs_total_stock_weight : 0;

                    let status = '';
                    if (item.delivery_confirmed) {
                        status = "Delivered";
                    }
                    else {
                        status = (item.gs_total_stock_items >= item.batch_detail.no_of_items ) ? 'Ready' : 'Running';
                    }

                    gridArrayData.push({
                        buyer_name: item.item_detail.buyer_name ? item.item_detail.buyer_name : 'N/A',
                        order_no: item.item_detail.order_no ? item.item_detail.order_no : 'N/A',
                        color: item.item_detail.color ? item.item_detail.color : 'N/A',
                        size: item.item_detail.size ? item.item_detail.size : 'N/A',
                        style_no: item.item_detail.style_no ? item.item_detail.style_no : 'N/A',
                        batch_no: item.batch_no ? item.batch_no : 'N/A',
                        batch_total_weight: item.batch_total_weight ? item.batch_total_weight : '00',
                        batch_total_items: item.batch_total_items ? item.batch_total_items : '0',
                        location: item.location ? item.location : 'N/A',

                        gs_total_items: item.gs_total_items ? item.gs_total_items : '0',
                        gs_total_weight: item.gs_total_weight ? item.gs_total_weight : '00',

                        gs_total_stock_items: item.gs_total_stock_items ? item.gs_total_stock_items : '0',
                        gs_total_stock_weight: item.gs_total_stock_weight ? item.gs_total_stock_weight : '00',

                        gs_total_delivered_weight: item.gs_total_delivered_weight ? item.gs_total_delivered_weight : '00',

                        status: status
                    });

                }

                // console.log(batch_qty);
                // console.log('-------');
                // console.log(stock_qty);
                $(document).find("#batch_qty").text(batch_qty.toFixed(2));
                $(document).find("#stock_qty").text(stock_qty.toFixed(2));
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
            fileName: `${date}-${month}-${year}_${hours}-${minute}-${second}-batch_wise_report.xlsx`,
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