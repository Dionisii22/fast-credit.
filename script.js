function calc(){
const A=amount.value,n=months.value,r=rate.value/100/12;
const p=A*(r/(1-Math.pow(1+r,-n)));
res.innerHTML=`Щомісячний платіж: ${p.toFixed(2)} грн`;
}