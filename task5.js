// task 5


    var arr =[3,6,-2,-5,7,3];
     var p=0;
     for(var i=0;  i<arr.length;  i++)
     {
       if(arr[i]*arr[i+1] > p)
       {
        p=arr[i]*arr[i+1];
        console.log(p);
       };
     };