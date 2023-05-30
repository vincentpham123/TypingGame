import {getRandomWord} from './wordgenerator.js';
class Word {

    async wordCheck(){
        let initialWord;
        do{
            initialWord = await getRandomWord();
            
        }while(initialWord.length>10);
        return initialWord;
    }

    
    constructor(){       
        this.wordCheck().then(result=>{
            this.word=result;
        })

    }
    
    getWord(){
        return this.word;
    }
    
}
export default Word;