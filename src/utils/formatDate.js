export function FormatDate(isoString){
if(!isoString) return

const date = new Date(isoString);
return date.toLocaleDateString('pt-BR');
}