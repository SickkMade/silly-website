let websiteList = []
let main = document.querySelector('#main');
let newButton = document.querySelector('#new');
let description = document.querySelector('#desc');
let anchor = document.querySelector('#anchor');
let repoName = document.querySelector('#repo-name');

async function populateWebsiteList(){
    let response = await fetch('https://api.github.com/users/sickkmade/repos?per_page=100')
    let data = await response.json()

    data.forEach(repo => {
        if(repo.has_pages){
            websiteList.push(repo);
        }
    })
    resetData()
}

populateWebsiteList();

newButton.addEventListener('click', () => {
    resetData()
})

function resetData(){
    const repo = websiteList[Math.floor(Math.random() * websiteList.length)]
    description.innerText = repo.description
    anchor.href = repo.html_url
    repoName.innerText = repo.name
    main.data = `https://${repo.owner.login}.github.io/${repo.name}`
}