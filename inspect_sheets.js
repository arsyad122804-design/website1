const xlsx = require('xlsx');
const workbook = xlsx.readFile('lomba/lomba.xlsx');
console.log('Sheet Names:', workbook.SheetNames);
workbook.SheetNames.forEach(name => {
  const sheet = workbook.Sheets[name];
  const data = xlsx.utils.sheet_to_json(sheet);
  console.log(`Sheet: ${name}, Rows: ${data.length}`);
  if (data.length > 0) {
    console.log('First row:', data[0]);
  }
});
