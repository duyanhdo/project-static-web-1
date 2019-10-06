$(function() {
		//Lấy ID từ URL
		const id = document.URL.slice(-1);
		console.log(id);	

		$.getJSON('data.json', function(data) {
			$('.breadcrumb').html(`
				<div class="container">
				<span class="breadcrumb-item"><a href="index.html">Trang chủ</a></span>
				<span class="breadcrumb-item" aria-current="page">Dịch Vụ</span>
				<span class="breadcrumb-item" aria-current="page">Nha Khoa Thẩm Mỹ</span>
				<span class="breadcrumb-item active" aria-current="page">${data[id].link}</span>
				</div>`)
			$('.srvs__banner').html(`<img src="images/data/${data[id].banner}" class="img-fluid">`)
			// Đổ dữ liệu vào Concept
			$('#title1').append(`<div class="titleContent">${data[id].heading1}</div>`);
			$('.srvs__concept--content').append(`
				<p class="contentParagraph">
				${data[id].pgh1}
				</p>
				<p class="contentParagraph">
				${data[id].pgh2}
				</p>
				<div class="contentImg">
				<img class="img-fluid" src="images/data/${data[id].img1}">
				<p class="contentImg--subtitle">${data[id].subImg1}</p>
				</div>
				<p class="contentParagraph">
				${data[id].pgh3}
				</p>
				`);
		// Đổ dữ liệu vào Case
		$('#title2').append(`<div class="titleContent">${data[id].heading2}</div>`);

		data[id].case.forEach(function(element,index) {
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
		$('#title3').append(`<div class="titleContent">${data[id].heading3}</div>`);
		data[id].price.forEach(function(element,index) {
			$('tbody').append(`
				<tr>
				<td>${element.service}</td>
				<td>${element.unit}</td>
				<td>${element.cost}</td>
				</tr>
				`)
		})

		// Đổ dữ liệu vào Steps
		$('#title4').append(`<div class="titleContent">${data[id].heading4}</div>`);
			// 6 bước (ảnh)
			data[id].steps.forEach(function(element,index) {
				$('.stepImg').append(`
					<div class="stepsCircle circle-${index} text-center">
					<p class="circleText">${element.step}</p>
					</div>
					`) 
			})
			// 6 bước (chi tiết)
			data[id].dentail.forEach(function(element,index) {
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
		$('#title5').append(`<div class="titleContent">${data[id].heading5}</div>`);
		// Đổ dữ liệu vào Question 
		$('#title6').append(`<div class="titleContent">${data[id].heading6}</div>`);

		data[id].questions.forEach(function(element,index) {
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


