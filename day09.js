//TODO 타입스크립트로 HTML 변경, 조작할 떄 주의점
var title = document.querySelector('#title');
//narrowing1
if (title !== null) {
    title.textContent = '반가워요';
}
//narrowing2 : 가장 많이 쓰게 될 것임
//object instanceof class명 : object가 class의 자식이냐?
if (title instanceof Element) {
    title.textContent = '반가워요';
}
//narrowing3 : as 키워드 이 요소는 Element로 간주하기. 비상시. 확신이 있을 때
var title2 = document.querySelector('#title');
title2.textContent = '반가워요';
//narrowing4 : 오브젝트에 붙이는 ? -> 자료가 있으면 출력, 없으면 이 자리에 undefined 남기기
//optional chaining
if (title2 === null || title2 === void 0 ? void 0 : title2.textContent) {
    title2.textContent = '반가워요';
}
//narrowing5 : tsconfig.json에서
//strict 모드 끄기
var link = document.querySelector(".link");
if (link instanceof HTMLAnchorElement) {
    link.href = "https://kakao.com";
}
//Element 타입
//HTMLAnchorElement : a 태그, href, style, class 쓸 수 있음
//HTMLHeadingElement : h 태그
//HTMLButtonElement
//HTMLImageElement : img 태그
//HTMLElement
var button = document.querySelector("#button");
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    console.log('안녕');
});
var image = document.querySelector("#image");
if (image instanceof HTMLImageElement) {
    image.src = "new.jpg";
}
var atags = document.querySelectorAll(".naver");
atags.forEach(function (el) {
    if (el instanceof HTMLAnchorElement) {
        el.href = "https://kakao.com";
    }
});
console.log(atags);
