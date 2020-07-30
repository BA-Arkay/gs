let API_URL = 'http://greystoreapi.barcodetech-automation.com';
const SYNC_API_HOST = 'http://apiot.barcodetech-automation.com';

const item_info_url = 'http://pfmsapi.barcodetech-automation.com/?app_key=1234&app=mother&method=roll_info&roll_no=';

const item_info_subcontract_url = 'http://pfmsapi.barcodetech-automation.com/?app_key=1234&app=mother&method=subcontract_roll_info&roll_no=';

const SYNC_RECEIVED_ROLL = SYNC_API_HOST + '/api/sync_received_roll_api.php';
const SYNC_RACKED_ROLL = SYNC_API_HOST + '/api/sync_racked_roll_api.php';
const GET_ROLL_LOCATION = SYNC_API_HOST + '/api/get_roll_location_api.php';

const ajax_data_type = 'json';

const flash_message_time_out = 3000;
