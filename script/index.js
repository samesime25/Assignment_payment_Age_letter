
   
  /*Write  Javascript code using if statement to check if
  Grade A
   if payment is made,&&
    if Age is above &&
    if Name Contain A 
    
     Grade B
   if payment is made,&&
    if Age is above ||
    if Name Contain A


     Grade C
   if payment is made,||
    if Age is above &&
    if Name Contain A
    */
  /*let Payment = true;
  let Age = 17;
  let Name = "Edison";

  const verification_A = ()=>{
    // Grade A
    if (Payment && Age > 16 && Name.includes("a")){
      console.log(`Payment was successful,  year age is above ${Age} and your ${Name} and also contain letter "A"`);

    }
      // Grade B
    else if(Payment && Age > 16 || Name.includes("a")){
      console.log(`Payment was successful,  year age is above ${Age} and your ${Name} does not contain letter "A"`)
    }
  // Grade C
    else if(Payment=== false || Age > 16 && Name.includes("a")){
      console.log(`Payment was  not successful,  year age is above ${Age} and your ${Name}  contain letter "A"`)
    }

// default
 else{
  console.log(`Payment was not  successful , year age is less ${Age} and your ${Name} does not contain letter "A"`)
 }
  }
  verification_A()*/


// high array
// array.forEach(element => {
  
// });
// Map
// filter
// assignment
// using foreach cal the average using their subject
// after cal average return or fileter only those their average above 100
// when u cal the average return only names  of those  above 100 using map
// return only male
// return only female
let students= [  
  {  
     name:'arun',
     gender:'Male',
     physics:88,
     maths:87,
     english:78
  },
  {  
     name:'rajesh',
     gender:'Male',
     physics:96,
     maths:100,
     english:95
  },
  {  
     name:'moorthy',
     gender:'Male',
     physics:89,
     maths:90,
     english:70
  },
  {  
     name:'raja',
     gender:'Male',
     physics:30,
     maths:25,
     english:40
  },
  {  
     name:'usha',
     gender:'Female',
     physics:67,
     maths:45,
     english:78
  },
  {  
     name:'priya',
     gender:'Female',
     physics:56,
     maths:46,
     english:78
  },
  {  
     name:'Sundar',
     gender:'Male',
     physics:12,
     maths:67,
     english:67
  },
  {  
     name:'Kavitha',
     gender:'Female',
     physics:78,
     maths:71,
     english:67
  },
  {  
     name:'Dinesh',
     gender:'Male',
     physics:56,
     maths:45,
     english:67
  },
  {  
     name:'Hema',
     gender:'Female',
     physics:71,
     maths:90,
     english:23
  },
  {  
     name:'Gowri',
     gender:'Female',
     physics:100,
     maths:100,
     english:100
  },
  {  
     name:'Ram',
     gender:'Male',
     physics:78,
     maths:55,
     english:47
  },
  {  
     name:'Murugan',
     gender:'Male',
     physics:34,
     maths:89,
     english:78
  },
  {  
     name:'Jenifer',
     gender:'Female',
     physics:67,
     maths:88,
     english:90
  }
]
const general =()=>{

  students.forEach((value)=>{
    let average= Math.round((value.physics + value.maths + value.english)/3)  
    console.log(`${value.name}  average score = ${average}`);
  
  })


  students.filter((value)=>{
    let average= Math.round((value.physics + value.maths + value.english)/3)  
    if(average >= 100){
      console.log(average);
    }
    else{
      console.log("You didnt score above 100");
    }
  
    })


  students.map((value)=>{
    let average= Math.round((value.physics + value.maths + value.english)/3)
    if(average >=  100){
      console.log(value.name);
    }
        })

      
        students.filter((value)=>{
          let female= value.gender
          if ( female.includes("F")) {
                        console.log(value.gender);   
          }  })


         students.filter((value)=>{
          let female= value.gender
          if ( !female.includes("F")) {
                        console.log(value.gender);   
          }  })
                 

}
general()

