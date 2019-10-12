var movies = JSON.parse(film);


console.table(movies)


$(document).ready(function(){
	var i;
	for (i=0; i<movies.length; i++){
		$(".insert-content").append(`
			<div class="wrapper col-lg-6 col-md-12">
				<div class="row h-100">
					<div class="col-lg-6 col-md-12 text-white-50 bg-black text-justify a1">
						<div>
							<img src="${movies[i].img}" alt="">		
						</div>
					</div>
				
					<div class="col-lg-6 col-md-12 d-flex flex-column text-grey bg-black text-justify h-100 a2">

						<h2>${movies[i].FilmName}</h2>
						<p>${movies[i].Description}</p>
						<div class="container d-flex flex-grow-1 justify-content-end align-items-end a3">
							<div class="col-md-6"> 
								 <button class="like bg-success text-white mr-3">Like &#x1f44d;</button>
							</div>
							<div class="circle rounded-circle bg-success">
								<p></p>
							</div>
						</div>
					</div>
				</div>
			</div>

		`);

// --------------------------------------sort-----------------------------------
	// $(".a1 .a2 .a3").on("change", function(){
	// var select=$("#info").val();
	// 		$(".a1,.a2,.a3").hide();
	// 			if (select=="all") {
	// 				$(".a1,.a2,").show(); 
	// 		} else { 
	// 				$(`.${select}`).show();
	
// ----------------------------like--------------------------------------------
							// 	function LikeMe() {
							// 	document.getElementsByClassName("like")	
							// 	var a=like
							// 	console.log(i)

							// 	yes.onclick = function(){
							//     box.style.backgroundColor = "red";
							// 	}

							// 	no.onclick = function(){
							//     box.style.backgroundColor = "green";
							// 	}
								

							// 	}	

							// var elementClicked;
							// $(".like").click(function(){
							//    elementClicked = true;
							// });
							// if( elementClicked != true ) {
							//     alert("element not clicked");
							// }else{
							//     alert("element clicked");
							// }


							// document.getElementsByClassName("like").onclick = LikeMe;

								// var val;
							 //        $(document).ready(function () {
							 //            $(".like").click(function () {
							 //                val = 1;
							 //                get();
							 //                });
							 //                });
							 //          function get(){
							 //            if (val == 1){
							 //                alert(val);
							 //                }

							      }
 })


























