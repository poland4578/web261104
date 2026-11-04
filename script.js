// script.js : 내 영화 평점 통계(콘솔판)
// 작성자 : 배찬휘(2651031)
const titles = ["극장판 치이카와: 인어 섬의 비밀", "암살자(들)", "실낙원", "타짜: 벨제붑의 노래", "클레이페이스"];
const ratings = [7.4, 7.2, 8.0, 7.0, 7.5];
const years = [2026, 2026, 2026, 2026, 2026];

for (let index in titles) {
    console.log(`영화 ${Number(index) + 1}: ${titles[index]}`);
}

const gogodan = function (dan) {
    for (let i = 1; i <= 9; i++) {
        console.log(`${dan} x ${i} = ${dan * i}`);
    }
};

gogodan( sumsum(2,5));

(function lint (){
    console.log("초기화 실행");
})();

let sum = 0;
for (let i = 0; i < ratings.length; i++) {
    sum = sum + ratings[i];
}
console.log("합계:", sum);

const average = sum / ratings.length;
console.log("평균:", average);

let max = ratings[0];
let maxindex = 0;
let count = 0;
for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] > max) {
        max = ratings[i];
        maxindex = i;
    }
    if (ratings[i] >= 8) {
        count++;
    }
}

console.log(`최고: ${titles[maxindex]} (${max}점)`);
console.log(`8점 이상: ${count}편`);

for (let i = 0; i < titles.length; i++) {
    let label;

    if (ratings[i] >= 8.5) {
        label = "명작";
    } else if (ratings[i] >= 7.5) {
        label = "추천";
    } else {
        label = "보통";
    }

    console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);
}

// const avgText = average.toFixed(1);
// const best = titles[maxIndex];
// alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);