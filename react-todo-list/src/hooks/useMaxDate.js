export function useMaxDate() {
   const todayDate = new Date();
   const year = todayDate.getUTCFullYear();
   let month = todayDate.getMonth() + 1;
   let tdate = todayDate.getDate();
   if (month < 10) {
      month = "0" + month
   }
   if (tdate < 10) {
      tdate = "0" + tdate;
   }

   return year + "-" + month + "-" + tdate;
}
