fetch('http://3.6.93.159:7883/machstatz/get_users')
.then(res => res.json())
.then(data => console.log(data))