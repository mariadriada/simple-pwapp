if ('serviceWorker' in navigator) {
    window.addEventListener('load', ()=>{
        
        navigator.serviceWorker.register('/sw.js')
        .then(()=>{
            console.log('Service worker rtegistered')
        })
        .catch((error)=>{
            console.log('error in loading', error)
        })
    })  
    
    window.applicationCache.swapCache()
}