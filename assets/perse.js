
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
  

