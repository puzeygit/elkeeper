function Template(user, guests, table, total) {
  const string = `
<!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="x-apple-disable-message-reformatting">
  <title>Your recepit</title>
  <xml>
    <o:OfficeDocumentSettings>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <style>
    table {border-collapse: collapse;}
    td,th,div,p,a,h1,h2,h3,h4,h5,h6 {font-family: "Segoe UI", sans-serif; mso-line-height-rule: exactly;}
  </style>
  <![endif]-->
  <style>
    @media screen {
      img {
        max-width: 100%;
      }
      td,
      th {
        box-sizing: border-box;
      }
      u~div .wrapper {
        min-width: 100vw;
      }
      a[x-apple-data-detectors] {
        color: inherit;
        text-decoration: none;
      }
      .all-font-roboto {
        font-family: Roboto, -apple-system, "Segoe UI", sans-serif !important;
      }
      .all-font-sans {
        font-family: -apple-system, "Segoe UI", sans-serif !important;
      }
    }
    @media (max-width: 600px) {
      .sm-inline-block {
        display: inline-block !important;
      }
      .sm-hidden {
        display: none !important;
      }
      .sm-leading-32 {
        line-height: 32px !important;
      }
      .sm-p-20 {
        padding: 20px !important;
      }
      .sm-py-12 {
        padding-top: 12px !important;
        padding-bottom: 12px !important;
      }
      .sm-text-center {
        text-align: center !important;
      }
      .sm-text-xs {
        font-size: 12px !important;
      }
      .sm-text-lg {
        font-size: 18px !important;
      }
      .sm-w-1-4 {
        width: 25% !important;
      }
      .sm-w-3-4 {
        width: 75% !important;
      }
      .sm-w-full {
        width: 100% !important;
      }
    }
  </style>
  <style>
    @media (max-width: 600px) {
      .sm-dui17-b-t {
        border: solid #4299e1;
        border-width: 4px 0 0;
      }
    }
  </style>
</head>
<body style="box-sizing: border-box; margin: 0; padding: 0; width: 100%; word-break: break-word; -webkit-font-smoothing: antialiased; background-color: #f5dbce;">
  <table class="wrapper all-font-sans" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation">
      <td align="center" style="padding: 24px;" width="100%">
        <table class="sm-w-full" width="600" cellpadding="0" cellspacing="0" role="presentation">
            <td align="left" class="sm-p-20 sm-dui17-b-t" style="border-radius: 2px; padding: 40px; position: relative; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05); vertical-align: top; z-index: 50;" bgcolor="#ffffff" valign="top">
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
              <tr width="100%" >
                <img src="http://luckyline_images_storage.commondatastorage.googleapis.com/pictures/images/000/004/069/half_wide/107_%28700x1500%29.jpg?1491165773" object-fit="cover" width="100%" height="100%"/>
              </tr>
                <tr>
                  <td width="80%">
                    <h1 class="sm-text-lg all-font-roboto" style="font-weight: 700; line-height: 100%; margin: 0; margin-bottom: 4px; font-size: 24px;">El-Keeper Receipt</h1>
                    <p class="sm-text-xs" style="margin: 0; color: #a0aec0; font-size: 14px;">Ваш чек сформирован</p>
                  </td>
                </tr>
              </table>
              <div style="line-height: 32px;">&zwnj;</div>
              <table class="sm-leading-32" style="line-height: 28px; font-size: 14px;" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td class="sm-inline-block" style="color: #718096;" width="50%">Принял заказ сотрудник</td>
                  <td class="sm-inline-block" style="font-weight: 600; text-align: right;" width="50%" align="right">${user}</td>
                </tr>
                <tr>
                  <td class="sm-inline-block" style="color: #718096;" width="50%">Количество посетителей</td>
                  <td class="sm-inline-block" style="font-weight: 600; text-align: right;" width="50%" align="right">${guests}</td>
                </tr>
                <tr>
                <td class="sm-inline-block" style="color: #718096;" width="50%">Номер столика</td>
                <td class="sm-inline-block" style="font-weight: 600; text-align: right;" width="50%" align="right">${table}</td>
              </tr>
              </table>
              <table style="line-height: 28px; font-size: 14px;" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="color: #718096;" width="50%">Сумма счёта</td>
                  <td style="font-weight: 600; text-align: right;" width="50%" align="right">₽  ${Number(total).toFixed(2)}</td>
                </tr>
                <tr>
                  <td style="color: #718096;" width="50%">В т.ч. НДС 18%</td>
                  <td style="font-weight: 600; text-align: right;" width="50%" align="right">₽  ${Number(total * 0.18).toFixed(2)}</td>
                </tr>
                <tr>
                  <td style="font-weight: 600; padding-top: 32px; color: #000000; font-size: 20px;" width="50%">Итоговый счёт</td>
                  <td style="font-weight: 600; padding-top: 32px; text-align: right; color: #68d391; font-size: 20px;" width="50%" align="right">₽  ${Number(total).toFixed(2)}</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>

  </table>
</body>
</html>
  `;
  return string;
}

module.exports = Template;
