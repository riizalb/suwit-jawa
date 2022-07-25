// tangkapan computer
function getPilihanComputer(){
  const comp = Math.random();
  if(comp < 0.34) return 'gajah';
  if(comp >= 0.34 && comp < 0.67) return 'orang'; 
  return 'semut';
}

// rule suit
function getHasil(comp, player){
  if(player == comp) return 'SERI';
  if(player == 'gajah') return (comp == 'orang')? 'MENANG' : 'KALAH';
  if(player == 'orang') return (comp == 'gajah')? 'KALAH' : 'MENANG';
  if(player == 'semut') return (comp == 'gajah')? 'MENANG' : 'KALAH';
}

// bermain v.1
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;

//   const imgComputer = document.querySelector('.img-komputer');
//   imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
// })

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function(){
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;

//   const imgComputer = document.querySelector('.img-komputer');
//   imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
// })

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function(){
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;

//   const imgComputer = document.querySelector('.img-komputer');
//   imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
// })

// bermain v.2
// const pilihanSaya = document.querySelectorAll('li img');
// pilihanSaya.forEach(function(pil){
//   pil.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pil.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
//   })
// })

// sedikit animasi putar
function putar(){
  const imgComputer = document.querySelector('.img-komputer');
  const gambar = ['gajah', 'orang', 'semut'];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(() => {
    if(new Date().getTime() - waktuMulai > 1000){
      clearInterval;
      return;
    }
    imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
    if(i == gambar.length) i = 0;
  }, 100);
}

// bermain v.2 dengan animasi
const pilihanSaya = document.querySelectorAll('li img');
pilihanSaya.forEach(function(pil){
  pil.addEventListener('click', function(){
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();
    setTimeout(function(){
      const info = document.querySelector('.info');
      info.innerHTML = hasil;
  
      const imgComputer = document.querySelector('.img-komputer');
      imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
    },1000);
  })
})