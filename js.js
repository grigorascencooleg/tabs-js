window.document.addEventListener('DOMContentLoaded',()=>{
    const tabs=document.querySelectorAll('.tabs__nav-btn'),
        tabsContent=document.querySelectorAll('.tabs__item'),
        tabsParent=document.querySelector('.tabs__nav')

    function hideTabs(){
        tabsContent.forEach(item=>{
            item.style.display='none'
        })
        tabs.forEach(item=>{
            item.classList.remove('active')
        })
    }

    function showTabs(i=0){
        tabsContent[i].style.display='block'
        tabs[i].classList.add('active')
    }

    tabsParent.addEventListener('click',(event)=>{
        const element=event.target
        tabs.forEach((item,i)=>{
            if(item==element){
                hideTabs()
                showTabs(i)
            }
        })
    })

    hideTabs()
    showTabs()
})