$(function() {
	$.getJSON('price.json', function(data) {
			console.log(data);
			let free = data[0].free;
			let bocrang = data[0].bocrang;
			let niengrang = data[0].niengrang;
			let implant = data[0].implant;

			free.forEach(function(element, index) {
				$('#free').append(`
				<tr>
					<td>${element.service}</td>
					<td>${element.unit}</td>
					<td>${element.cost}</td>
				</tr>
				`)
			});
			
			bocrang.forEach(function(element, index) {
				$('#bocrang').append(`
					<tr>
					<td>${element.service}</td>
					<td>${element.unit}</td>
					<td>${element.cost}</td>
					</tr>
					`)
			});
			
			niengrang.forEach(function(element, index) {
				$('#niengrang').append(`
					<tr>
					<td>${element.service}</td>
					<td>${element.unit}</td>
					<td>${element.cost}</td>
					</tr>
					`)
			});

			implant.forEach(function(element, index) {
				$('#implant').append(`
					<tr>
					<td>${element.service}</td>
					<td>${element.unit}</td>
					<td>${element.cost}</td>
					</tr>
					`)
			});


	});
	let results = [];
			let compare = {
				service: function(a,b) {
					if (a < b) return -1;
					else if (a > b) return 1;
					else return 0;
				},
				unit: function(a,b) {
					if (a < b) return -1;
					else if (a > b) return 1;
					else return 0;
				},
				cost: function(a,b) {
					return a - b;
				}
			}

});