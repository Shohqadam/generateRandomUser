document.querySelector('button').addEventListener('click', getUser)
function getUser() {
        fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then((data) => {
            let person = data.results[0]
            let output;
            output =    `
                
                <img src=" ${person.picture.medium}"></li>    

               <h1>${person.name.first + ' ' +  person.name.last} </h1>   
               <p> EMAIL: ${person.email} </p>   
               <p> AGE: ${person.dob.age}</p>    
               <p> PHONE: ${person.phone} </p>   
                
            `
            document.querySelector('.card').innerHTML = output
            if(person.gender === 'male'){
                document.querySelector('img').classList.add('male')
            }else(
                document.querySelector('img').classList.add('female')
            )
            
          })
          .catch((err) => console.log(err));
      }
