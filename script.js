//hafiza oyunun kodlari asagida bulunmaktadir.
document.addEventListener('DOMContentLoaded', () => {
  /*hafiza oyununda kullanilacak resimler yani secenekler -kart olarak da dusunulebilir- bir dizi icine yerlestirilir
resimlerin dizide arka arkaya iki kez bulunması oyunun amaci olan ayni resimleri eslestirmektir	*/
  const kartlarDizi = [                     //resimler diziye yerlestirilir
    {
      name: 'domates',
      img: 'resimler/domates.png'
    },
    {
      name: 'elma',
      img: 'resimler/elma.png'
    },
    {
      name: 'fındık',
      img: 'resimler/fındık.png'
    },
    {
      name: 'kiraz',
      img: 'resimler/kiraz.png'
    },
    {
      name: 'muz',
      img: 'resimler/muz.png'
    },
    {
      name: 'portakal',
      img: 'resimler/portakal.png'
    },
    {
      name: 'domates',
      img: 'resimler/domates.png'
    },
    {
      name: 'elma',
      img: 'resimler/elma.png'
    },
    {
      name: 'fındık',
      img: 'resimler/fındık.png'
    },
    {
      name: 'kiraz',
      img: 'resimler/kiraz.png'
    },
    {
      name: 'muz',
      img: 'resimler/muz.png'
    },
    {
      name: 'portakal',
      img: 'resimler/portakal.png'
    }
  ]
  kartlarDizi.sort(() => 0.5 - Math.random())             //diziye yerlestirilen resimleri rastgele siralar

  const oyunAlani = document.querySelector('.oyunAlani')
  const sonucGoster = document.querySelector('#sonuc')
  let secilenKart = []
  let secilenKartId = []
  let bulunanKartlar = []

  //oyun alani olusturulur
  function oyunuOlustur() {
    for (let i = 0; i < kartlarDizi.length; i++) {
      const kart = document.createElement('img')
      kart.setAttribute('src', 'resimler/kapak.png')
      kart.setAttribute('data-id', i)
      kart.addEventListener('click', kartiDondur)
      oyunAlani.appendChild(kart)
    }
  }

  //secilen kartlar arasinda eslesme olup olmadigini kontrol etmek icin gerekli kodlar
  function eslesmeKontrol() {
    const kartlar = document.querySelectorAll('img')
    const ilkSecilenId = secilenKartId[0]
    const ikinciSecilenId = secilenKartId[1]
    
    if(ilkSecilenId == ikinciSecilenId) {           //aynı karta iki kez arka arkaya tiklanma durumudur
      kartlar[ilkSecilenId].setAttribute('src', 'resimler/kapak.png')
      kartlar[ikinciSecilenId].setAttribute('src', 'resimler/kapak.png')
      alert('Aynı karta tıkladınız!!')
    }
    else if (secilenKart[0] === secilenKart[1]) {    //aynı karttan iki tane arka arkaya bulunma yani eşleşme durumudur
      alert('Tebrikler bir eslesme buldunuz!!')
      kartlar[ilkSecilenId].setAttribute('src', 'resimler/beyaz.png')
      kartlar[ikinciSecilenId].setAttribute('src', 'resimler/beyaz.png')
      kartlar[ilkSecilenId].removeEventListener('click', kartiDondur)
      kartlar[ikinciSecilenId].removeEventListener('click', kartiDondur)
      bulunanKartlar.push(secilenKart)
    } else {
      kartlar[ilkSecilenId].setAttribute('src', 'resimler/kapak.png')    //son sonuç olan farkli resimleri bulma durumudur
      kartlar[ikinciSecilenId].setAttribute('src', 'resimler/kapak.png')
      alert('Maalesef, iki resim ayni degil!')
    }
    secilenKart = []
    secilenKartId = []
    sonucGoster.textContent = bulunanKartlar.length
    if  (bulunanKartlar.length === kartlarDizi.length/2) {                //oyunun bitme koşulu olan tüm resimlerin bulunma durumu
      sonucGoster.textContent = 'Tebrikler! Bütün kartları buldunuz!!'
    }
  }

  //kartlarin iceriginin görülmesi icin kartin icerisindeki resmi gösterir
  function kartiDondur() {
    let kartId = this.getAttribute('data-id')
    secilenKart.push(kartlarDizi[kartId].name)
    secilenKartId.push(kartId)
    this.setAttribute('src', kartlarDizi[kartId].img)
    if (secilenKart.length ===2) {
      setTimeout(eslesmeKontrol, 500)
    }
  }

  oyunuOlustur()
})
