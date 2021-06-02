
dineroR = prompt("Cúanto dinero tiene Roberto?");

// dineroC = prompt("Cúanto dinero tiene Cofla?");

// dineroP = prompt("Cúanto dinero tiene Pedro?");

if (dineroR < 0.6) {

    document.write("Roberto tiene " + dineroR + " USD y no puede comprar ningún helado");

}  else if (dineroR > 1.6) {

    document.write("Roberto tiene " + dineroR + " USD y puede comprar cualquier helado");

}   else if (dineroR < 1) {

    res = dineroR % 0.6;

    document.write("Roberto tiene " + dineroR + " USD y el helado más caro que puede comprar es: Palito de helado de agua y las vueltas son " + res);

}   else if (dineroR < 1.6) {

    res2 = dineroR % 1;

    document.write("Roberto tiene " + dineroR + " USD y el helado más caro que puede comprar es: Palito de crema y las vueltas son " + res2);

}   else if (dineroR = 1.6) {

    res3 = dineroR % 1.6;

    document.write("Roberto tiene " + dineroR + " USD y el helado más caro que puede comprar es: Palito de HELADIX y las vueltas son " + res3);

}   


