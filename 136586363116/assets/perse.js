
async function supportsWebp() {
    if (!self.createImageBitmap) return false;
    
    const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
    const blob = await fetch(webpData).then(r => r.blob());
    return createImageBitmap(blob).then(() => true, () => false);
    
  }
  
  (async () => {
    if(await supportsWebp()) {
      console.log('does support');
    }
    else {
      console.log('does not support');
    }
  })();


  const addWebpDetectionClass = () => {
    if (supportsWebp()) {
      document.body.classList.add('is-webp');

    } else {
        document.body.classList.add('is-no-webp');
    }
  };
  
  addWebpDetectionClass(); 
  

  //フェイドイン
  function scroll_effect() {
    var element = document.getElementsByClassName('scroll-up');
    if(!element) return;
                        
    var scrollY = window.pageYOffset;
    var windowH = window.innerHeight;
    var showTiming = 160; // 要素を表示するタイミング
    for(var i = 0; i < element.length; i++) { 
      var elemClientRect = element[i].getBoundingClientRect(); 
      var elemY = scrollY + elemClientRect.top; 
      if(scrollY > elemY - windowH + showTiming) {
        element[i].classList.add('showup');
      }
    }
  }
  
  function scroll_effect02() {
    var element = document.getElementsByClassName('scroll-up02');
    if(!element) return;
                        
    var scrollY = window.pageYOffset;
    var windowH = window.innerHeight;
    var showTiming = 200; // 要素を表示するタイミング
    setTimeout(() => {
      for(var i = 0; i < element.length; i++) { 
      var elemClientRect = element[i].getBoundingClientRect(); 
      var elemY = scrollY + elemClientRect.top; 
      if(scrollY > elemY - windowH + showTiming) {

        element[i].classList.add('showup');
      }
    }
    }, 300);
  }
  
  function scroll_effect03() {
    var element = document.getElementsByClassName('scroll-up03');
    if(!element) return;
                        
    var scrollY = window.pageYOffset;
    var windowH = window.innerHeight;
    var showTiming = 200; // 要素を表示するタイミング
    setTimeout(() => {
      for(var i = 0; i < element.length; i++) { 
      var elemClientRect = element[i].getBoundingClientRect(); 
      var elemY = scrollY + elemClientRect.top; 
      if(scrollY > elemY - windowH + showTiming) {

        element[i].classList.add('showup');
      }
    }
    }, 600);
  }
  
  function scroll_effect04() {
    var element = document.getElementsByClassName('scroll-up04');
    if(!element) return;
                        
    var scrollY = window.pageYOffset;
    var windowH = window.innerHeight;
    var showTiming = 200; // 要素を表示するタイミング
    setTimeout(() => {
      for(var i = 0; i < element.length; i++) { 
      var elemClientRect = element[i].getBoundingClientRect(); 
      var elemY = scrollY + elemClientRect.top; 
      if(scrollY > elemY - windowH + showTiming) {

        element[i].classList.add('showup');
      }
    }
    }, 900);
  }
  
  window.addEventListener('scroll', scroll_effect); // スクロール時に実行
  window.addEventListener('scroll', scroll_effect02); // スクロール時に実行
  window.addEventListener('scroll', scroll_effect03); // スクロール時に実行
  window.addEventListener('scroll', scroll_effect04); // スクロール時に実行

