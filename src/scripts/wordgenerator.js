const randomWord = 'https://api.api-ninjas.com/v1/randomword'


export async function getRandomWord(){
    try {
        const response = await fetch("https://api.api-ninjas.com/v1/randomword",{
    method: 'GET',
    headers: { 'X-Api-Key': '/UnQYwpt2huxOYVHDrgpMQ==JFZmsclMm7gqLBGn'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    }})
        if (response.ok) {
          const result = await response.json();
          const word = result.word;
          console.log(word);
        } else {
          throw response
        }
      } catch (error) {
        console.error(error);
      }
    }
