// script.js

// ボタンを作成し、ページに追加する関数
function addButton() {
  // 新しいボタン要素を作成
  var button = document.createElement("button");
  // ボタンのテキストを設定
  button.innerText = "新しいボタン";
  // ボタンがクリックされた時のイベントリスナーを追加
  button.addEventListener("click", function () {
    alert("新しいボタンがクリックされました！");
  });

  // ボタンをページに追加
  var container = document.querySelector(".container");
  container.appendChild(button);
}

// ページが読み込まれた時に実行される関数
window.onload = function () {
  // addButton関数を呼び出してボタンを追加
  addButton();
};
