
const phoneInput = document.querySelector('#gmail_input')
const phoneCheck = document.querySelector('.gmail_button')
const phoneResult = document.querySelector('#gmail_result')


 const redExp = /@gmail.com$/ig 
phoneCheck.addEventListener('click', () => {
   if(redExp.test(gmail_input.value)){
      gmail_result.innerHTML = "Кош келдиңиз!"
      gmail_result.style.color ='green'
   }else{
      gmail_result.innerHTML = "Жүктөө аткарылбады!"
      gmail_result.style.color = 'red'
   }
})
//1.git --version
//2.git config --global user.name"Samyibbekov"
//3.git config --global user.email "akzholbeksamyibbekov@gmail.com"
//1 git init
//2 git add .
//3.git status
//4.git commit -m "Файдын аты"
//5.git remote add origin - ссылка
//6.git branch 
//7.git push -u origin main