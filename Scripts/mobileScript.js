function redirectMobileHandler() {
    const width = Math.max(document.clientWidth || 0, window.innerWidth || 0);
    const height = Math.max(document.clientHeight || 0, window.innerHeight || 0);
    if(width > 1000 && height > 650) {
      window.location = 'index.html';
    } 
}

    window.onload = redirectMobileHandler();
    window.onresize = () => redirectMobileHandler();