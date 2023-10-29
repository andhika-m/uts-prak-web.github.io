const btn = document.querySelectorAll("body button");

btn.forEach(function (pil) {
    pil.addEventListener('click', function () {
        let namebtn = pil.getAttribute('name');
        geserCek(namebtn);
    });
});

function geserCek(nbtn) {
    const table = document.querySelectorAll('.' + nbtn);
    if (table[0].disabled == true) {
        autoNext(0, nbtn);
    } else {
        table[0].select();
    }

    for (let i = 0; i < table.length; i++) {
        table[i].addEventListener('input', function () {
            if (i == table.length - 1) {
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);

            } else if (i == table.length - 2 && table[table.length - 1].disabled == true) {
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);

            } else {
                autoNext(i, nbtn);
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);
            }
        });
    }
}

function autoNext(i, cn) {
    let d = document.querySelectorAll('.' + cn);
    if (d[i + 1].disabled == true) {
        d[i + 2].select();

    } else {
        d[i + 1].select();
    }
}

function catString(cn) {
    var concat = "";
    let d = document.querySelectorAll('.' + cn);
    for (let i = 0; i < d.length; i++) {
        concat += d[i].value;
    }
    return concat;
}

function submitString(concat, tipe, tabel) {
    if (concat.toUpperCase() == "JAVA" && tipe == "m1") {
        pengulanganTabel(tabel);
        highlightCorrectAnswers(tabel);
    } else if (concat.toUpperCase() == "JAVASCRIPT" && tipe == "d1") {
        pengulanganTabel(tabel);
        highlightCorrectAnswers(tabel);
    } else if (concat.toUpperCase() == "SASS" && tipe == "m2") {
        pengulanganTabel(tabel);
        highlightCorrectAnswers(tabel)
    } else if (concat.toUpperCase() == "TEXT" && tipe == "m3") {
        pengulanganTabel(tabel);
        highlightCorrectAnswers(tabel)
    } else if (concat.toUpperCase() == "VUE" && tipe == "d4") {
        pengulanganTabel(tabel);
        highlightCorrectAnswers(tabel)
    } else if (concat.toUpperCase() == "EXPRESS" && tipe == "m5") {
        pengulanganTabel(tabel);
        highlightCorrectAnswers(tabel)
    } else if (concat.toUpperCase() == "TITLE" && tipe == "m6") {
        pengulanganTabel(tabel);
        highlightCorrectAnswers(tabel)
    } else if (concat.toUpperCase() == "HTML" && tipe == "m7") {
        pengulanganTabel(tabel);
        highlightCorrectAnswers(tabel)
    } else if (concat.toUpperCase() == "HTTPS" && tipe == "d7") {
        pengulanganTabel(tabel);
        highlightCorrectAnswers(tabel)
    } else if (concat.toUpperCase() == "SIZE" && tipe == "m8") {
        pengulanganTabel(tabel);
        highlightCorrectAnswers(tabel)
    } else if (concat.toUpperCase() == "REACT" && tipe == "d9") {
        pengulanganTabel(tabel);
        highlightCorrectAnswers(tabel)
    } else if (concat.toUpperCase() == "STYLE" && tipe == "d10") {
        pengulanganTabel(tabel);
        highlightCorrectAnswers(tabel)
    }
}

function pengulanganTabel(table) {
    for (let j = 0; j < table.length; j++) {
        table[j].disabled = true;
    }
}

function highlightCorrectAnswers(tabel) {
    for (let j = 0; j < tabel.length; j++) {
        tabel[j].disabled = true;
        tabel[j].style.backgroundColor = "yellow";
    }
}