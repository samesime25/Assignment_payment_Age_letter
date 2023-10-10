
   
  // write using if statement to check if payment is made
  let Payment = true;
  let Age = 17;
  let Name = "Edison";

  const verification_A = ()=>{
    if (Payment && Age > 16 && Name.includes("a")){
      console.log(`Payment was successful,  year age is above ${Age} and your ${Name} and also contain letter "A"`);

    }
    else if(Payment && Age > 16 || Name.includes("a")){
      console.log(`Payment was successful,  year age is above ${Age} and your ${Name} does not contain letter "A"`)
    }

    else if(Payment=== false || Age > 16 && Name.includes("a")){
      console.log(`Payment was  not successful,  year age is above ${Age} and your ${Name}  contain letter "A"`)
    }


 else{
  console.log(`Payment was not  successful , year age is less ${Age} and your ${Name} does not contain letter "A"`)
 }
  }
  verification_A()



// write  a code to check if their age is above  16 and 


