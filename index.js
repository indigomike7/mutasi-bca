const username = "yudiyuni1016";
const password = "123456";
const bca = require('mandiri-scraper');
var id_anggota="";
var jumlah = 0;

async function getsaldobca(){
await  bca
  .getSaldo(username, password)
  .then(res => {
    console.log('saldo ', res);
  })
  .catch(err => {
    console.log('error ', err);
  });
}
async function getmutasibca(){
	var mutasi = 0;
await bca
  .getMutasi(username, password)
  .then(res => {
    console.log('mutasi ', res);
	mutasi = res;
  })
  .catch(err => {
    console.log('error ', err);
  });
  return mutasi;
}
getsaldobca();

// print process.argv
process.argv.forEach(function (val, index, array) {
	if(index==2)
	{
		id_anggota = val;
	}
	if(index==3)
	{
		jumlah = val;
	}
  console.log(index + ': ' + val);
});
console.log(id_anggota + " "  + jumlah);
//mutasi = getmutasibca();
//console.log(mutasi[0]);