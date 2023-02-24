export function makeid(length) {
    let result = '';
    const characters = 'ABC DEF GHIJKLMN OPQRSTUVWXYZ efghijk lmno pqr stuvw xyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}