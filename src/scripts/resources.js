
class Resources{
    constructor(imageUrls){
        this.resourceCache = {};
        this.loading=[];
        this.readyCallbacks=[];
        imageUrls.forEach(url=>{
            this.load(url);
        })
    }

    load(url){
        this._load(url);
    }

    _load(url){
        if (this.resourceCache[url]){
            return this.resourceCache[url];
        } else {
            this.loading.push(url);
            let img = new Image();
            img.onload = ()=> {
                this.resourceCache[url] = img;

                if (this.isReady()){
                    this.readyCallbacks.forEach(func => {
                        func();
                    })
                }
            };
            this.resourceCache[url] = false;
            img.src = url; 
        }
    }
    get(url){
        return this.resourceCache[url];
    }

    isReady(){
        let ready = true;
        for (var k in this.resourceCache){
            if(this.resourceCache.hasOwnProperty.call(this.resourceCache,k) && !this.resourceCache[k]){
                ready = false;
            }
        }
        return ready;
    }

    onReady(func){
        this.readyCallbacks.push(func);
    }


}
export default Resources;