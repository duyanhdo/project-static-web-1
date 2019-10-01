$(function() {

	$.getJSON('data.json', function(data) {
		console.log(data);
		let nano5s = data[0].nano5s;
		// Đổ dữ liệu vào Banner
		$('.srvs__banner').append(`<img src="images/data/${nano5s[0].banner}" class="img-fluid">`);

		// Đổ dữ liệu vào Concept
		$('#title1').append(`<div class="titleContent">${nano5s[0].heading1}</div>`);
		$('.srvs__concept--content').append(`
			<p class="contentParagraph">
			${nano5s[0].pgh1}
			</p>
			<p class="contentParagraph">
			${nano5s[0].pgh2}
			</p>
			<div class="contentImg">
			<img class="img-fluid" src="images/data/${nano5s[0].img1}">
			<p class="contentImg--subtitle">${nano5s[0].subImg1}</p>
			</div>
			<p class="contentParagraph">
			${nano5s[0].pgh3}
			</p>
			`);
		// Đổ dữ liệu vào Case
		$('#title2').append(`<div class="titleContent">${nano5s[0].heading2}</div>`);

		nano5s[0].case.forEach(function(element,index) {
			$('.caseRow').append(`
				<div class="col-12 col-md-6 col-lg-4 caseCol">
				<div class="card caseCard border-0">
				<img src="images/data/${element.caseImg}" alt="răng gãy vỡ, sứt mẻ lớn" class="card-img-top caseImg">
				<div class="card-title mb-0 caseImgText">
				<h5 class="caseImgName mb-0">${element.caseImgName}</h5>
				</div>
				</div>                  
				</div>
				`)
		})

		// Đổ dữ liệu vào Price
		$('#title3').append(`<div class="titleContent">${nano5s[0].heading3}</div>`);
		nano5s[0].price.forEach(function(element,index) {
			$('tbody').append(`
				<tr>
				<td>${element.service}</td>
				<td>${element.unit}</td>
				<td>${element.cost}</td>
				</tr>
				`)
		})

		// Đổ dữ liệu vào Steps
		$('#title4').append(`<div class="titleContent">${nano5s[0].heading4}</div>`);
			// 6 bước (ảnh)
			nano5s[0].steps.forEach(function(element,index) {
				$('.stepImg').append(`
					<div class="stepsCircle circle-${index} text-center">
					<p class="circleText">${element.step}</p>
					</div>
					`) 
			})
			// 6 bước (chi tiết)
			nano5s[0].dentail.forEach(function(element,index) {
				$('.stepDentail').append(`
					<div>
					<h5 class="dentail-Title">
					${element.dTitle}
					</h5>
					<p class="dentail-Content">
					${element.dContent}
					</p>
					</div>
					`)
			})
		// Đổ dữ liệu vào Reason
		$('#title5').append(`<div class="titleContent">${nano5s[0].heading5}</div>`);
		// Đổ dữ liệu vào Question 
		$('#title6').append(`<div class="titleContent">${nano5s[0].heading6}</div>`);

		nano5s[0].questions.forEach(function(element,index) {
			$('.questionDentail').append(`
				<div class="bigQuest">
				<h5 class="question-Title">
				${element.ask}
				</h5>
				<p class="question-Content">
				${element.asw}
				</p>
				</div>
				`)
		})
	});
	
});