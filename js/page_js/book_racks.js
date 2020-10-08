$(
    $(document).ready(function() {

        const __errorHandling = (title = "Oops...!", description = "Something went wrong. Please try again later!", type = "error", timer = 5000) => {

            Swal.fire({
                title: `${title}`,
                text: `${description}`,
                type: `${type}`,
                showCancelButton: false,
                showConfirmButton: true,
                cancelButtonColor: '#d33',
                timer: `${timer}`
            });
        }

        const __handleJSONResponse = response => {

            return response.json()
                .then(json => {
                    if (response.ok) {
                        return json;
                    } else {
                        return Promise.reject(Object.assign({}, json, {
                            status: response.status,
                            statusText: response.statusText
                        }));
                    }
                });
                
        }
    
        const __handleTextResponse = response => {
    
            return response.text()
                .then(text => {
                    if (response.ok) {
                        return text;
                    } else {
                        return Promise.reject({
                            status: response.status,
                            statusText: response.statusText,
                            err: text
                        });
                    }
                });
                
        }
    
        const __handleResponse = response => {
    
            let contentType = response.headers.get('content-type');
            
            if (contentType.includes('application/json')) {
    
                return __handleJSONResponse(response);
                
            } else if (contentType.includes('text/html')) {
    
                return __handleTextResponse(response);
                
            } else {
    
                throw new Error(`Sorry, content-type ${contentType} not supported`);
                
            }
            
        }

        const __catchError = err => {

            console.log(err);
    
            if (err.status === 400) {
                __errorHandling("Invalid data!", "Input fields must have valid data!", "warning");
            } else if (err.status === 403) {
                __errorHandling("Forbidden!", "Server refused to authorize");
            } else if (err.status === 404) {
                __errorHandling("404!", "Not Found. The file that you are trying to access could not be found");
            } else if (err.status === 405) {
                __errorHandling("Undefined Method!", "The app or method that you trying to access is undefined!");
            } else if (err.status === 500) {
                __errorHandling("Internal Server Error!", "Values could not be stored or The path is undefined!");
            } else {
                __errorHandling("Oops...!", "Uncaught Error. Please check console!");
            }
        }

        const msgObj = {
            "id": '#flashMsg',
            "message": 'Hey',
            "message_type": 'danger',
        }


        $(function() {

            fetch(BUYERS_LIST, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "omit"
            })
            .then(__handleResponse)
            .then(res => {
    
                const parsedBuyers = JSON.parse(res);
    
                const allBuyers = [];
    
                parsedBuyers.forEach(buyer => {
    
                    for(prop in buyer) {
    
                        if(prop == 'id') {
    
                            buyer['id'] = buyer['text'];
                        }
                    }
    
                    allBuyers.push(buyer);
                })
    
                $(document).find('select#buyers').select2({
                    data: allBuyers,
                    allowClear: true,
                    placeholder: '-- Select --',
                    escapeMarkup: function (markup) {
                        return markup;
                    },
                    templateResult: function (d) {
                        return '<span>' + d.text + '</span><small class="text-mutedX d-block subtext">' + d.subText + '</small>';
                    },
                    templateSelection: function (d) {
                        return d.text + (d.subText ? '<small class="text-muted"> , ' + d.subText + '</small>' : '');
                    }
                }).val(null).trigger('change');
            })
            .catch(err => {
                
                console.log(err);
                msgObj.message = err;
                alertMessagePro(msgObj);
            })

            fetch(`${API_URL}/racks/all/racks`, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "omit"
            })
            .then(__handleResponse)
            .then(res => {

                $(document).find('select#racks').select2({
                    data: res.results,
                    allowClear: true,
                    placeholder: '-- Select --',
                    escapeMarkup: function (markup) {
                        return markup;
                    },
                    templateResult: function (d) {
                        return `<span>${d.text}</span>`;
                    },
                    templateSelection: function (d) {
                        return d.text + (d.subText ? '<small class="text-muted"> , ' + d.subText + '</small>' : '');
                    }
                }).val(null).trigger('change');
            })
            .catch(err => {
                
                console.log(err);
                msgObj.message = err;
                alertMessagePro(msgObj);
            })

            fetch(`${API_URL}/racks/index/booked/racks`, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "omit"
            })
            .then(__handleResponse)
            .then(res => {

                if(res) {
                    
                    let rows = '';

                    res.forEach(rack => {
                        rows += `<tr id="${rack.id}"
                                    data-id="${rack.id}"
                                    data-title="${rack.title}"
                                    data-buyer="${rack.buyer}">
                                        <td style="color:#000;">${rack.title}</td>
                                        <td>${rack.buyer}</td>
                                        <td class="text-center">
                                            <div class="btn-group">
                                                <button title="Clear Rack Booking" data-toggle="tooltip" class="btn btn-danger clearRackBooking">
                                                    <i class="fa fa-trash"></i> Clear
                                                </button>
                                            </div>
                                        </td>
                                    </tr>`
                    })

                    $('tbody#assignedRacks').html(rows);
                }
            })
            .catch(err => {
                
                console.log(err);
                msgObj.message = err;
                alertMessagePro(msgObj);
            })
        }())

        $('form#assignBuyerForm').on('submit', function(e) {
            
            e.preventDefault();

            const rack_id = $('select#racks').val();
            const buyer = $('select#buyers').val();

            fetch(`${API_URL}/racks/book_rack`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({rack_id, buyer}),
                credentials: 'omit'
            })
            .then(__handleResponse)
            .then(res => {

                if(res.success) {

                    const {id, title, buyer} = res.data;

                    const row = `<tr id="${id}"
                                    data-id="${id}"
                                    data-title="${title}"
                                    data-buyer="${buyer}">
                                        <td style="color:#000;">${title}</td>
                                        <td>${buyer}</td>
                                        <td class="text-center">
                                            <div class="btn-group">
                                                <button title="Clear Rack Booking" data-toggle="tooltip" class="btn btn-danger clearRackBooking">
                                                    <i class="fa fa-trash"></i> Clear
                                                </button>
                                            </div>
                                        </td>
                                    </tr>`;
                    
                    const msgObj = {
                        "id": '#flashMsg',
                        "message": `${res.message}`,
                        "message_type": "success",
                    }
                    alertMessagePro(msgObj);

                    $('select#racks').val(null).trigger('change');
                    $('select#buyers').val(null).trigger('change');
                    $('tbody#assignedRacks').prepend(row);
                }
            })
            .catch(err => {
                
                console.log(err);
                msgObj.message = err;
                alertMessagePro(msgObj);
            })
        })

        $(document).on('click', 'button.clearRackBooking', function(e) {

            const row = $(this).closest('tr').data();

            fetch(`${API_URL}/racks/clear/rack/booking/${row.id}`, {
                'method': 'GET',
                'mode': 'cors',
                'headers': {
                    'Content-Type': 'application/json'
                },
                'credentials': 'omit'
            })
            .then(__handleResponse)
            .then(res => {
                
                if(res.success) {

                    alert('Rack Cleared Successfully!');
                    $(this).closest('tr').remove();
                }
            })
            .catch(err => {
                
                console.log(err);
                msgObj.message = err;
                alertMessagePro(msgObj);
            })
        })
    })
);

/*
<button title="Clear Rack Assignment" data-toggle="tooltip" class="btn btn-danger clearRackBooking">
    <i class="fa fa-trash"></i> Clear Booking
</button>

<button title="Edit Assigned Rack" data-toggle="tooltip" class="btn btn-primary editRack">
    <i class="fa fa-edit"></i>
</button> 
*/