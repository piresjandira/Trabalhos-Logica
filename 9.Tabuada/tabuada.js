/**
 * While - Tabuada completa
 * @author Jandira Pires
 */
// variaveis x e y

document.write("<h1>Tabuada Completa</h1>")
document.write("<hr>")
document.write("<small>@Jandira</small>")

let x = 1, y


while (x < 11) {
    document.write("<p> Tabuada do " + x + " </p> ")
    y = 1
    while (y < 11) {
        document.write(x + " x " + y + " = " + (x * y) + "<br>")
        y++
    }
    x++
}