let API_URL = 'http://epyllion_store_api.barcode';
const SYNC_API_HOST = 'http://localhost/BA-Sync_Module';

const item_info_url = 'http://localhost/pfms_mother_api/?app_key=1234&app=mother&method=roll_info&roll_no=';

const item_info_subcontract_url = 'localhost/pfms_mother_api/?app_key=1234&app=mother&method=subcontract_roll_info&roll_no=';

const batch_info_url = 'http://batch.barcodetech-automation.com/batches/get/bybatch/';

const batch_production_info_url = 'http://localhost/pfms_mother_api/?app_key=1234&app=mother&method=batch_production&batch_no=';

const OV_HOST = `http://epyllion_overview`;
const EP_HOST = `http://epyllion_requisition`;

const SYNC_RECEIVED_ROLL = SYNC_API_HOST + '/api/sync_received_roll_api.php';
const SYNC_RACKED_ROLL = SYNC_API_HOST + '/api/sync_racked_roll_api.php';
const GET_ROLL_LOCATION = SYNC_API_HOST + '/api/get_roll_location_api.php';

const ajax_data_type = 'json';

const flash_message_time_out = 3000;