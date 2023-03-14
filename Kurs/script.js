        /* let url = 'http://api.weatherapi.com/v1/forecast.json?key=95f9d0b273ad4ed2be0163144230803&q=Minsk&days=5&aqi=no&alerts=no';
        let header = document.querySelector('.header'); 
        let buttonLog = document.querySelector('.btn-outline-primary');
        let buttonUser = document.createElement('button');
        let boardUser = document.createElement('div');
        let selectCity  = document.querySelector('[name=City]');
        let inputNumber = document.querySelector('.inputNumber');
        let centerMain = document.querySelector('.centerMain');
        let showButton = document.querySelector('.btn-primary');
        let showWeather = document.querySelector('.showWeather');
        let nameCity;

        function createBlock(value, classL, inBlock, innerText = ''){
            value.classList.add(`${classL}`);
            value.innerText = `${innerText}`;  
            inBlock.append(value);
       }

       function createOption(val, innerText, inBlock){
            val.value = `${innerText}`;
            val.innerText = val.value;
            inBlock.append(val);
       }
       function createInput(value, typeI, inblock, classI = '', placeholderI = ''){
            value.type = `${typeI}`;
            value.placeholder = `${placeholderI}`;
            value.classList.add(`${classI}`);
            inblock.append(value);
       }
       
       let inputName = document.createElement('input');
       let inputPassword = document.createElement('input');
       let buttonReg = document.createElement('button');
       let board = document.createElement('div');

        buttonLog.addEventListener('click', function(){
            
            createBlock(board, 'board', document.body);

            board.style.left = `${document.documentElement.clientWidth/2-250}px`;
            board.style.top = `${document.documentElement.clientHeight/2-150}px`;

            let name = document.createElement('h2');

            createOption(name, 'Имя пользователя', board);

            createInput(inputName, 'text', board, 'input', 'person');

            let password = document.createElement('h2');
            createOption(password, 'Пароль', board);

            createInput(inputPassword, 'password', board, 'input');

            let footerBoard = document.createElement('div');
            createBlock(footerBoard, 'footerBoard', board);
            createBlock(buttonReg, 'buttonReg', footerBoard, 'Дальше');
           
        });

        buttonReg.addEventListener('click', function(){
            if((inputName.value.length <= 3) && (inputPassword.value.length >= 8)){
                alert('ошибка: неправильное имя');
            }
            if((inputName.value.length > 3) && (inputPassword.value.length < 8)){
                alert('ошибка: слишком короткий пароль');
            }
            if((inputName.value.length > 3) && (inputPassword.value.length >= 8)){
                localStorage.setItem('name', inputName.value);
                localStorage.setItem('password', inputPassword.value);

                    board.remove();
                    buttonReg.remove();
                    inputName.remove();
                    buttonLog.remove();
                    buttonUser.classList.add('btn');
                    buttonUser.classList.add('btn-outline-primary');
                    buttonUser.classList.add('log');
                    buttonUser.innerText = 'Пользователь';
                    document.body.append(buttonUser);
            }
        });

        let headerUser = document.createElement('div');
        let mainUser = document.createElement('div');
        let headerCard = document.createElement('div');
        let selectArr;
        let userSelect;
        let buttonDel = document.createElement('button');
        

       let footerUser = document.createElement('div');

         buttonUser.addEventListener('click', function(){

            let headerCard = document.createElement('div');
            createBlock(boardUser, 'boardUser', document.body);
            
            boardUser.style.left = `${document.documentElement.clientWidth/2-400}px`;
            boardUser.style.top = `${document.documentElement.clientHeight/2-300}px`;

            createBlock(headerUser, 'headerUser', boardUser, 'Параметры');
            createBlock(mainUser,'mainUser', boardUser);

            for(let i = 0; i <= 2; i++){
                let mainUserBackgroundDiv = document.createElement('div');
                let mainUserBackgroundText = document.createElement('div');
                createBlock(mainUserBackgroundDiv, 'mainUserDiv' , mainUser);
                createBlock(mainUserBackgroundText, 'divText', mainUserBackgroundDiv);
            }
            let settingsArr = document.getElementsByClassName('mainUserDiv');
            
            for(let k = 0; k < settingsArr.length; k++){
                userSelect = document.createElement('select');
                createBlock(userSelect, 'select', settingsArr[k]);
                selectArr = document.querySelectorAll('.select');
            }
            for(let c = 0; c <= selectArr.length; c++){   
                    let mainUserOptionR = document.createElement('option');
                    let mainUserOptionL = document.createElement('option');

                        if(c == 0){
                            createOption(mainUserOptionR, 'День',  selectArr[0]);
                            createOption(mainUserOptionL, 'Ночь',  selectArr[0]);
                        }
                        if(c == 1){
                            createOption(mainUserOptionR, 'Русский',  selectArr[1]);
                            createOption(mainUserOptionL, 'English',  selectArr[1]);
                        }
                        if(c == 2){
                            createOption(mainUserOptionR, 'Обычный',  selectArr[2]);
                            createOption(mainUserOptionL, 'Fantasy',  selectArr[2]);
                        }
                    }
            createBlock(footerUser,'footerUser', boardUser);
            
            createBlock(buttonDel,'buttonDel', footerUser, 'Применить');
        }); 
        function select(a, b){
            for(let item of a.children){
                if(item.selected){
                    localStorage.setItem(`${b}`, a.value);
                    console.log(a.value);
                }    
        }
    }
         buttonDel.addEventListener('click', function(){
           for(let i = 0; i < selectArr; i++){
            console.log(selectArr[0])
            if(i == 0){
                select(selectArr[0], 'background');
            }
            if(i == 1){
                select(selectArr[1], 'lang');
            }
            if(i == 2){
                select(selectArr[2], 'font');
            }
           }
            headerUser.remove();
            mainUser.remove();
            footerUser.remove();
            boardUser.remove();
              
        }); */
         /* if(localStorage.getItem('background') == 'День'){
                header.style.backgroundColor = 'blue';
                h1.style.color = 'black';
             } else if(localStorage.getItem('background') == 'Ночь'){
                header.style.backgroundColor = 'red'; 
                h1.style.color = 'white';
            } else{
                header.style.backgroundColor = 'aqua';
            } 
        if(localStorage.getItem('lang') == 'English' ){
                h1.innerText = 'Weather';
                } else{
                h1.innerText = 'Погода';
            }
        if(localStorage.getItem('font') == 'Обычный'){
                h1.classList.remove('fontFamR');
                h1.classList.remove('fontFamF');
            } 
        if(localStorage.getItem('font') == 'Fantasy'){
                h1.classList.remove('fontFamR');
                h1.classList.add('fontFamF');
           }   
        if(localStorage.getItem('font') == 'Times New Roman'){
            h1.classList.add('fontFamR');
            h1.classList.remove('fontFamF');
        } */
       /*  showButton.addEventListener('click', function(){
            for(let item of selectCity.children){
                if(item.selected){
                    console.log(inputNumber.value);
                    nameCity = item.value;
                    url = `http://api.weatherapi.com/v1/forecast.json?key=7263066957634ac7a15142941232102&q=${nameCity}&days=${inputNumber.value}&aqi=no&alerts=no`;
                }
            }
            fetchWeather();
        })
        function fetchWeather(){  
             fetch(url)
                        .then(res => res.json())
                        .then((res) => {
                            for(let i = 0; i < parseInt(inputNumber.value); i++){
                                let weatherCard = document.createElement('div');
                                createBlock(weatherCard, 'weatherCard', centerMain);
                            }
                            return res;
                        })
                        .then(res => {
                            let weatherArr = document.getElementsByClassName('weatherCard');
                             for(let k = 0; k < weatherArr.length; k++){
                                let headerCard = document.createElement('div');
                                createBlock(headerCard, 'headerCard', weatherArr[k], res.forecast.forecastday[k].day.condition.text);

                                let imgCard = document.createElement('img');
                                createBlock(imgCard, 'imgCard', weatherArr[k]);
                                imgCard.src = `https:${res.forecast.forecastday[k].day.condition.icon}`;
                                 
                                let downCardblock = document.createElement('div');
                                createBlock(downCardblock, 'downCardblock', weatherArr[k]);

                                let temp = document.createElement('div');
                                createBlock(temp, 'temp', downCardblock, res.forecast.forecastday[k].day.avgtemp_c);
                               
                                let data = document.createElement('div');
                                createBlock(data, 'data', downCardblock, res.forecast.forecastday[k].date);
                            } 
                        })
                }
                let tomorrowArr = document.querySelectorAll('.infoPrecent');
                    let tomorrowAfArr = document.querySelectorAll('.infoAfPrecent');

                    function tomorrow(){
                        fetch(url)
                        .then(res => res.json())
                        .then(res => {
                            let baseWayData = res.forecast.forecastday[1].day;
                            for(let i = 0; i < tomorrowArr.length; i++){
                                if(i == 0){
                                    tomorrowArr[i].innerText = `${baseWayData.avghumidity}%`;
                                }
                                if(i == 1){
                                    tomorrowArr[i].innerText = `${baseWayData.maxwind_kph}`;
                                }
                                if(i == 2){
                                    tomorrowArr[i].innerText = `${baseWayData.maxwind_mph}`;
                                }
                                if(i == 3){
                                    tomorrowArr[i].innerText = `${baseWayData.daily_chance_of_snow}%`;
                                }
                                if(i == 4){
                                    tomorrowArr[i].innerText = `${baseWayData.daily_chance_of_rain}%`;
                                }
                                if(i == 5){
                                    tomorrowArr[i].innerText = `${baseWayData.maxtemp_c}`;
                                }
                                if(i == 6){
                                    tomorrowArr[i].innerText = `${baseWayData.mintemp_c}`;
                                }
                                if(i == 7){
                                    tomorrowArr[i].innerText = `${baseWayData.maxtemp_f}`;
                                }
                                if(i == 8){
                                    tomorrowArr[i].innerText = `${baseWayData.mintemp_f}`;
                                } 
                            }
                        })
                    }
                    tomorrow();
     */