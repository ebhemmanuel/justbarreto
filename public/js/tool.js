(function(){
    // Object Pool
    var users=[];
    // constructor function
    function bmr (n,g,w,h,a,ac,o,goal){
        var obj      = {};
        var First    = '';
        obj.Username = n;
        obj.Gender   = g;
        obj.Info     = {
                        Weight:w,
                        Height:(h/12).toFixed(1),
                        Age:a,
                        'Active Level':ac
                        };
        obj.Option   = o;
        obj.BMR      = '';
        obj.Protein  = '';
        obj.Carb     = '';
        obj.Satfat   = '';
        obj.rate     = '';
        obj.rateNum  = '';
        obj.Goal     = goal-w;

        if        (g== 'Male'   )                   {First=Math.round(66+(6.3*w)+(12.9*h)-(6.8*a))}
        else if   (g== 'Female' )                   {First=Math.round(655+(4.3*w)+(4.7*h)-(4.7*a))}

        var ratio=[Math.round(1.2*First),
                   Math.round(1.4*First),
                   Math.round(1.6*First)];

        if        (ac== '2x'  )                     {obj.BMR = ratio[0]}
        else if   (ac== '4x'  )                     {obj.BMR = ratio[1]}
        else if   (ac== '6x'  )                     {obj.BMR = ratio[2]}

        obj.weightLoss = obj.BMR-300
        obj.gainWeight = obj.BMR+500
        obj.maintain   = obj.BMR;
        // obj.Result=''

        if        (o== 'Weight Loss'     )          {obj.Result = obj.weightLoss}
        else if   (o== 'Gains'           )          {obj.Result = obj.gainWeight}
        else if   (o== 'Maintain Weight' )          {obj.Result = obj.maintain  }



        if        (o== 'Maintain Weight' )          {
                                                     obj.Protein = (Math.round(w*0.36));
                                                     obj.Carb    = (Math.round(w*1.5))
                                                     obj.rateNum = (obj.Result*7)-(200*5)
                                                    }

        else if   (o== 'Weight Loss'     )          {
                                                     obj.Protein = (Math.round(w*0.8));
                                                     obj.Carb    = (Math.round(w*1.2));
                                                     obj.Satfat  = Math.round(obj.Result*.07);
                                                     obj.rateNum = (obj.Result*7)-(400*6)
                                                    }

        else if   (o== 'Gains'           )          {
                                                     obj.Protein = (Math.round(w*1.5));
                                                     obj.Carb    = (Math.round(w*2.2))
                                                    }



        if      ((obj.rateNum<=7000)||(obj.rateNum<=9000))  {obj.rate= 'Weekly calorie deficit:'+' '+ obj.rateNum+' '+ 'Loose 2lb/wk' + ' | ' +'400 deficit per day.'}
        else if (obj.rateNum>=10500)                        {obj.rate= 'Weekly calorie deficit:'+' '+ obj.rateNum+' '+ 'Loose 3lb/wk' + ' | ' +'400 deficit per day.'}

        users.push(obj);
    }
   // Parses out the objects and its keys
    function showInfo (arr) {
        arr.forEach(function(e){
                for( var key in e ){
                console.log (key+':', e[key]);}
                console.log ('');
                console.log ('-----------------');
                console.log (''); }
        )}

    //Weight string to number
    function weightC(e,x,c){
        var n1     = e.toString();
        var n2     = x.toString();
        var n3     = c.toString();
        var result = parseInt(n1+n2+n3);
        return result;
    }
    //Height string to number
    function heightC(e,x){
        var feet1       = e.toString();
        var feet2       = '.'+x.toString();
        var collect     = parseFloat(feet1+feet2).toFixed(1);
        var inches      = Math.floor(collect * 12);
        return inches;
    }
    //Age function
    function myAge (e,x,c){
        var today_date  = new Date();
        var today_year  = today_date.getFullYear();
        var today_month = today_date.getMonth()+1;
        var today_day   = today_date.getDate();
        var age         = today_year - c;
        if ( today_month < e)                      {age--;}
        if ((e  == today_month) && (today_day < x)){age--;}
        return age;
    }
    //Gender
    function myGender(e){
        var gender  = ['Male','Female'];
        return gender[e];
    }
    //Active level a week
    function myActive(e){
        var active  = ['2x','4x','6x'];
        return active[e];
    }
    //General Goal
    function myOptions(e){
        var options = ['Weight Loss','Gains','Maintain Weight'];
        return options[e];
    }

    var today_date  = new Date();
    var today_year  = today_date.getFullYear();
    var today_month = today_date.getMonth()+1;
    var today_day   = today_date.getDate();

    var switchG     = 0;
    var switchAc    = 0;
    var switchOp    = 0;

    var weight      = [1,6,1   ];
    var height      = [5,9     ];
    var age         = [3,4,1989];


    bmr('Emmanuel',
        myGender(switchG),
        weightC(
            weight[0],
            weight[1],
            weight[2]
             ),
        heightC(
            height[0],
            height[1]
            ),
        myAge(
            age[0],
            age[1],
            age[2]
            ),
        myActive(switchAc),
        myOptions(switchOp),
        140                     // Desired Weight
        );

    bmr('Angelica',
        myGender(1)     ,
        weightC(1,4,5)  ,
        heightC(5,3)    ,
        myAge(9,16,1992),
        myActive(0)     ,
        myOptions(0)    ,
        110
       );

    showInfo(users);

})();

