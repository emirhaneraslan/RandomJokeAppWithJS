class Ekran {
    constructor() {
this.sakaGetirBtn = document.querySelector('#saka-getir-button')
//Arrow functionların kendi this'i yoktur. Global parentında ne varsa onu alır. Arrow functionlarda herhangi bir this olmadığı için bunun çağrıldığı yerdeki ekran nesnesini kullanıyor. O yüzden this.sakaGetir dediğimizde bu fonksiyonu görüp erişebiliyor.
this.sakaGetirBtn.addEventListener('click',()=>this.sakaGetir())
//Aşağıdaki şekildede yapabilirdik.
// this.sakaGetirBtn.addEventListener('click',this.sakaGetir.bind(this))
    }

    //Asenkron olacak çünkü internete çıkıp arama yapacağız.
    async sakaGetir () {
        const rastgeleResim = await new UnsplashApi().randomResimGetir()
        const rastgeleSaka = await new JokeApi().randomSakaGetir()
        //Apimiz çalışmıyor şu anda.
        //const ceviri = await new TraslateApi(rastgeleSaka).ceviriYap()

        const tumSonuclar = {
            rastgeleResim:rastgeleResim,
            rastgeleSaka:rastgeleSaka,
            //ceviri:ceviri
        }

        this.ekranaSonucuYazdir(tumSonuclar)
    }
    //https://bulma.io/images/placeholders/1280x960.png

    ekranaSonucuYazdir (sonuclar) {
        document.querySelector('.sonuc').innerHTML=`<div class="card">
        <div class="card-image">
          <figure class="image is-16by9">
            <img src="${sonuclar.rastgeleResim}" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4 has-text-danger pb-4">${sonuclar.rastgeleSaka}</p>
            </div>
          </div>
        </div>
        <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4 has-text-primary pb-4">Çevirisi Yapılmış Şaka</p>
              </div>
            </div>
          </div>
      </div>`
    }
}