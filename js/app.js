$(function (){
	//ganti judul
	$("#judul").text("Resep Bala-bala");
	
	//tambah list
    $("#bahan").append("<li>Sayuran</li>");

	//tambah bahan baru
	//bila user klik tombol tambah
	$("#tambah") .click(function(){
		//ambil dulu nilai dari bahan baru
		var bahan = $("#bahanbaru") .val();

		//jangan tambahkan list bila ada bahan kosong
		if(bahan.trim() =="") return false

		//tambahkan data bahan baru ke list
		$("#bahan") .append("<li>" + bahan + "</li>");
		//bersihkan input
		$("#bahanbaru").val("").focus();
	})

	//jalankan aksi klik bila tombol enter ditekan
	$("#bahanbaru") .keypress(function(e){
		var key = e.which;
		if (key==13) {
			$("#tambah") .click();
		}
	})


})
