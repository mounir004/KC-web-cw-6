             alert("مرحباً بك في موقعي الذي سيحسب درجتك!!");    

             let grade = prompt("اكتب درجتك هنا");

         console.log(grade);

         if(grade >= 90 ){
            console.log("%c لقد حصلت على امتياز 🥳", "color: blue");
         }
                
         else if(grade >= 80 ){
            console.log( "%c لقد حصلت على جيد جداً🤩", "color: blue" );
         }


         else if(grade >= 70 ){
            console.log("%c لقد حصلت على جيد🙂" , "color: blue");
         }

         else if(grade >= 60 ){
            console.log("%c لقد حصلت على مقبول😕", "color: blue");
         }

         else if(grade >= 50 ){
            console.log("%c لقد حصلت على ضعيف☹️","color: blue" );
         }

        else {
            console.log( "%c راسب💔 ", "color: blue")
                }



             //جافا سكربت ليست جافا