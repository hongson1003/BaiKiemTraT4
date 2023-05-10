var table = document.createElement('table');
var body = document.getElementsByTagName('body')[0];
body.appendChild(table);
table.innerHTML = `
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Avatar</th>
        <tr>
    </thead>

    <tbody>

    </tbody>

`;
var url = 'https://645b2ab1a8f9e4d6e761585c.mockapi.io/hongson/myKiemTra';
fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        for (var i=1; i<=data.length;i++ ){
            var row = table.insertRow();
            var cell0 = row.insertCell();
            cell0.innerHTML = `${data[i-1].id}`;
            
            var cell1 = row.insertCell();
            cell1.innerHTML = `${data[i-1].name}`;
            

            var cell2 = row.insertCell();
            cell2.innerHTML = `${data[i-1].price}`;
            

            var cell3 = row.insertCell();
            cell3.innerHTML = `
                <img src="${data[i-1].imager_link}"></img>
            `;
        

        }

    })