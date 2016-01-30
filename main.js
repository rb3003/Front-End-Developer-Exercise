main ={};

var task = function(name, date, assignee){
    return {"name": name, "date": date, "assigned": assignee
    };
};

main.tasks = [
    new task("Test Task #1", "12/01/2012", "John Doe" ),
    new task("Test Task #2", "12/02/2012", "John Doe" ),
    new task("Test Task #3", "12/03/2012", "John Doe" ),
    new task("Test Task #4", "12/04/2012", "John Doe" ),
    new task("Test Task #5", "12/05/2012", "John Doe" ),
    new task("Test Task #6", "12/06/2012", "John Doe" ),
    new task("Test Task #7", "12/07/2012", "John Doe" )
];

$('#submitButton').click(function(){
    if($('#name').val().length > 0){
        var date = new Date($('#date').val());
        var formattedDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
        main.tasks.push(new task($('#name').val(), formattedDate, $('#assigned').val() ));
        loadTask()
    }
});


$( document ).ready(function() {
    loadTask()
});

function loadTask(){
    $('tr').remove();
    main.tasks.forEach(function (task){
        $('#taskTable tbody:last-child').append("<tr><td>" + task.name +"</td><td class'pull-left'>" + task.date +"</td><td class'pull-right'>" + task.assigned +"</td></tr>");
    });
};