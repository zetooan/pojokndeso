$(document).ready(function() {
//Slide Beranda
	function buttonSlideBeranda(hit){
			hit--; 
			buttonSlide = '<div class="carousel-indicators"><button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>';
			var i = 1;
			while(i <= hit+1){
				buttonSlide += '<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="'+i+'"';
				i++;
				buttonSlide += ' aria-label="Slide '+i+'"></button>';
			}
			$('#buttonslideberanda').html(buttonSlide);
	}
	function gambarDanCaptionBeranda (hit){
			var ga = '<div class="carousel-inner"><div class="carousel-item active height-corousel"><img src="'+data_wisata.photo[0]+'" class="w-100"><div class="container"><div class="carousel-caption text-start cap-fosi"><h3>'+data_wisata.judul[0]+'</h3><p>'+data_wisata.alamat[0]+'</p></div></div></div>';
			var i = 1;
			while(i <= hit){
				ga += '<div class="carousel-item height-corousel"><img src="'+data_wisata.photo[i]+'" class="w-100"><div class="container"><div class="carousel-caption text-start cap-fosi"><h3>'+data_wisata.judul[i]+'</h3><p>'+data_wisata.deskripsi[i]+'</p></div></div></div>';
				i++;
			}
			$('#gambarslideberanda').html(ga);
	}
	var hit = data_wisata.judul.length - 1;
	buttonSlideBeranda(hit);
	gambarDanCaptionBeranda(hit);
//End Slide Beranda
//Berita Terkini
	function beritaTerkini(hit){
		var berita = '<div class="col-md-6 mb-3"><div class="card"><div class="row"><div class="col-6"><img src="'+data_wisata.photo[hit]+'" class="card-img-top" alt="Berita Terkini '+hit+'"></div><div class="col-6"><div class="card-body"><p class="card-text">'+data_wisata.deskripsi[hit]+'</p></div></div></div></div></div>';
		var i = 1;
		while(hit >= i){
			hit--;
			berita += '<div class="col-md-6 mb-3"><div class="card"><div class="row"><div class="col-6"><img src="'+data_wisata.photo[hit]+'" class="card-img-top" alt="Berita Terkini '+hit+'"></div><div class="col-6"><div class="card-body"><p class="card-text">'+data_wisata.deskripsi[hit]+'</p></div></div></div></div></div>';
		}
		$('#tampilBeritaTerkini').html(berita);
	}
	beritaTerkini(hit);
//End Berita Terkini
//Wisata Popupler
	function wisataPopuler(hit){
		var wisataPopuler = '<div class="col-md-6 mb-3"><div class="card"><div class="row"><div class="col-6"><img src="'+data_wisata.photo[hit]+'" class="card-img-top" alt="Berita Terkini '+hit+'"></div><div class="col-6"><div class="card-body"><p class="card-text">'+data_wisata.deskripsi[hit]+'</p></div></div></div></div></div>';
		var i = 1;
		while(hit >= i){
			hit--;
			wisataPopuler += '<div class="col-md-6 mb-3"><div class="card"><div class="row"><div class="col-6"><img src="'+data_wisata.photo[hit]+'" class="card-img-top" alt="Berita Terkini '+hit+'"></div><div class="col-6"><div class="card-body"><p class="card-text">'+data_wisata.deskripsi[hit]+'</p></div></div></div></div></div>';
		}
		$('#tampilWisataPopuler').html(wisataPopuler);
	}
	wisataPopuler(hit);
//End Wisata Popupler
});