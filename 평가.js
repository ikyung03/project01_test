/* 네브슬라이드 */
let $list = document.getElementById('list');
let listItems = $list.getElementsByTagName('li');

for(let i =0; i < listItems.length; i++){
  listItems[i].addEventListener('mouseenter',function(){ 
    let subMenu  = this.querySelector('.sub_menu');
  if(subMenu){subMenu.style.display='block';
}
  }) 
};


for(let i = 0; i < listItems.length; i++){
  listItems[i].addEventListener('mouseleave',function(){
let subMenu = this.querySelector('.sub_menu');
if(subMenu){subMenu.style.display='none';
}
  })
};

/* 탭메뉴 */

let tabBtn = document.querySelectorAll('.tab_nav li'),
tabContent = document.querySelectorAll('.tab_content div');

function showContent(num){
  tabContent.forEach(function(item){
    item.style.display='none';
  })
  tabContent[num].style.display='block'
}

tabBtn.forEach(function(item, idx){
  item.addEventListener('click',function(x){

    tabBtn.forEach(function(btn){
      btn.classList.remove('active');
    });
    showContent(idx);
    item.classList.add('active');
  })
});