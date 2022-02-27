const t = document.querySelector("#text");
const s = document.querySelector("#number");
const p = document.querySelector("#police");
const test = document.querySelector("#test");

t.addEventListener("input",
    (e) => {
        test.style.color = e.target.value;
        t.style.color = e.target.value;
    }
)
s.addEventListener("input",
    (e) => {
        test.style.fontSize = e.target.value + 'px';
    }
)
p.addEventListener("input",
    (e) => {
        test.style.fontFamily = e.target.value;
    }
)