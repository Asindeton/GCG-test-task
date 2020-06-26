document.querySelectorAll('.control__element').forEach(e => e.addEventListener('click', function(e){
    for(let i = 0; i<3; i++){
        document.querySelectorAll('.control__element')[i].classList.remove('active')
    }
    Array.from(e.target.classList).includes('active')? null: e.target.classList.add('active')
    let slide = e.target.attributes[0].value;
    changeSlide(slide)
}))

document.querySelectorAll('.calc-block__type__content__window>span').forEach(e => e.addEventListener('click', function(e){
    for(let i = 0; i<5; i++){
        document.querySelectorAll('.calc-block__type__content__window>span')[i].classList.remove('active_window')
    }
    Array.from(e.target.classList).includes('active_window')? null: e.target.classList.add('active_window')
    
    if(e.target.innerText == 'Одностворчатое' || e.target.innerText === 'Двухстворчатое'|| e.target.innerText === 'Трёхстворчатое'){
        var calcTitle = `${e.target.innerText} окно КВЕ`
    } else {
        var calcTitle = `${e.target.innerText} KBE`
    }
    document.querySelector('.calc-block__calc__data__param__title').innerText = calcTitle

    console.log(e.target.attributes[0].value)
    document.querySelector(".calc-block__calc__data__size__preview").innerHTML = `<img src="./assets/window/${e.target.attributes[0].value}@1X.png" alt="">`
}))

function changeSlide(n){
    document.querySelectorAll('.slider__slides>div').forEach(e => e.style.transform = `translateX(${n * -100}%`)
}