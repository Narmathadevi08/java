function wakeup(){
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          const wokeup=true
          if(wokeup){
            
          resolve("wakeup at 5 am");
          }else{
            reject("he is doesn't wake up");
          }
        },2000);
      })
      }
      function gym(){
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          const gymss=true
          if(gymss){
          resolve("he going to gym ");
          }else{
            reject("he is not going to gym");
          }
          
        },4000);
      }) 
    }
      function office(){
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          const work=false
          if(work){
          resolve("he going to office");
          }else{
            reject("he doesnot going to office");
          }
        
        },3000);
      } )
    }
      wakeup().then(value1=>{console.log(value1);return gym()})
              .then(value2=>{console.log(value2);return office()})
              .catch(err=>{console.log(err)})
              
