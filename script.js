function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do');
    $('#currentDay').text(currentHeaderDate);
}

var timeSlot = [
    {
        id: '0',
        hour: '09',
        time: '09',
        meridiem: 'am',
        reminder: ''
    },
    {
        id: '1',
        hour: '10',
        time: '10',
        meridiem: 'am',
        reminder:''
    },
    {
        id: '2',
        hour: '11',
        time: '11',
        meridiem: 'am',
        reminder: ''
    },
    {
        id: '3',
        hour: '12',
        time: '12',
        meridiem: 'pm',
        reminder:''
    },
    {
        id: '4',
        hour: '01',
        time: '13',
        meridiem: 'pm',
        reminder: ''
    },
    {
        id: '5',
        hour: '02',
        time: '14',
        meridiem: 'pm',
        reminder:''
    },
    {
        id: '6',
        hour: '03',
        time: '15',
        meridiem: 'pm',
        reminder: ''
    },
    {
        id: '7',
        hour: '04',
        time: '16',
        meridiem: 'pm',
        reminder:''
    },
    {
        id: '8',
        hour: '05',
        time: '17',
        meridiem: 'pm',
        reminder: ''
    },
]


timeSlot.forEach(function(thisHour) {
    var slotRow = $('<form>').attr({
        'class': 'row'
    });
    $('container').append(slotRow);

    var slotField = $('<div>')
        .text(`${thisHour.hour}${thisHour.meridiem}`)
        .attr({
            'class': 'col-md-2-hour'
        });
    
    var slotContent = $('<div>')
        .attr({
            'class': 'col-md-9 description p-0'
        });

    var userPlan = $('<textarea>');
    slotContent.append(userPlan);
    userPlan.attr('id', thisHour.id);
    if (thisHour.time < moment().format("HH")) {
        userPlan.attr ({
            'class': 'past',
        })
    } else if (thisHour.time === moment().format('HH')) {
        userPlan.attr({
            'class': 'future'
        })
    }
    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var savePlan = $("<button>")
        .attr({
            'class': 'col-md-1 saveBtn'
        });
        savePlan.append(saveButton);
        slotRow.append(slotField, slotContent, savePlan);
})

function saveReminders() {
    localStorage.setItem('timeSlot', JSON.stringify(timeSlot));
}

function displayReminders() {
    timeSlot.forEach(function (_thisHour) {
        $(`#${_thisHour.id}`).val(_thisHour.reminder);
    })
}

function init() {
    var storedPlan = JSON.parse(localStorage.getItem('timeSlot'));

    if (storedPlan) {
        timeSlot = storedPlan;
    }
    saveReminders();
    displayReminders();
}

$('.saveBtn').JSON('click', function(event) {
    event.preventDefault();
    var saveIndex = $(this).siblings('description').children('future').attr('id');
    
})

getHeaderDate();

init();
