let person=0;
let calculate=()=>{           
    let name = document.getElementById('name').value; 
    let price = document.getElementById('bid').value;
    if(name != "" && price != ""){  
      price = Number(price);
      let education = document.getElementById('education').value; 
       price = price * Number(education);
    
      let networth = document.getElementById('networth').value; 
      price = price * Number(networth);
     
      let caste = document.getElementById('Caste').value;
      if(caste.value=='-50'){  
        price = price - Number(caste);
        
      }else {
          price = price + Number(caste);  
      }
      
  
      let skills = document.getElementsByName('skills');
      for (var i = 0; i < skills.length; i++) {
     
        if (skills[i].checked) {   
    
            price = price + Number(skills[i].value);
  
        }
      }
  
  let ages = document.getElementsByName('Age');  
  ages.forEach(item => {  
  
      if (item.checked) { 
  
          price = price * Number(item.value);  
  
      }
  
  })
  let reputation=document.getElementsByName("Reputation");   
   for (var i = 0; i < reputation.length; i++) {
     
      if (reputation[i].checked && reputation[i].value == '20') {     
  
          price = price - Number(reputation[i].value);    
  
      } else if (reputation[i].checked) {   
  
          price =price* Number(reputation[i].value);

      }
      let love_letter = document.getElementById('love_letter').value;
      document.querySelector('.out-1').innerHTML=`Your price for ${name} is ${price}$ and your love letter is ${love_letter}`;
  }
  person = person = {
  
    bride_name: name,
  
    bride_price: price,
  
    letter_to_bride: love_letter
  
  }
  } 
  
  else if (name == "") {
  
  alert('Enter the Bride name');
  
  }
  else if (price == "") {
  
    alert('Enter the starting bid!');
    
    }
    
}
    let button = document.getElementById('button');
  
  button.addEventListener('click', calculate);
  

  function validate() {
    let a = document.forms["myForm"]["love_letter"].value;
  if (a == "") {
    alert("Hi there, you did not write the love letter, do you wanna continue?");
    return false;
  }
}
  