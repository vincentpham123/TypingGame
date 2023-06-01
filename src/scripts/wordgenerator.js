const randomWord = 'https://api.api-ninjas.com/v1/randomword'


export async function getRandomWord(){
  try {
      const response = await fetch("https://random-word-api.vercel.app/api?words=1")
      if (response.ok) {
        const result = await response.json();
        return result[0];
      } else {
        throw response
      }
    } catch (error) {
      console.error(error);
    }
  }

export async function getRandom9Word(){
    try {
        const response = await fetch("https://random-word-api.vercel.app/api?words=1&length=9")
        if (response.ok) {
          const result = await response.json();
          return result[0];
        } else {
          throw response
        }
      } catch (error) {
        console.error(error);
      }
  }

  export async function getRandom8Word(){
    try {
        const response = await fetch("https://random-word-api.vercel.app/api?words=1&length=8")
        if (response.ok) {
          const result = await response.json();
          return result[0];
        } else {
          throw response
        }
      } catch (error) {
        console.error(error);
      }
  }
  

// export async function getRandomWord(){
//     try {
//         const response = await fetch("https://api.api-ninjas.com/v1/randomword",{
//     method: 'GET',
//     headers: { 'X-Api-Key': '/UnQYwpt2huxOYVHDrgpMQ==JFZmsclMm7gqLBGn'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     }})
//         if (response.ok) {
//           const result = await response.json();
//           const word = result.word;
//           return word
//         } else {
//           throw response
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }
