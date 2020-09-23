const userUrl ='https://api.github.com/users/charlettebauer'
const targetEl = document.querySelector('#user-name')
const orgSection = document.querySelector('#org-data')
fetch(userUrl)
  .then(response => response.json())
  .then(function (data) {
    // console.log(data)
    const headerEl = document.createElement('p')
    headerEl.innerText = data.name
    targetEl.appendChild(headerEl)
})
const orgUrl = 'https://api.github.com/users/charlettebauer'

  // fetch(userUrl)
  //   .then(res => res.json()) 
  //   .then(data => {
  //     // console.log(data)
  //     const headerEL = document.createElement('p')
  //     headerEl.innerText = data.userUrlogin
  //     targetEl.appendChild(headerEl)
  //   })
    
    fetch(orgUrl)
    .then(response => response.json())
    .then(function (data) {
      // console.log(data)
      const headerEl = document.createElement('p')
      headerEl.innerText = data.company
      targetEl.appendChild(headerEl)
  })
   
fetch(orgUrl)
    .then(response => response.json()) 
    .then(data => {
      // console.log(data)
      const headerEl = document.createElement('p')
      headerEl.innerText = data.bio
      targetEl.appendChild(headerEl)
    })     
    
    fetch(orgUrl)
    .then(response => response.json())
    .then(function (data) {
      // console.log(data)
      let userPicture = document.createElement('img')
      userPicture.classList.add('userPicture')
      userPicture.src = data.avatar_url
      targetEl.appendChild(userPicture)
  })

    // .then(reposUrl => fetch(reposUrl))
    // .then(response => response.json())
    // .then(data => {
    //   let repoList = document.createElement('ul')
      
    //   repoList.classList.add(
    //     'list',
    //     'pl0',
    //     'ml0',
    //     'center',
    //     'mw6',
    //     'ba',
    //     'b--green',
    //     'br3'
    //   )
    //   orgSection.appendChild(repoList)
      
    //   for (let repo of data) {
    //     const listItem = document.createElement('li')
    //     listItem.textContent = data.name
    //     listItem.classList.add('ph3', 'pv2', 'bb', 'b--green')
    //     repoList.appendChild(listItem)
    //   }
    // })