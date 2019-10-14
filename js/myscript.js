var movies = JSON.parse(film);


console.table(movies)


$(document).ready(function(){
	var i;
	for (i=0; i<movies.length; i++){
		$(".insert-content").append(`
			<div class="wrapper p-2 col-lg-6 bg-dark">
				<div class="row h-100 no-gutters">
					<div class="col-lg-6 bg-black image-container p-3 a1">
						<img src="${movies[i].img}" alt="">		
					</div>
				
					<div class="text-container col-lg-6 d-flex flex-column text-white bg-black text-justify py-3 pr-3 a2">

						<h2>${movies[i].FilmName}</h2>
						<p class="overflow-auto">${movies[i].Description}</p>
						<div class="container d-flex flex-grow-1 justify-content-end align-items-end a3">
							<div class="col-md-6"> 
								 <button id="like-click-${movies[i].id}" class="like bg-success text-white mr-3">Like &#x1f44d;</button>
							</div>
							<div class="circle rounded-circle bg-success">
								<p id="like-output-${movies[i].id}" class="m-0">0</p>
							</div>
						</div>
					</div>
				</div>
			</div>

		`);

   }
   $(".like").on("click",function(){
   		for (i=0; i<movies.length; i++) {
   			if ($(this).attr("id") == "like-click-" + movies[i].id) {
   				movies[i].likes	+= 1;
   			}
   		$("#like-output-" + movies[i].id).text(movies[i].likes);
   		}
   });


























// --------------------------------------sort-----------------------------------
	// $(".a1 .a2 .a3").on("change", function(){
	// var select=$("#info").val();
	// 		$(".a1,.a2,.a3").hide();
	// 			if (select=="all") {
	// 				$(".a1,.a2,").show(); 
	// 		} else { 
	// 				$(`.${select}`).show();
	
// ----------------------------like--------------------------------------------
// 								function LikeMe() {
// 								var like=document.getElementsByClassName("like")	
// 								console.log(i)

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
							                // }

							   


							      // document.getElementsByClassName("like").onclick = LikeMe;
 })


























