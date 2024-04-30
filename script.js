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
  const sonucDisplay = document.querySelector('#sonuc')
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
    const ilkSecilienId = secilenKartId[0]
    const ikinciSecilienId = secilenKartId[1]
    
    if(ilkSecilienId == ikinciSecilienId) {           //aynı karta iki kez arka arkaya tiklanma durumudur
      kartlar[ilkSecilienId].setAttribute('src', 'resimler/kapak.png')
      kartlar[ikinciSecilienId].setAttribute('src', 'resimler/kapak.png')
      alert('Aynı karta tıkladınız!!')
    }
    else if (secilenKart[0] === secilenKart[1]) {    //aynı karttan iki tane arka arkaya bulunma yani eşleşme durumudur
      alert('Tebrikler bir eslesme buldunuz!!')
      kartlar[ilkSecilienId].setAttribute('src', 'resimler/beyaz.png')
      kartlar[ikinciSecilienId].setAttribute('src', 'resimler/beyaz.png')
      kartlar[ilkSecilienId].removeEventListener('click', kartiDondur)
      kartlar[ikinciSecilienId].removeEventListener('click', kartiDondur)
      bulunanKartlar.push(secilenKart)
    } else {
      kartlar[ilkSecilienId].setAttribute('src', 'resimler/kapak.png')    //son sonuç olan farkli resimleri bulma durumudur
      kartlar[ikinciSecilienId].setAttribute('src', 'resimler/kapak.png')
      alert('Maalesef, iki resim ayni degil!')
    }
    secilenKart = []
    secilenKartId = []
    sonucDisplay.textContent = bulunanKartlar.length
    if  (bulunanKartlar.length === kartlarDizi.length/2) {                //oyunun bitme koşulu olan tüm resimlerin bulunma durumu
      sonucDisplay.textContent = 'Tebrikler! Bütün kartları buldunuz!!'
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
