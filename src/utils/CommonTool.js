function CommonTool(){}
/**
 * formatData(date,"yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
 * formatData(date,"yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18 
 */
CommonTool.formatData = function(date,fmt){
    var o = {
        "M+": date.getMonth() + 1, //月份 
        "d+": date.getDate(), //日 
        "h+": date.getHours(), //小时 
        "m+": date.getMinutes(), //分 
        "s+": date.getSeconds(), //秒 
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    };
    if(/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for(var k in o)
        if(new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
//文本转Date，注意只支持format： yyyy-MM-dd，yyyy-MM-dd HH，yyyy-MM-dd HH：mm ，  yyyy-MM-dd HH:mm:ss
CommonTool.StringToDate = function(dateString){
    //穿过的日期可能不带秒,做0补充
    var dayAndTimeStrs = dateString.split(' ');
    if(dayAndTimeStrs.length == 2)
    {
        var timeStrs = dayAndTimeStrs[1].split(":");
        if(timeStrs.length == 1)
        {
            dateString +=":00:00";
        }
        else if(timeStrs.length == 2)
        {
            dateString +=":00";
        }
        
    }
    var DATE_REGEXP = new RegExp("(\\d{4})-(\\d{2})-(\\d{2})([T\\s](\\d{2}):(\\d{2}):(\\d{2})(\\.(\\d{3}))?)?.*");
   if(DATE_REGEXP.test(dateString))
   {
       //$month-1因为月从0开始，而文本中月是1月开始
       var timestamp = dateString.replace(DATE_REGEXP, function($all,$year,$month,$day,$part1,$hour,$minute,$second,$part2,$milliscond){
           var date = new Date($year, $month-1,$day, $hour||"00", $minute||"00", $second||"00", $milliscond||"00");
               return date.getTime();
           });
       var date = new Date();
       date.setTime(timestamp);
       return date;
   }
   return null;
}

export default CommonTool;