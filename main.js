$(document).ready(function () {
    for(let i = 1; i <= 3; i++) {
        $(`#img${i}`).on("click", function () {
            $(`#img${i}`).attr("src", `./imgs/${i}b.jpg`);
        })
    }
});