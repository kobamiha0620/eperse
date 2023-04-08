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
function load_effect() {
      const element = document.getElementById('mainSns');

     if(!element) return; // 要素がない場合は終了
        
     element.classList.add('is-show');
     }
    setTimeout(load_effect, 800); // 600ミリ秒経過後に実行
    
scrollingtoFooter();

