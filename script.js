function switchForm(className, e) {
	e.preventDefault();
	const allForm = document.querySelectorAll('form');
	const form = document.querySelector(`form.${className}`);

	allForm.forEach(item=> {
		item.classList.remove('active');
	})
	form.classList.add('active');
}



class Person {
    constructor(name,email,number,password) {
        this.name = name;
        this.email=email;
        this.number=number;
        this.password = password;
 
    } 
}

let users = [];

function register() {
    
  
    let fullname = document.querySelector("#fullname").value;
    let email = document.querySelector("#email").value;
    let cell = document.querySelector("#cell").value;
    let pwd = document.getElementById("pwd").value;
    let pwd2 = document.getElementById("pwd2").value;

  
    if (fullname === "" ||email === "" || cell === "" ||  pwd === "" || pwd2 === "") {
        
        alert("Please fill out the fields.");
    } else {
      
        let flag = false;
        
        for (let i = 0; i < users.length; i++) {
            if(users[i].name === fullname) {
                //error
                flag = true;
                break;
                
            }
        }

        if (flag) {
            alert("User already exists");
        } else {
           
            if(pwd === pwd2) {
             
                let newPerson = new Person(fullname,email,cell,pwd);
                users.push(newPerson);
                 alert(fullname + " registered successfully!");
            } else {
                
                alert("Passwords do not match")
            }
        }
    }
}



let login = () => {
    let email_i= document.querySelector("#email_i").value;
    let pwd_i = document.querySelector("#pwd_i").value;

    
 
    if (email_i === "" || pwd_i === "") {
      
        alert("This field is required.");
    } else
     {
       
        let flag = false;
        let person;
        for (let i = 0; i <users.length; i++) {
            if(users[i].email === email_i) {
                flag = true;
                person = users[i];
                break;
            }
        }
        if(flag) {
       
            if (pwd_i === person.password)
             {
                
            alert("Successfully Logged in")
              location.href="home.html"; 

            } 
            else 
            {
            
                alert("Incorrect password!");
            }
        } else
         {
          
            alert("You are not a member!");
        }
    }

}






