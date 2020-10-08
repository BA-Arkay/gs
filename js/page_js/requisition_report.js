$(document).ready(function () {
    $("#jqGrid").jqGrid({
        colModel: [
            {
                label: 'Transition Year',
                name: 'knitting_pro_year',
                width: 150,
                align: 'center',
                // formatter: formatTitle,
                sorttype: "text",
            },
            {
                label: 'Transition Month',
                name: 'knitting_pro_month',
                width: 150,
                align: 'center',
                // formatter: formatTitle,
                sorttype: "text",
            },
            {
                label: 'Transition Date',
                name: 'knitting_pro_date',
                width: 200,
                align: 'center',
                // formatter: formatTitle,
                sorttype: "text",
            },
 	    {
             	label: 'Mode of Transaction',
                name: 'mode_of_transaction',
                width: 200,
                align: 'center',
                // formatter: formatTitle,
                sorttype: "text",
            }, 
	    {
             	label: 'Transaction  Code',
                name: 'transaction_code',
                width: 100,
                align: 'center',
                // formatter: formatTitle,
                sorttype: "text",
            },
            {
                label: 'Production Unit',
                name: 'production_unit',
                width: 200,
                align: 'center',
                // formatter: formatTitle,
                sorttype: "text",
            },
            {
                label: 'Order no.',
                name: 'Order',
                width: 200,
                align: 'center',
                // formatter: formatTitle,
                sorttype: "text",
            },
 	{
                label: 'Batch No.',
                name: 'batch_no',
                width: 200,
                align: 'center',
                // formatter: formatTitle,
                sorttype: "text",
            },
            {
                label: 'Roll No',
                name: 'Roll',
                width: 200,
                align: 'center',
                // formatter: formatTitle,
                sorttype: "text",
            },
            {
                label: 'Weight',
                name: 'Weight',
                width: 150,
                align: 'center',
                search: true,
                // formatter: formatTitle,
                sorttype: "text",
            },
	    {
             	label: 'QC Weight',
                name: 'qc_weight',
                width: 150,
                align: 'center',
                search: true,
                // formatter: formatTitle,
                sorttype: "text",
            },
	    {
             	label: 'Rejected Weight',
                name: 'rejected_weight',
                width: 150,
                align: 'center',
                search: true,
                // formatter: formatTitle,
                sorttype: "text",
            },
            {
                label: 'Yarn Spinner',
                name: 'yarn_brand',
                width: 200,
                align: 'center',
                // formatter: formatTitle,
                sorttype: "text",
            },
            {
                label: 'Yarn Lot',
                name: 'yarn_lot',
                width: 200,
                align: 'center',
                // formatter: formatTitle,
                sorttype: "text",
            },
            {
                label: 'Yarn Count',
                name: 'yarn_count',
                width: 200,
                align: 'center',
                // formatter: formatTitle,
                sorttype: "text",
            },

            // {
            //     label: 'Yarn Type',
            //     name: 'yarn_type',
            //     width: 200,
            //     align: 'center',
            //     // formatter: formatTitle,
            //     sorttype: "text",
            // },
            {
                label: 'Fabric Type',
                name: 'fabric_type',
                width: 150,
                search: true,
                align: 'center',
                // formatter: formatTitle
            },
            {
                label: 'Fabric Style',
                name: 'fabric_style',
                width: 350,
                search: true,
                align: 'center',
                // formatter: formatTitle
            },
            {
                label: 'Color',
                name: 'color',
                width: 200,
                search: true,
                align: 'center',
                // formatter: formatTitle
            },
            {
                label: 'Dia',
                name: 'actual_machine_dia',
                width: 150,
                search: true,
                align: 'center',
                // formatter: formatTitle
            },
            {
                label: 'Gauge',
                name: 'machine_gauge',
                width: 150,
                search: true,
                align: 'center',
                // formatter: formatTitle
            },
            {
                label: 'S/L',
                name: 'stitch_length',
                width: 150,
                search: true,
                align: 'center',
                // formatter: formatTitle
            },
            {
                label: 'Finished Width',
                name: 'finished_width',
                search: true,
                width: 150,
                align: 'center',
                // formatter: formatTitle
            },
            {
                label: 'GSM',
                name: 'gsm',
                search: true,
                width: 150,
                align: 'center',
                // formatter: formatTitle
            },
            // {
            //     label: 'Style no',
            //     name: 'style',
            //     width: 150,
            //     search: true,
            //     align: 'center',
            //     // formatter: formatTitle
            // }, 
            {
                label: 'Buyer Name',
                name: 'buyer_name',
                width: 200,
                align: 'center',
                // formatter: formatTitle,
                sorttype: "text",
            },
   	    {
                label: 'Challan No',
                name: 'chalan_no',
                width: 200,
                align: 'center',
                // formatter: formatTitle,
                sorttype: "text",
            },
	    {
                label: 'Sub-contact Party Name',
                name: 'factory_name',
                width: 200,
                align: 'center',
                // formatter: formatTitle,
                sorttype: "text",
            },
            {
                label: 'Location',
                name: 'location',
                width: 200,
                align: 'center',
                // formatter: formatTitle,
                sorttype: "text",
            },
            {
                label: 'Machine No',
                name: 'machine_no',
                width: 200,
                align: 'center',
                // formatter: formatTitle,
                sorttype: "text",
            },
            // {
            //     label: 'Machine Name',
            //     name: 'machine_name',
            //     width: 200,
            //     align: 'center',
            //     // formatter: formatTitle,
            //     sorttype: "text",
            // },
            {
                label: 'Operator Name',
                name: 'operator_name',
                width: 200,
                align: 'center',
                // formatter: formatTitle,
                sorttype: "text",
            },
            {
                label: 'Shift',
                name: 'shift',
                width: 150,
                search: true,
                align: 'center',
                // formatter: formatTitle
            },
            {
                label: 'Knitting Production Date & Time',
                name: 'knitting_pro_date_time',
                width: 250,
                align: 'center',
                // formatter: formatTitle
            },
            {
                label: 'Delivery Date',
                name: 'delivered_at',
                width: 200,
                align: 'center',
                // formatter: formatTitle
            },
            {
                label: 'Delivered by',
                name: 'delivered_by',
                width: 200,
                align: 'center',
                // formatter: formatTitle
            }
        ],

        viewrecords: true, // show the current page, data rang and total records on the toolbar
        autowidth: true,
        shrinkToFit: false,
        height: 400,
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
        let final_yarn_details = null;
        // show loading message
        $("#jqGrid")[0].grid.beginReq();
        $.ajax({
            url: API_URL + "/locatedItem/deliver",
            datatype: ajax_data_type,
            type: 'get',
            success: function (result) {

                for (let data of result) {
                    data.item_detail = JSON.parse(data.item_detail);
                    data.location = (data.location == 'ds-dr-ds-db') ? 'FLOOR' : data.location;
                    data.received_by = data.received_by ? data.received_by : 'Unknown';
                    let shift = null;

                    let empty_yarn_detail = {
                        0: {
                            yc: 'N/A',
                            yb: 'N/A',
                            yt: 'N/A',
                            ys: 'N/A'
                        }
                    };
                    let yarn_count = '';
                    let yarn_lot = '';
                    let yarn_brand = '';
                    let yarn_type = '';
                    let stitch_length = '';
                    let separetor = ' + ';
                    let yarn_details = data.item_detail.all_yarn_details ? data.item_detail.all_yarn_details : empty_yarn_detail;

                    let knitting_pro_date = data.item_detail.display_date ? data.item_detail.display_date : 'N/A';
                    knitting_pro_date = knitting_pro_date.substring(0, 10);
                    let knitting_pro_year = knitting_pro_date.substring(0, 4);
                    let knitting_pro_month = knitting_pro_date.substring(5, 7);
                    for (let single in yarn_details) {
                        yarn_brand = `${yarn_brand != '' ? yarn_brand + separetor : yarn_brand} ${yarn_details[single].yb ? yarn_details[single].yb : ''}`;
                        yarn_lot = `${yarn_lot != '' ? yarn_lot + separetor : yarn_lot} ${yarn_details[single].yl ? yarn_details[single].yl : ''}`;
                        // yarn_type = `${yarn_type } ${yarn_details[single].yt ? yarn_details[single].yt : ''}`;
                        stitch_length = `${stitch_length != '' ? stitch_length + separetor : stitch_length} ${yarn_details[single].ys ? yarn_details[single].ys : ''}`;

                        yarn_count += yarn_details[single].yc + yarn_details[single].yt;
                    }
                    let fabric_style = yarn_count + " " + data.item_detail.fabric_type;


                    if (data.item_detail.shift_id) {
                        if (data.item_detail.shift_id == '1') {
                            shift = 'A'
                        } else if (data.item_detail.shift_id == '2') {
                            shift = 'B'
                        } else if (data.item_detail.shift_id == '3') {
                            shift = 'C'
                        }
                    }


                    gridArrayData.push({
                        Roll: data.item ? data.item : 'N/A',

                        Weight: data.item_detail.weight ? data.item_detail.weight : '00.00',

                        Order: data.item_detail.order_no ? data.item_detail.order_no : 'N/A',

                        buyer_name: data.item_detail.buyer_name ? data.item_detail.buyer_name : 'N/A',

                        color: data.item_detail.color ? data.item_detail.color : 'N/A',

                        color_type: data.item_detail.color_type ? data.item_detail.color_type : 'N/A',

                        actual_machine_dia: data.item_detail.actual_machine_dia ? data.item_detail.actual_machine_dia : 'N/A',

                        machine_gauge: data.item_detail.machine_gauge ? data.item_detail.machine_gauge : 'N/A',

                        finished_width: data.item_detail.finished_width,

                        gsm: data.item_detail.gsm ? data.item_detail.gsm : 'N/A',

                        style: data.item_detail.style_no ? data.item_detail.style_no : 'N/A',

                        fabric_type: data.item_detail.fabric_type ? data.item_detail.fabric_type : 'N/A',

                        shift: shift ? shift : 'N/A',

                        /* new  */
                        production_unit: data.item_detail.machine_code ? data.item_detail.machine_code : 'N/A',

                        machine_no: data.item_detail.machine_no ? data.item_detail.machine_no : 'N/A',

                        machine_name: data.item_detail.machine_name ? data.item_detail.machine_name : 'Unknown',

                        operator_name: data.item_detail.operator_name ? data.item_detail.operator_name : 'Unknown',

                        knitting_pro_date_time: data.item_detail.created ? data.item_detail.created : 'N/A',

                        knitting_pro_date: knitting_pro_date ? knitting_pro_date : 'N/A',

                        knitting_pro_year: knitting_pro_year ? knitting_pro_year : 'N/A',

                        knitting_pro_month: knitting_pro_month ? knitting_pro_month : 'N/A',
			batch_no : data.batch_no ? data.batch_no : 'N/A', 


                        fabric_style: fabric_style ? fabric_style : 'N/A',

                        yarn_count: yarn_count ? yarn_count : 'N/A',

                        yarn_lot: yarn_lot ? yarn_lot : 'N/A',

                        yarn_type: yarn_type ? yarn_type : 'N/A',

                        yarn_brand: yarn_brand ? yarn_brand : 'N/A',

                        stitch_length: stitch_length ? stitch_length : 'N/A',

                        /* new */
			chalan_no : data.item_detail.chalan_no ? data.item_detail.chalan_no : 'N/A', 
			factory_name : data.item_detail.factory_name ? data.item_detail.factory_name : 'N/A',

			qc_weight : data.item_detail.qcweight ? data.item_detail.qcweight : 0.0 ,
			rejected_weight : data.item_detail.defected_weight ? data.item_detail.defected_weight : 0.0 ,
			mode_of_transaction : 'Issue-G',
			transaction_code : 203,
			uom : 'KG',


                        delivered_by: data.delivered_by ? data.delivered_byboxed_by : 'UNKNOWN',
                        delivered_at: data.delivered_at ? data.delivered_at : 'N/A',

                        location: data.location ? data.location : 'N/A',
                        /*  CreationDate: item.creation_date,
                         ViewCount: item.view_count,
                         AnswerCount: item.answer_count */
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
    $("#export").on("click", function () {
        $("#jqGrid").jqGrid("exportToExcel", {
            includeLabels: true,
            includeGroupHeader: true,
            includeFooter: true,
            fileName: `${date}-${month}-${year}_${hours}-racking_report.xlsx`,
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
