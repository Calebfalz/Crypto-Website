const tabItem = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
const selectCoin1 = document.querySelector('.select-coin-1');
const selectCoin2 = document.querySelector('.select-coin-2');
const para1 = document.querySelector('.para1');
const para2 = document.querySelector('.para2');
const opco = document.querySelectorAll('.opco');



// function selectCoin(e){
//   console.log(this.classList);
//   if(e.target.textContent === "Select Coin ") {
//     removeCoins()
//     const coinOne = document.querySelector(`#${this.id}-1`);
//     coinOne.classList.toggle('select');
//   } else {
//     removeCoins()
//     const coinTwo = document.querySelector(`#${this.id}-2`);
//     coinTwo.classList.toggle('select');
//   }
//
// }
function selectPlan(e) {
  removeCoins1();
  const getPlan = document.querySelector('.select-coin-2');
  getPlan.classList.toggle('select1');
}


function selectCoin(e) {
  removeCoins2();
  const getCoin = document.querySelector('.select-coin-1');
  getCoin.classList.toggle('select2');
  console.log(para2.classList.add('paragraph'));
}


function removeCoins1() {
  selectCoin1.classList.remove('select2');
}

function removeCoins2() {
  selectCoin2.classList.remove('select1');
}
// link.forEach(item => item.addEventListener('click', selectCoin))


function selectItem(e){
  removeBorder();
  removeShow();
  this.classList.add('tab-border');
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show');
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove('show'));
}

function removeBorder() {
  tabItem.forEach((item) => {
    item.classList.remove('tab-border');
  });

}

tabItem.forEach(item => item.addEventListener('click', selectItem));
para1.addEventListener('click', selectCoin)
para2.addEventListener('click', selectPlan)
