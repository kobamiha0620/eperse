
// PCのSNS表示
function load_effect() {
  const element = document.getElementById('mainSns');

 if(!element) return; // 要素がない場合は終了
    
  element.classList.add('is-show');
 }
setTimeout(load_effect, 800); // 600ミリ秒経過後に実行

scrollingtoFooter();


//トップページのみ
function scrollingtoFooter() {

  //フッターまで行ったらヘッダーをdisplay: none;
  const toFooter = document.getElementById('perseFooter');
  //フッターまでの距離
  const element = document.getElementById('mainSns');
  const eh = element.clientHeight;
  //フッターまでの距離
  const fh = toFooter.getBoundingClientRect().top - eh;
  window.addEventListener("scroll", function () {
    const scroll = window.pageYOffset;

    if (scroll > fh) {
        element.classList.remove('is-show');
    } else{
        element.classList.add('is-show');

    }
  });

}



//VITA アコーディオン

function vitaAcccordion(){
  $(".rnVigan__accordion--ttl").click(function () {
    $(this).slideToggle();
    $(this).next('.rnVigan__accordion--cnt').slideToggle();

  });
  $('.rnVigan__accordion--close').click(function(){
    console.log('clicked');
    $(this).parent('.rnVigan__accordion--cnt').slideToggle();
    $(this).parent('.rnVigan__accordion--cnt').prev('.rnVigan__accordion--ttl').slideToggle();
  });
}
vitaAcccordion();


//バリエーション
function validation(){

  let radio_btns = document.querySelectorAll(`input[type='radio'][name='powder']`);
  // const validationName = document.getElementById('js-validastionname');
  for (let target of radio_btns) {
    target.addEventListener(`change`, function () {
      let radio = document.querySelector('[name="powder"]:checked');
      let val = radio.value;
      let text = radio.parentElement.innerText;
      document.querySelector(`#js-validastionname`).innerHTML = `${target.value} `;
      document.querySelector(`#js-cartlink`).setAttribute('href', `${target.dataset.url} `);
      // document.querySelector(`#js-cartlink`).classList.toggle('change');

      
    });
  }
  
}

validation();


//バリエーション
function slyvalidation(){

  const slymain = document.getElementById('slyxmichi');
  let radio_btns = document.querySelectorAll(`input[type='radio'][name='slymich']`);
  // const validationName = document.getElementById('js-validastionname');
  for (let target of radio_btns) {
    target.addEventListener(`change`, function () {
      let radio = document.querySelector('[name="slymich"]:checked');
      let val = radio.value;
      let text = radio.parentElement.innerText;
      document.querySelector(`#js-validastionname`).innerHTML = `${target.value} `;
      document.querySelector(`#js-cartlink`).setAttribute('href', `${target.dataset.url} `);
      // document.querySelector(`#js-cartlink`).classList.toggle('change');

      if(slymain.classList.contains("sly07")){
        slymain.classList.remove('sly07');
      }else{
        slymain.classList.add('sly07');
      }
    });
  }
  
}


//SLY
$(function(){
  var val = location.search.match(/[&|\?]variant=(.*?)[&|$]/);
    if(val) {
      // prm = decodeURIComponent(val[1]);
      // location.replace("https://testtest.co.jp/index.html?test=" + prm);
      // const mainClass = document.getElementById('slyxmichi');
      const main = $('#slyxmichi');
      main.addClass('sly07');
      $("#js-validastionname").text("07 BRICK BROWN");
      $('#js-cartlink').attr('href', 'https://perseperse.myshopify.com/cart/add?id=43784364523756&quantity=1');
      // $('#js-cartlink').attr('href', 'https://perseperse.myshopify.com/cart/add?id=43798185935084&quantity=1');

      $('#06pinkm').prop('checked', false);
      $('#07bbrown').prop('checked', true);

      slyvalidation();

    }else{
      slyvalidation();
  }




});



