// var
// var a=20
// var a=14
// console.log(a);
// //let
// let b=5
// b=19
// console.log(b);
// //const
// const c=20
// const d=10
// const e=c%d90
// console.log(e);


// function name(x, y){
//     console.log("hello")
//     console.log(x)
//     console.log("how are")
//     console.log(y)
// }
// name("exeryone", "you")
//function name(x, y) {
 //   console.log("hello " + x + " how are " + y);
//}
//name("everyone", "you");
// var a=10;
// var b=20;
// console.log(a+=b);
// var a=10;
// var b=20;
// console.log(a-=b);
// var a=10;
// var b=20;
// console.log(a*=b);
// var a=10;
// var b=20;
// console.log(a/=b);
// var a=10;
// var b=20;
// console.log(a%=b);
// var a=10;
// var b=20;
// console.log(a**=b);
// var a=10;
// var b=20;

// var arr=(x)=>{console.log(x);}
// arr("narmatha")
// let arrow=(nam)=>{return nam*2};
// console.log(arrow(19));
//function limit (age ){
   //// let l= (age>=18 && age<=70)?"eligible for vote":"not eligible for vote"
    //console.log(l);  
//}
//  var i=10;
//  for(var i=0;i<=10;i=i+1) {
//      if(i%2==0) {
//    	console.log("even number:"+i);
        
//     }
//     else {
        
//     //oddcount=oddcount+1;
//     //     //console.log("odd number:"+i);
//     //console.log(oddcount);
//        console.log("odd number:"+i);
       
//      }
// }

    // let str = "javascript"; 
    //  store=" ";
    
    // for (i = str.length-1; i >= 0; i--) {
    //     store += str[i]+" ";
    // }
    // console.log(store);
    //  let time=9 ;
    //  if(time>=9 ){
    //  console.log("madurai bus will depart");
    //  }else if(time>=10 && time<=11){
    //     console.log("kerala bus will depart");
    //     }
    //     else if(time>=3 && time<=4){
    //         console.log("salem to tiruchi bus will depart");
    //         }
    //         else{
    //             console.log("local bus will depart");
    //             }
                
            // //pop
            // const  Store = ["anu","abi","roshni","aishu"];
            // Store.pop();
            // console.log(Store);
            // //push
            // const name=["arun","ria","loki"];
            // name.push("abi");
            // console.log(name);
            // //unshift
            // const sweet=["cake","jamun","jely"];
            // sweet.unshift("icecream");
            // console.log(sweet);
            // //shift
            // const chocolate=["milk choco","white choco","black choco"];
            // chocolate.shift();
            // console.log(chocolate);
            
            //concat
        //     const fruit=["graps","mango","orange"];
        //     const veg=["corn","onion","eggplant"];
        //     const cosmetic=["rosewater","scent"];
        //     const items= cosmetic.concat(fruit,veg);
        //     console.log(items);
        //     //sort
        //     const num=[5,7,9,1,4,2];
        //     num.sort((a,b) => a-b);
        //     console.log(num);
        //     //slice
        //    const flower=["rose","lily","jamine","daisy"];
        //    const flo=flower.slice(2-1);
        //    console.log(flo);
        //    //splice
        //    const month=["jan","feb","april","june"];
        //    month.splice(2,0,"march");
        //    month.splice(4,1,"may");
        //    console.log(month);
        //    //split
        //    var spl="helloworld";
        //    var spl2=spl.split("");
        //    console.log(spl2);
           
           
           
             
       //finding maximum number
// var arr = [10, 20, 56,36, 42, 55,];
// var min = Math.min(...arr);
// console.log("Minumum number:", min);

 
            //     //join
            // var spl="hello world";
            // var spl2=spl.split(" ")
            // var j=spl2.join("");
            // console.log(j);
            //     //reverse
            //     var a = "javascript"
            //     var rev= a.split("").reverse().join("")
            //     console.log(rev);
            //     //charat
            //      var b ="vijay"
            //      console.log(b.charAt(1));
            //      //substring
            //      var c="narmathadevi"
            //      var c1=c.substring(8);
            //      console.log(c1);
            //      //include
            //      var in1="Java"
            //      var in2= in1.includes("J");
            //      console.log(in2);
            //      //index of
            //      var ind="hello"
            //      console.log(ind.indexOf("l"));
            //      //last index of
            //      var las="helloo"
            //      console.log(las.lastIndexOf("o"));
            //      //uppercase
            //      var up="chennai"
            //      console.log(up.toUpperCase());
                 
            //      //lowercase
            //      var low="SALEM"
            //      console.log(low.toLowerCase());
// const stdobj=[
//   {
//     name:"jai",
//     age:10,
//     dep:"v",
//     Phn:98372334414,
//   },
//   {
//     name:"hari",
//     age:12,
//     dep:"vI",
//     Phn:7372334214,
//   },
//   {
//     name:"anu",
//     age:16,
//     dep:"vII",
//     Phn:8872334414,
//   },
//   {
//     name:"arun",
//     age:17,
//     dep:"x",
//     Phn:6637342414,
//   },
//   {
//     name:"rani",
//     age:12,
//     dep:"Iv",
//     Phn:9023342414,
//   }
// ]
// console.log([stdobj[2],stdobj[4]] );
// console.log([stdobj[1].name,stdobj[1].Phn]);
//  var obj=[
//   {
//   name:"rani",
//   idno:132,
//   bloodgroup:"A-",
//  },
//  {
//   name:"jai",
//   idno:140,
//   bloodgroup:"O+",
//  },
//  {
//   name:"arun",
//   idno:150,
//   bloodgroup:"B+",

//   },
//   {
//     name:"pavi",
//   idno:123,
//   bloodgroup:"AB+",
//   }
// ]
// const{name,idno,bloodgroup}=obj[2]
// console.log(name); 
// console.log(idno); 
// console.log(bloodgroup);
 
      // callback hell
    //  git add