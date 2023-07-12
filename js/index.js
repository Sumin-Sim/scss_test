import $, { css } from "jquery";

$(function() {
    navCur();
    writer();
    booklistR();
    booklistM();
});

// nav:hover animation
function navCur() {
    $('header nav>ul>li:nth-child(6)>a').addClass('selected');
}

// writer
function writer() {
    const writer = document.querySelectorAll('article#genre>section>ul>li');
    $('article#genre>section>ul>li:first-child').addClass('selected');

    writer.forEach(function(item) {
        item.addEventListener('click',function() {
            $(writer).removeClass('selected');
            $(this).addClass('selected');
        });
    });
}

// booklist
function booklistR() {
    const writer = document.querySelectorAll('article#genre section#genre01>ul>li');

    function Booklist(title01,img01,info01,ins01,del01,dc01, title02,img02,info02,ins02,del02,dc02, title03,img03,info03,ins03,del03,dc03, title04,img04,info04,ins04,del04,dc04) {
        // 01
        this.title01 = title01,
        this.img01 = img01,
        this.info01 = info01,
        this.ins01 = ins01,
        this.del01 = del01,
        this.dc01 = dc01;
        
        // 02
        this.title02 = title02,
        this.img02 = img02,
        this.info02 = info02,
        this.ins02 = ins02,
        this.del02 = del02,
        this.dc02 = dc02;

        // 03
        this.title03 = title03,
        this.img03 = img03,
        this.info03 = info03,
        this.ins03 = ins03,
        this.del03 = del03,
        this.dc03 = dc03;

        // 04
        this.title04 = title04,
        this.img04 = img04,
        this.info04 = info04,
        this.ins04 = ins04,
        this.del04 = del04,
        this.dc04 = dc04;
    }

    Booklist.prototype.list = function() {
        // 01
        document.querySelector('article#genre section#genre01 div.booklist>dl:nth-child(1)>dt').innerHTML = this.title01;
        document.querySelector('article#genre section#genre01 div.booklist>dl:nth-child(1)>dd:nth-of-type(1)>img').setAttribute('src', this.img01);
        document.querySelector('article#genre section#genre01 div.booklist>dl:nth-child(1)>dd:nth-of-type(1)>img').setAttribute('alt', this.title01);
        document.querySelector('article#genre section#genre01 div.booklist>dl:nth-child(1)>dd:nth-of-type(2)').innerHTML = this.info01;
        document.querySelector('article#genre section#genre01 div.booklist>dl:nth-child(1)>dd:nth-of-type(3)>ins').innerHTML = this.ins01;
        document.querySelector('article#genre section#genre01 div.booklist>dl:nth-child(1)>dd:nth-of-type(3)>del').innerHTML = this.del01;
        document.querySelector('article#genre section#genre01 div.booklist>dl:nth-child(1)>dd:nth-of-type(3)>span').innerHTML = this.dc01;

        // 02
        document.querySelector('article#genre section#genre01 div.booklist>dl:nth-child(2)>dt').innerHTML = this.title02;
        document.querySelector('article#genre section#genre01 div.booklist>dl:nth-child(2)>dd:nth-of-type(1)>img').setAttribute('src', this.img02);
        document.querySelector('article#genre section#genre01 div.booklist>dl:nth-child(2)>dd:nth-of-type(1)>img').setAttribute('alt', this.title02);
        document.querySelector('article#genre section#genre01 div.booklist>dl:nth-child(2)>dd:nth-of-type(2)').innerHTML = this.info02;
        document.querySelector('article#genre section#genre01 div.booklist>dl:nth-child(2)>dd:nth-of-type(3)>ins').innerHTML = this.ins02;
        document.querySelector('article#genre section#genre01 div.booklist>dl:nth-child(2)>dd:nth-of-type(3)>del').innerHTML = this.del02;
        document.querySelector('article#genre section#genre01 div.booklist>dl:nth-child(2)>dd:nth-of-type(3)>span').innerHTML = this.dc02;

        // 03
        document.querySelector('article#genre section#genre01 div.booklist>dl:nth-child(3)>dt').innerHTML = this.title03;
        document.querySelector('article#genre section#genre01 div.booklist>dl:nth-child(3)>dd:nth-of-type(1)>img').setAttribute('src', this.img03);
        document.querySelector('article#genre section#genre01 div.booklist>dl:nth-child(3)>dd:nth-of-type(1)>img').setAttribute('alt', this.title03);
        document.querySelector('article#genre section#genre01 div.booklist>dl:nth-child(3)>dd:nth-of-type(2)').innerHTML = this.info03;
        document.querySelector('article#genre section#genre01 div.booklist>dl:nth-child(3)>dd:nth-of-type(3)>ins').innerHTML = this.ins03;
        document.querySelector('article#genre section#genre01 div.booklist>dl:nth-child(3)>dd:nth-of-type(3)>del').innerHTML = this.del03;
        document.querySelector('article#genre section#genre01 div.booklist>dl:nth-child(3)>dd:nth-of-type(3)>span').innerHTML = this.dc03;

        // 04
        document.querySelector('article#genre section#genre01 div.booklist>dl:nth-child(4)>dt').innerHTML = this.title04;
        document.querySelector('article#genre section#genre01 div.booklist>dl:nth-child(4)>dd:nth-of-type(1)>img').setAttribute('src', this.img04);
        document.querySelector('article#genre section#genre01 div.booklist>dl:nth-child(4)>dd:nth-of-type(1)>img').setAttribute('alt', this.title04);
        document.querySelector('article#genre section#genre01 div.booklist>dl:nth-child(4)>dd:nth-of-type(2)').innerHTML = this.info04;
        document.querySelector('article#genre section#genre01 div.booklist>dl:nth-child(4)>dd:nth-of-type(3)>ins').innerHTML = this.ins04;
        document.querySelector('article#genre section#genre01 div.booklist>dl:nth-child(4)>dd:nth-of-type(3)>del').innerHTML = this.del04;
        document.querySelector('article#genre section#genre01 div.booklist>dl:nth-child(4)>dd:nth-of-type(3)>span').innerHTML = this.dc04;
    }

    let bookinfo = [
        new Booklist('당신의 이해를 돕기 위하여 1', './img/romance_01_01.png', '이보라 저 | 연담', '13,000원', '11,700원', '(10% 할인)', '당신의 이해를 돕기 위하여 2', './img/romance_01_02.png', '이보라 저 | 연담', '13,000원', '11,700원', '(10% 할인)', '당신의 이해를 돕기 위하여 3', './img/romance_01_03.png', '이보라 저 | 연담', '13,000원', '11,700원', '(10% 할인)', '당신의 이해를 돕기 위하여 4', './img/romance_01_04.png', '이보라 저 | 연담', '13,000원', '11,700원', '(10% 할인)'),
        new Booklist('어느 날, 너의 심장이 멈출 거라 말했다', './img/romance_02_01.png', '클로에 윤 저 | 팩토리나인', '12,600원', '14,000원', '(10% 할인)',
        '이렇게 살다가 이렇게 죽을 수는 없다', './img/romance_02_02.png', '클로에 윤 저 | 좋은땅', '14,400원', '16,000원', '(10% 할인)', 
        '심장아, 나대지마 1', './img/romance_02_03.png', '클로에 윤 저 | BOOKK(부크크)', '16,000원', '', '', 
        '심장아, 나대지마 2', './img/romance_02_04.png', '클로에 윤 저 | BOOKK(부크크)', '15,000원', '', ''),
        new Booklist('시간의 계단 1', './img/romance_03_01.png', '주영하 원저/제뉴 글그림 | 다산코믹스', '11,700원', '13,000원', '', 
        '시간의 계단 2', './img/romance_03_02.png', '주영하 원저/제뉴 글그림 | 다산코믹스', '11,700원', '13,000원', '(10% 할인)', 
        '시간의 계단 3', './img/romance_03_03.png', '주영하 원저/제뉴 글그림 | 다산코믹스', '11,700원', '13,000원', '(10% 할인)', 
        '시간의 계단 4', './img/romance_03_04.png', '주영하 원저/제뉴 글그림 | 다산코믹스', '11,700원', '13,000원', '(10% 할인)'),
        new Booklist('네버 세이 네버', './img/romance_04_01.png', '심윤서 저 | 가하', '13,950원', '	15,500원', '(10% 할인)', 
        '난다의 일기', './img/romance_04_02.png', '심윤서 저 | 가하', '9,900원', '	11,000원', '(10% 할인)', 
        '우애수', './img/romance_04_03.png', '심윤서 저 | 가하', '9,900원', '	11,000원', '(10% 할인)', 
        '낯설지만 익숙한', './img/romance_04_04.png', '심윤서 저 | 가하', '	11,520원', '12,800원', '(10% 할인)')
    ]

    writer.forEach(function(item, index) {
        item.addEventListener('click',function() {
            bookinfo[index].list();
        });
    });
}


function booklistM() {
    const writer = document.querySelectorAll('article#genre section#genre03>ul>li');

    function Booklist(title01,img01,info01,ins01,del01,dc01, title02,img02,info02,ins02,del02,dc02, title03,img03,info03,ins03,del03,dc03, title04,img04,info04,ins04,del04,dc04) {
        // 01
        this.title01 = title01,
        this.img01 = img01,
        this.info01 = info01,
        this.ins01 = ins01,
        this.del01 = del01,
        this.dc01 = dc01;
        
        // 02
        this.title02 = title02,
        this.img02 = img02,
        this.info02 = info02,
        this.ins02 = ins02,
        this.del02 = del02,
        this.dc02 = dc02;

        // 03
        this.title03 = title03,
        this.img03 = img03,
        this.info03 = info03,
        this.ins03 = ins03,
        this.del03 = del03,
        this.dc03 = dc03;

        // 04
        this.title04 = title04,
        this.img04 = img04,
        this.info04 = info04,
        this.ins04 = ins04,
        this.del04 = del04,
        this.dc04 = dc04;
    }

    Booklist.prototype.list = function() {
        // 01
        document.querySelector('article#genre section#genre03 div.booklist>dl:nth-child(1)>dt').innerHTML = this.title01;
        document.querySelector('article#genre section#genre03 div.booklist>dl:nth-child(1)>dd:nth-of-type(1)>img').setAttribute('src', this.img01);
        document.querySelector('article#genre section#genre03 div.booklist>dl:nth-child(1)>dd:nth-of-type(1)>img').setAttribute('alt', this.title01);
        document.querySelector('article#genre section#genre03 div.booklist>dl:nth-child(1)>dd:nth-of-type(2)').innerHTML = this.info01;
        document.querySelector('article#genre section#genre03 div.booklist>dl:nth-child(1)>dd:nth-of-type(3)>ins').innerHTML = this.ins01;
        document.querySelector('article#genre section#genre03 div.booklist>dl:nth-child(1)>dd:nth-of-type(3)>del').innerHTML = this.del01;
        document.querySelector('article#genre section#genre03 div.booklist>dl:nth-child(1)>dd:nth-of-type(3)>span').innerHTML = this.dc01;

        // 02
        document.querySelector('article#genre section#genre03 div.booklist>dl:nth-child(2)>dt').innerHTML = this.title02;
        document.querySelector('article#genre section#genre03 div.booklist>dl:nth-child(2)>dd:nth-of-type(1)>img').setAttribute('src', this.img02);
        document.querySelector('article#genre section#genre03 div.booklist>dl:nth-child(2)>dd:nth-of-type(1)>img').setAttribute('alt', this.title02);
        document.querySelector('article#genre section#genre03 div.booklist>dl:nth-child(2)>dd:nth-of-type(2)').innerHTML = this.info02;
        document.querySelector('article#genre section#genre03 div.booklist>dl:nth-child(2)>dd:nth-of-type(3)>ins').innerHTML = this.ins02;
        document.querySelector('article#genre section#genre03 div.booklist>dl:nth-child(2)>dd:nth-of-type(3)>del').innerHTML = this.del02;
        document.querySelector('article#genre section#genre03 div.booklist>dl:nth-child(2)>dd:nth-of-type(3)>span').innerHTML = this.dc02;

        // 03
        document.querySelector('article#genre section#genre03 div.booklist>dl:nth-child(3)>dt').innerHTML = this.title03;
        document.querySelector('article#genre section#genre03 div.booklist>dl:nth-child(3)>dd:nth-of-type(1)>img').setAttribute('src', this.img03);
        document.querySelector('article#genre section#genre03 div.booklist>dl:nth-child(3)>dd:nth-of-type(1)>img').setAttribute('alt', this.title03);
        document.querySelector('article#genre section#genre03 div.booklist>dl:nth-child(3)>dd:nth-of-type(2)').innerHTML = this.info03;
        document.querySelector('article#genre section#genre03 div.booklist>dl:nth-child(3)>dd:nth-of-type(3)>ins').innerHTML = this.ins03;
        document.querySelector('article#genre section#genre03 div.booklist>dl:nth-child(3)>dd:nth-of-type(3)>del').innerHTML = this.del03;
        document.querySelector('article#genre section#genre03 div.booklist>dl:nth-child(3)>dd:nth-of-type(3)>span').innerHTML = this.dc03;

        // 04
        document.querySelector('article#genre section#genre03 div.booklist>dl:nth-child(4)>dt').innerHTML = this.title04;
        document.querySelector('article#genre section#genre03 div.booklist>dl:nth-child(4)>dd:nth-of-type(1)>img').setAttribute('src', this.img04);
        document.querySelector('article#genre section#genre03 div.booklist>dl:nth-child(4)>dd:nth-of-type(1)>img').setAttribute('alt', this.title04);
        document.querySelector('article#genre section#genre03 div.booklist>dl:nth-child(4)>dd:nth-of-type(2)').innerHTML = this.info04;
        document.querySelector('article#genre section#genre03 div.booklist>dl:nth-child(4)>dd:nth-of-type(3)>ins').innerHTML = this.ins04;
        document.querySelector('article#genre section#genre03 div.booklist>dl:nth-child(4)>dd:nth-of-type(3)>del').innerHTML = this.del04;
        document.querySelector('article#genre section#genre03 div.booklist>dl:nth-child(4)>dd:nth-of-type(3)>span').innerHTML = this.dc04;
    }

    let bookinfo = [
        new Booklist('안젤리크', './img/mystery_01_01.png', '기욤 뮈소 저/양영란 역 | 밝은세상', '15,200원', '16,800원', '(10% 할인)',
        '센 강의 이름 모를 여인', './img/mystery_01_02.png', '기욤 뮈소 저/양영란 역 | 밝은세상', '14,400원', '16,000원', '(10% 할인)', '구해줘 Sauve-moi', './img/mystery_01_03.png', '기욤 뮈소 저/윤미연 역 | 밝은세상', '13,950원', '15,500원', '(10% 할인)', '종이 여자', './img/mystery_01_04.png', '기욤 뮈소 저/전미연 역 | 밝은세상', '15,300원', '17,000원', '(10% 할인)'),
        new Booklist('그리고 아무도 없었다', './img/mystery_02_01.png', '애거사 크리스티 저 | 해문출판사', '10,800원', '12,000원', '(10% 할인)', 
        '애크로이드 살인 사건', './img/mystery_02_02.png', '애거사 크리스티 저 | 황금가지', '10,800원', '12,000원', '(10% 할인)', 
        '0시를 향하여', './img/mystery_02_03.png', '애거사 크리스티 저 | 황금가지', '9,000원', '10,000원', '(10% 할인)', 
        '오리엔트 특급 살인', './img/mystery_02_04.png', '애거사 크리스티 저 | 황금가지', '10,800원', '12,000원', '(10% 할인)'),
        new Booklist('용의자 X의 헌신', './img/mystery_03_01.png', '히가시노 게이고 저/양억관 역 | 재인', '15,120원', '16,800원', '(10% 할인)', 
        '블랙 쇼맨과 이름 없는 마을의 살인', './img/mystery_03_02.png', '히가시노 게이고 저/최고은 역 | 알에이치코리아(RHK)', '17,820원', '19,800원', '(10% 할인)', 
        '가면산장 살인사건', './img/mystery_03_03.png', '히가시노 게이고 저/김난주 역 | 재인', '15,120원', '16,800원', '(10% 할인)', 
        '붉은 손가락', './img/mystery_03_04.png', '히가시노 게이고 저/양윤옥 역 | 현대문학', '15,120원', '16,800원', '(10% 할인)'),
        new Booklist('주홍색 연구', './img/mystery_04_01.png', '아서 코난 도일 저/조승연 그림/김석희 역 | 비룡소', '8,100원', '9,000원', '(10% 할인)', 
        '공포의 계곡', './img/mystery_04_02.png', '아서 코난 도일 저/조승연 그림/김석희 역 | 비룡소', '8,100원', '9,000원', '(10% 할인)', 
        '바스커빌 가의 개', './img/mystery_04_03.png', '아서 코난 도일 저/조승연 그림/김석희 역 | 비룡소', '8,100원', '9,000원', '(10% 할인)', 
        '셜록 홈즈의 사건', './img/mystery_04_04.png', '아서 코난 도일 저/조승연 그림/김석희 역 | 비룡소', '8,100원', '9,000원', '(10% 할인)')
    ]

    writer.forEach(function(item, index) {
        item.addEventListener('click',function() {
            bookinfo[index].list();
        });
    });
}