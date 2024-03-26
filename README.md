# FORM BIGLIETTO DEL TRENO

## RACCOLTA DATI
- input km da percorrere
- età del passeggero

### Variabili
- prezzo al km (0.21€ / km)
- % di sconto
- calcolo prezzo base baseTicket = km * costo al km
- formula per calcolo discount = baseTicket - (baseTicket * discount / 100)

## Logica
Aggiungere un event listener al bottone invia, che farà accadere le seguenti cose al click:
-  se età < 18 
    discount = 20
-  altrimenti se > 65
    discount = 40
- altrimenti 
    discount = 0

## Output
    DURANTE LA FASE DI PROGETTAZIONE:
        - tutti gli output devono essere in console log
    DOPO AVER VERIFICATO IL CORRETTO FUNZIONAMENTO DI TUTTO IL PROGRAMMA:
        - stampare in pagina tutti i dati 
        - stilizzare la pagina a piacimento
        - tutti i dati devono venire stampati in forma umana