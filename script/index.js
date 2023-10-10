
   
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
  let Payment = true;
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
  verification_A()




