document.getElementById('saveContact').addEventListener('click', () => {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:池田;理恵;;;',
    'FN:池田 理恵',
    'TITLE:薬剤師・博士（臨床薬学）',
    'ORG:こはく堂薬局 / キミのミライ・ラボ',
    'ADR;TYPE=WORK:;;東小路町10-16;諫早市;長崎県;;日本',
    'TEL;TYPE=CELL:080-3999-9153',
    'EMAIL;TYPE=INTERNET:rikeda32@gmail.com',
    'URL:https://kohakudo589.com',
    'URL:https://melab365.vercel.app',
    'URL:https://ph-info.info',
    'END:VCARD'
  ].join('\r\n');
  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = '池田理恵.vcf';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
});
