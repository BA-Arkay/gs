/* Date Formatter */
function formatDateTime(date = false) {
    var _date,
        _time,
        d = date ? (new Date(date)) : (new Date()),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear(),
        hr = d.getHours(),
        min = d.getMinutes(),
        sec = d.getSeconds();


    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if (hr.length < 2) hr = '0' + hr;
    if (min.length < 2) min = '0' + min;
    if (sec.length < 2) sec = '0' + sec;

    _date = [year, month, day].join('-');
    _time = [hr, min, sec].join(':');
    return _date + '_' + _time;
}



/* for triming last splash */
function trimeSplash(url) {
    let lastChar = url[url.length - 1];
    if (lastChar == '/') {
        url = url.substring(0, url.length - 1);
    }
    else {
        url = url;
    }
    return url;
}



//message with argument passing

function alertMessage(id, message, type, href = "#") {
    $(id).append(`
    <div class="alert alert-${type.toLowerCase()} alert-dismissible">
    <a href="${href}" class="close" data-dismiss="alert" aria-label="close">&times;</a>
    <strong>${type}!</strong> ${message}.
    </div>
    `);
    setTimeout(() => {
        $(id).empty();
    }, flash_message_time_out);
}


//message with object passing 
function alertMessagePro(arg) {
    arg.href = null;
    $(arg.id).append(`
    <div class="alert alert-${arg.message_type} alert-dismissible">
    <a href="${arg.href}" class="close" data-dismiss="alert" aria-label="close">&times;</a>
    ${arg.message}
    </div>
    `);
    setTimeout(() => {
        $(arg.id).empty();
    }, flash_message_time_out);
}

/*  */
function getParamFromUrl(url_string, param) {
    let url = new URL(url_string);
    param = url.searchParams.get(param);
    return param;
}


/*  */
API_URL = trimeSplash(API_URL);
