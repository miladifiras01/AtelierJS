const l = document.querySelectorAll("div ol li ");
for (let i = 0; i < l.length; i++) {
    l[i].addEventListener("click",
        () => {

            setBg(l, i);
        })
}
const setBg = (l, i) => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    l[i].style.backgroundColor = "#" + randomColor;
}

