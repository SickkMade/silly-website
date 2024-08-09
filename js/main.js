let websiteList = []
let main = document.querySelector('#main');
let newButton = document.querySelector('#new');



async function populateWebsiteList(){
    let response = await fetch('https://api.github.com/users/sickkmade/repos')
    let data = await response.json()

    data.forEach(repo => {
        if(repo.has_pages){
            websiteList.push(`https://${repo.owner.login}.github.io/${repo.name}`);
        }
    })
    main.data = websiteList[Math.floor(Math.random() * websiteList.length)]
}

populateWebsiteList();

console.log(typeof websiteList)

newButton.addEventListener('click', () => {
    main.data = websiteList[Math.floor(Math.random() * websiteList.length)]
})