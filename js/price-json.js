$(function() {
	$.getJSON('price.json', function(data) {
			console.log(data);
			let free = data[0].free;
			let nano5s = data[0].nano5s;
			let veneer = data[0].veneer;
			
			free.forEach(function(element, index) {
				$('#free').append(`
				<tr>
					<td>${element.service}</td>
					<td>${element.unit}</td>
					<td>${element.cost}</td>
				</tr>
				`)
			});
			
			nano5s.forEach(function(element, index) {
				$('#nano5s').append(`
					<tr>
					<td>${element.service}</td>
					<td>${element.unit}</td>
					<td>${element.cost}</td>
					</tr>
					`)
			});
			
			veneer.forEach(function(element, index) {
				$('#veneer').append(`
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