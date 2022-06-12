let idade = 12;

switch(idade) {
    case 5:
    case 6:
    case 7:
        console.log("Você é Infantil A");
        break;
    case 8:
    case 9:
    case 10:
    case 11:
        console.log("Você é Infantil B");
        break
    case 12:
    case 13:
        console.log("Você é Juvenil A");
        break;
    case 14:
    case 15:
    case 16:
    case 17:
        console.log("Você é Juvenil B");
        break;
    default:
        console.log("Você ainda não pode competir!")
        break;
}