//トップページのみ
function scrollingtoFooter() {

  //フッターまで行ったらヘッダーをdisplay: none;
  const toFooter = document.getElementById('perseFooter');
  const element = document.getElementById('mainSns');
  const fvSwipe = document.getElementById('fvRnSwipe');
  const eh = element.clientHeight;
  //フッターまでの距離
  const fh = toFooter.getBoundingClientRect().top - eh;

  //PCのFVのbottomまでの高さ
  const swh = fvSwipe.getBoundingClientRect().bottom;

  const nLogo = document.getElementById('rnLogo');
  const hIcons = document.getElementById('header-wrapper');
  

  window.addEventListener("scroll", function () {
    const scroll = window.pageYOffset;

    if (scroll > swh && scroll < fh) {
      element.classList.add('is-show');
    } else {
      element.classList.remove('is-show');
    }

    if (scroll > swh){
      nLogo.classList.add('origin');
      hIcons.classList.add('origin');
      
    }else{
      nLogo.classList.remove('origin');
      hIcons.classList.remove('origin');
    }
  });

}

scrollingtoFooter();

