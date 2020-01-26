const searchbox = document.getElementById('search-box');
var events;
fetch('./find', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({})})
.then((response) => response.json()).then(data =>{
    events = data;
});


searchbox.addEventListener("keyup", () => {
    console.log(events)
    if(!events){// not loaded yet
        return;
    }
    var filteredEvents = events.filter(e => (e.eventName + e.email + e.locationSpec.locationName + e.eventCreator + e.typeOfGame).match(searchbox.value));

    var box = Array.from(document.getElementById('box').childNodes).filter(c => !c.id).forEach(c =>document.getElementById('box').removeChild(c) )
    filteredEvents.forEach(e =>{
        var box = document.getElementById('box');
        var row = document.createElement('div');
        row.style.display = 'table-row';

        var eNameC = document.createElement('div');
        eNameC.style.display = 'table-cell';
        eNameC.appendChild(document.createTextNode(e.eventName));
        row.appendChild(eNameC);

        var name = document.createElement('div');
        name.style.display = 'table-cell';
        name.appendChild(document.createTextNode(e.eventCreator));
        row.appendChild(name);

        var location = document.createElement('div');
        location.style.display = 'table-cell';
        location.appendChild(document.createTextNode( e.locationSpec.locationName));
        row.appendChild(location);

        var type = document.createElement('div');
        type.style.display = 'table-cell';
        type.appendChild(document.createTextNode(e.typeOfGame));
        row.appendChild(type);

        box.appendChild(row);
    })

});