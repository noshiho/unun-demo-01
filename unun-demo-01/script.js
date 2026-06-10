const slideshow = document.getElementById("slideshow");
const slideTrack = document.getElementById("slideTrack");
const slides = document.querySelectorAll(".slide");

let currentIndex = 0;

// 最後の1枚はループ用の複製なので、実画像数は -1
const realSlideCount = slides.length - 1;

function goToSlide(index, withAnimation = true) {
  if (withAnimation) {
    slideTrack.style.transition = "transform 650ms ease";
  } else {
    slideTrack.style.transition = "none";
  }

  slideTrack.style.transform = `translateX(-${index * 100}vw)`;
}

slideshow.addEventListener("click", () => {
  currentIndex = currentIndex + 1;
  goToSlide(currentIndex, true);
});

// スライド移動が終わったあとに処理
slideTrack.addEventListener("transitionend", () => {
  // 複製の1枚目まで来たら
  if (currentIndex === realSlideCount) {
    // 見た目は同じ画像のまま、アニメーションなしで本物の1枚目へ戻す
    currentIndex = 0;
    goToSlide(currentIndex, false);
  }
});