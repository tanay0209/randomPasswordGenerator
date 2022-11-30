 class passwordGenerator
 {        
        strongPassword()
        {
            let generatedPassword = ""
            let characters = `qwertyuiop\\asdfghjklzxcvbnm,.?@#$%^&*-+=987654321QWERTYUIOPASDFGHJKLZXCVBNM`
           
            if(sizeOfPassword.value == '')
            {
                sizeOfPassword.value = '7'
            }


            for(let index = 0 ; index < parseInt(sizeOfPassword.value) ; index++)
            {
                let generatedNumber = Math.floor(Math.random()*characters.length)
                
                generatedPassword += characters.charAt(generatedNumber)    
            }
            
            return generatedPassword
        }

        normalPassword()
        {
            let generatedPassword = ""
            let characters = `qwertyuiop\\asdfghjklzxcvbnm987654321`


            if(sizeOfPassword.value == '')
            {
                sizeOfPassword.value = '7'
            }
            
            for(let index = 0 ; index < parseInt(sizeOfPassword.value) ; index++)
            {
                let generatedNumber = Math.floor(Math.random()*characters.length)
                
                generatedPassword += characters.charAt(generatedNumber)    
            }
            return generatedPassword
        }
 }

const obj = new passwordGenerator()






const radioButtons = document.querySelectorAll('.passwordType')
const generatePasswordButton = document.getElementById('btn')
const displayField = document.getElementById('generatedPassword')
const copyButton = document.getElementById('btn2')
const passwordCopied = document.getElementById('copied')
const viewPassword = document.getElementById('showPassword')
let password = ''
const sizeOfPassword = document.getElementById('sizeOfPassword')






generatePasswordButton.addEventListener('click', ()=>
{   
    
    radioButtons.forEach(radiobtn =>{
        if(radiobtn.checked)
        {
            let passwordType = radiobtn.value
            if(passwordType == 'strongPassword')
            {
                password  = obj.strongPassword()
            }
            else 
            {
                password = obj.normalPassword()
            }

            if(viewPassword.checked)
            {
                viewPassword.checked = false
            }
            viewPassword.addEventListener('change', () =>{
                if(viewPassword.checked)
                {
                    displayField.value = password
                }
                else
                displayField.value = `*******`
            })
            
            displayField.value = `*********`   
        }
    })
    
   
   
    
})

copyButton.addEventListener('click', () =>{
    if( displayField.value)
    {
        navigator.clipboard.writeText(password)
        passwordCopied.style.display='block'
        setTimeout(function copiedPassword()
        {
            passwordCopied.style.display = 'none'
            displayField.value = ""
        },2000)
    }
})





