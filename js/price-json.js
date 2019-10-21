$(function() {
	$.getJSON('price.json', function(data) {
			console.log(data);
			let free = data[0].free;			
			free.forEach(function(element, index) {
				$('#free').append(`
				<tr>
					<td>${element.service}</td>
					<td>${element.unit}</td>
					<td>${element.cost}</td>
				</tr>
				`)
			});

			let bocrang = data[0].bocrang;
			bocrang.forEach(function(element, index) {
				$('#bocrang').append(`
					<tr>
					<td>${element.service}</td>
					<td>${element.unit}</td>
					<td>${element.cost}</td>
					</tr>
					`)
			});
			let niengrang = data[0].niengrang;
			niengrang.forEach(function(element, index) {
				$('#niengrang').append(`
					<tr>
					<td>${element.service}</td>
					<td>${element.unit}</td>
					<td>${element.cost}</td>
					</tr>
					`)
			});
			let implant = data[0].implant;
			implant.forEach(function(element, index) {
				$('#implant').append(`
					<tr>
					<td>${element.service}</td>
					<td>${element.unit}</td>
					<td>${element.cost}</td>
					</tr>
					`)
			});
			let implant_all = data[0].implant_all;
			implant_all.forEach(function(element, index) {
				$('#implant_all').append(`
					<tr>
					<td>${element.service}</td>
					<td>${element.unit}</td>
					<td>${element.cost}</td>
					</tr>
					`)
			});
			let chinhhinh = data[0].chinhhinh;
			chinhhinh.forEach(function(element, index) {
				$('#chinhhinh').append(`
					<tr>
					<td>${element.service}</td>
					<td>${element.unit}</td>
					<td>${element.cost}</td>
					</tr>
					`)
			});
			let taytrang = data[0].taytrang;
			taytrang.forEach(function(element, index) {
				$('#taytrang').append(`
					<tr>
					<td>${element.service}</td>
					<td>${element.unit}</td>
					<td>${element.cost}</td>
					</tr>
					`)
			});
			let taohinh = data[0].taohinh;
			taohinh.forEach(function(element, index) {
				$('#taohinh').append(`
					<tr>
					<td>${element.service}</td>
					<td>${element.unit}</td>
					<td>${element.cost}</td>
					</tr>
					`)
			});
			let caorang = data[0].caorang;
			caorang.forEach(function(element, index) {
				$('#caorang').append(`
					<tr>
					<td>${element.service}</td>
					<td>${element.unit}</td>
					<td>${element.cost}</td>
					</tr>
					`)
			});
			let nhorang = data[0].nhorang;
			nhorang.forEach(function(element, index) {
				$('#nhorang').append(`
					<tr>
					<td>${element.service}</td>
					<td>${element.unit}</td>
					<td>${element.cost}</td>
					</tr>
					`)
			});
			let dieutrituy = data[0].dieutrituy;
			dieutrituy.forEach(function(element, index) {
				$('#dieutrituy').append(`
					<tr>
					<td>${element.service}</td>
					<td>${element.unit}</td>
					<td>${element.cost}</td>
					</tr>
					`)
			});
			let hanrang = data[0].hanrang;
			hanrang.forEach(function(element, index) {
				$('#hanrang').append(`
					<tr>
					<td>${element.service}</td>
					<td>${element.unit}</td>
					<td>${element.cost}</td>
					</tr>
					`)
			});
			let xuongham = data[0].xuongham;
			xuongham.forEach(function(element, index) {
				$('#xuongham').append(`
					<tr>
					<td>${element.service}</td>
					<td>${element.unit}</td>
					<td>${element.cost}</td>
					</tr>
					`)
			});
			let kimcuong = data[0].kimcuong;
			kimcuong.forEach(function(element, index) {
				$('#kimcuong').append(`
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