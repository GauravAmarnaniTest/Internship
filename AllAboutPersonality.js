/*
Login Form function : 
*/
function validate()
{
    var username = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var account = document.getElementById("account").value;
    var rname = /^[A-Z a-z]{2,30}$/;
    var rnumber = /^[7-9][0-9]{9}$/;
    var raccount = /^([a-z A-Z 0-9\.-]+)@([a-z A-Z 0-9 -]+).([A-Z a-z]{2,8})(.[A-Z a-z]{2,8})?$/;
    if(rname.test(username))
    {
        alert("Success!");  
        localStorage.setItem("name" , username);
        document.getElementById("lname").style.visibility = "hidden";
        if(rnumber.test(number))
        {
            localStorage.setItem("phone" , number);
            document.getElementById("lnumber").style.visibility = "hidden";
            if(raccount.test(account))
            {
                localStorage.setItem("email" , account);
                document.getElementById("laccount").style.visibility = "hidden";
                return true;
            }
            else 
            {
                document.getElementById("laccount").style.visibility = "visible";
                return false;
            }
        }
        else
        {
            document.getElementById("lnumber").style.visibility = "visible";
            return false;
        }
    }
    else
    {
        document.getElementById("lname").style.visibility = "visible";
        return false;
    }
}   


/*
Contact Form function : 
*/
function takeFeedback()
{
    var fb1 = document.getElementById("f1").value;
    var button = document.getElementById("b1");
    button.style.backgroundColor="green";
    button.innerHTML="Submitted!";
    localStorage.setItem("feedback",fb1);
    document.getElementById("f1").value="";
    alert("Successfully recorded feedback.");
}


/*
Profile Page function : 
*/
function setProfile()
{
    document.getElementById("b1").style.visibility = "hidden";
    document.getElementById("p1").style.visibility = "visible";
    document.getElementById("head1").style.visibility = "visible";
    document.getElementById("d1").style.visibility = "visible";
    document.getElementById("nam").innerHTML=localStorage.getItem("name");
    document.getElementById("num").innerHTML=localStorage.getItem("phone");
    document.getElementById("acc").innerHTML=localStorage.getItem("email");
}


/*
Personality Test function : 
*/
var flag = 0;
var highest = 0;
var personality_type = 0;
var a = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
/*
a[0] = INTJ.
a[1] = 
a[2] = 
a[3] = 
a[4] = 
a[5] = 
a[6] = 
a[7] = 
a[8] = 
a[9] = 
a[10] = 
a[11] = 
a[12] = 
a[13] = 
a[14] = 
a[15] = 
*/
var flag_collection = [];
var question_no = [];
//Function to be called on button click.
function checkValues1()
{
    //question 1
    var str1 = document.getElementById("rd56");
    var str2 = document.getElementById("rd57");
    var str3 = document.getElementById("rd58");
    var str4 = document.getElementById("rd59");
    var str5 = document.getElementById("rd60");
    if(str1.checked==true)
    {
        a[12] += 5;
    }
    else if(str2.checked==true)
    {
        a[12] += 4;
    }
    else if(str3.checked==true)
    {
        a[0] += 0;
    }
    else if(str4.checked==true)
    {
        a[0] += 0;
    }
    else if(str5.checked==true)
    {
        a[0] += 0;
    }
    else 
    {
        question_no.push(1);
    }

    //question 2
    var str1 = document.getElementById("rd61");
    var str2 = document.getElementById("rd62");
    var str3 = document.getElementById("rd63");
    var str4 = document.getElementById("rd64");
    var str5 = document.getElementById("rd65");
    if(str1.checked==true)
    {
        a[8] += 3,a[14] += 3,a[3] += 3,a[1] += 3,a[2] += 3;
    }
    else if(str2.checked==true)
    {
        a[0] += 2,a[12] += 2;
    }
    else if(str3.checked==true)
    {
        a[10] += 1,a[13] += 1;
    }
    else if(str4.checked==true)
    {
        a[4] += 2,a[6] += 2;
    }
    else if(str5.checked==true)
    {
        a[11] += 3,a[5] += 3,a[15] += 3,a[7] += 3,a[9] += 3;
    }
    else 
    {
        question_no.push(2);
    }

    //question 3
    var str1 = document.getElementById("rd66");
    var str2 = document.getElementById("rd67");
    var str3 = document.getElementById("rd68");
    var str4 = document.getElementById("rd69");
    var str5 = document.getElementById("rd70");
    if(str1.checked==true)
    {
        a[0] += 3,a[4] += 3,a[5] += 3;
    }
    else if(str2.checked==true)
    {
        a[8] += 2,a[12] += 2,a[1] += 2,a[9] += 2;
    }
    else if(str3.checked==true)
    {
        a[13] += 1;
    }
    else if(str4.checked==true)
    {
        a[7] += 2,a[10] += 2,a[2] += 2,a[3] += 2;
    }
    else if(str5.checked==true)
    {
        a[6] += 3,a[11] += 3,a[15] += 3, a[14] += 3;    
    }
    else 
    {
        question_no.push(3);
    }

    //question 4
    var str1 = document.getElementById("rd71");
    var str2 = document.getElementById("rd72");
    var str3 = document.getElementById("rd73");
    var str4 = document.getElementById("rd74");
    var str5 = document.getElementById("rd75");
    if(str1.checked==true)
    {
        a[0] += 3,a[11] += 3,a[2] += 3;
    }
    else if(str2.checked==true)
    {
        a[8] += 2,a[4] += 2,a[10] += 2,a[9] += 2;
    }
    else if(str3.checked==true)
    {
        a[3] += 1,a[13] += 1;
    }
    else if(str4.checked==true)
    {
        a[12] += 2,a[14] += 2;
    }
    else if(str5.checked==true)
    {
        a[6] += 3,a[1] += 3,a[5] += 3,a[7] += 3,a[15] += 3;
    }
    else 
    {
        question_no.push(4);
    }

    //question 5
    var str1 = document.getElementById("rd76");
    var str2 = document.getElementById("rd77");
    var str3 = document.getElementById("rd78");
    var str4 = document.getElementById("rd79");
    var str5 = document.getElementById("rd80");
    if(str1.checked==true)
    {
        a[0] += 3,a[6] += 3,a[5] += 3,a[1] += 3;
    }
    else if(str2.checked==true)
    {
        a[4] += 2,a[2] += 2;
    }
    else if(str3.checked==true)
    {
        a[11] += 1,a[10] += 1,a[3] += 1;
    }
    else if(str4.checked==true)
    {
        a[15] += 2,a[9] += 2,a[13] += 2;
    }
    else if(str5.checked==true)
    {
        a[8] += 3,a[12] += 3,a[7] += 3,a[14] += 3,a[3] += 3;
    }
    else 
    {
        question_no.push(5);
    }

    //question 6
    var str1 = document.getElementById("rd81");
    var str2 = document.getElementById("rd82");
    var str3 = document.getElementById("rd83");
    var str4 = document.getElementById("rd84");
    var str5 = document.getElementById("rd85");
    if(str1.checked==true)
    {
        a[11] += 5,a[14] += 4;
    }
    else if(str2.checked==true)
    {
        a[11] += 4,a[14] += 4;
    }
    else if(str3.checked==true)
    {
        a[0] += 0;
    }
    else if(str4.checked==true)
    {
        a[0] += 0;
    }
    else if(str5.checked==true)
    {
        a[0] += 0;
    }
    else 
    {
        question_no.push(6);
    }

    //question 7
    var str1 = document.getElementById("rd86");
    var str2 = document.getElementById("rd87");
    var str3 = document.getElementById("rd88");
    var str4 = document.getElementById("rd89");
    var str5 = document.getElementById("rd90");
    if(str1.checked==true)
    {
        a[5] += 5;
    }
    else if(str2.checked==true)
    {
        a[5] += 4;
    }
    else if(str3.checked==true)
    {
        a[0] += 0;
    }
    else if(str4.checked==true)
    {
        a[0] += 0;
    }
    else if(str5.checked==true)
    {
        a[0] += 0;
    }
    else 
    {
        question_no.push(7);
    }

    //question 8
    var str1 = document.getElementById("rd91");
    var str2 = document.getElementById("rd92");
    var str3 = document.getElementById("rd93");
    var str4 = document.getElementById("rd94");
    var str5 = document.getElementById("rd95");
    if(str1.checked==true)
    {
        a[8] += 3,a[12] += 3,a[7] += 3,a[14] += 3,a[3] += 3;
    }
    else if(str2.checked==true)
    {
        a[15] += 2,a[9] += 2,a[13] += 2;
    }
    else if(str3.checked==true)
    {
        a[11] += 1,a[10] += 1,a[3] += 1;
    }
    else if(str4.checked==true)
    {
        a[4] += 2,a[2] += 2;
    }
    else if(str5.checked==true)
    {
        a[0] += 3,a[6] += 3,a[5] += 3,a[1] += 3;
    }
    else 
    {
        question_no.push(8);
    }

    //question 9
    var str1 = document.getElementById("rd96");
    var str2 = document.getElementById("rd97");
    var str3 = document.getElementById("rd98");
    var str4 = document.getElementById("rd99");
    var str5 = document.getElementById("rd100");
    if(str1.checked==true)
    {
        a[0] += 3,a[11] += 3,a[2] += 3;
    }
    else if(str2.checked==true)
    {
        a[8] += 2,a[4] += 2,a[10] += 2,a[9] += 2;
    }
    else if(str3.checked==true)
    {
        a[3] += 1,a[13] += 1;
    }
    else if(str4.checked==true)
    {
        a[12] += 2,a[14] += 2;
    }
    else if(str5.checked==true)
    {
        a[6] += 3,a[1] += 3,a[5] += 3,a[7] += 3,a[15] += 3;
    }
    else 
    {
        question_no.push(9);
    }
    //question 10
    var str1 = document.getElementById("r1");
    var str2 = document.getElementById("r2");
    var str3 = document.getElementById("r3");
    var str4 = document.getElementById("r4");
    var str5 = document.getElementById("r5");
    if(str1.checked==true)
    {
        a[6] += 3,a[11] += 3,a[15] += 3, a[14] += 3;
    }
    else if(str2.checked==true)
    {
       a[7] += 2,a[10] += 2,a[2] += 2,a[3] += 2;
    }
    else if(str3.checked==true)
    {
        a[13] += 1;
    }
    else if(str4.checked==true)
    {
        a[8] += 2,a[12] += 2,a[1] += 2,a[9] += 2;
    }
    else if(str5.checked==true)
    {
        a[0] += 3,a[4] += 3,a[5] += 3;
    }
    else 
    {
        question_no.push(10);
    }
    //question 11
    var str1 = document.getElementById("r6");
    var str2 = document.getElementById("r7");
    var str3 = document.getElementById("r8");
    var str4 = document.getElementById("r9");
    var str5 = document.getElementById("r10");
    if(str1.checked==true)
    {
        a[8] += 3,a[14] += 3,a[3] += 3,a[1] += 3,a[2] += 3;
    }
    else if(str2.checked==true)
    {
        a[0] += 2,a[12] += 2;
    }
    else if(str3.checked==true)
    {
        a[10] += 1,a[13] += 1;
    }
    else if(str4.checked==true)
    {
        a[4] += 2,a[6] += 2;
    }
    else if(str5.checked==true)
    {
        a[11] += 3,a[5] += 3,a[15] += 3,a[7] += 3,a[9] += 3;
    }
    else 
    {
        question_no.push(11);
    }

    //question 12
    var str1 = document.getElementById("r11");
    var str2 = document.getElementById("r12");
    var str3 = document.getElementById("r13");
    var str4 = document.getElementById("r14");
    var str5 = document.getElementById("r15");
    if(str1.checked==true)
    {
        a[15] += 5;
    }
    else if(str2.checked==true)
    {
        a[15] += 4;
    }
    else if(str3.checked==true)
    {
        a[0] += 0;
    }
    else if(str4.checked==true)
    {
        a[0] += 0;
    }
    else if(str5.checked==true)
    {
        a[0] += 0;
    }
    else 
    {
        question_no.push(12);
    }

    //question 13
    var str1 = document.getElementById("r16");
    var str2 = document.getElementById("r17");
    var str3 = document.getElementById("r18");
    var str4 = document.getElementById("r19");
    var str5 = document.getElementById("r20");
    if(str1.checked==true)
    {
        a[2] += 5;
    }
    else if(str2.checked==true)
    {
        a[2] += 4;
    }
    else if(str3.checked==true)
    {
        a[0] += 0;
    }
    else if(str4.checked==true)
    {
        a[0] += 0;
    }
    else if(str5.checked==true)
    {
        a[0] += 0;
    }
    else 
    {
        question_no.push(13);
    }

    //question 14
    var str1 = document.getElementById("r21");
    var str2 = document.getElementById("r22");
    var str3 = document.getElementById("r23");
    var str4 = document.getElementById("r24");
    var str5 = document.getElementById("r25");
    if(str1.checked==true)
    {
        a[8] += 3,a[14] += 3,a[3] += 3,a[1] += 3,a[2] += 3;
    }
    else if(str2.checked==true)
    {
        a[0] += 2,a[12] += 2;
    }
    else if(str3.checked==true)
    {
        a[10] += 1,a[13] += 1;
    }
    else if(str4.checked==true)
    {
        a[4] += 2,a[6] += 2;
    }
    else if(str5.checked==true)
    {
        a[11] += 3,a[5] += 3,a[15] += 3,a[7] += 3,a[9] += 3;
    }
    else 
    {
        question_no.push(14);
    }

    //question 15
    var str1 = document.getElementById("r26");
    var str2 = document.getElementById("r27");
    var str3 = document.getElementById("r28");
    var str4 = document.getElementById("r29");
    var str5 = document.getElementById("r30");
    if(str1.checked==true)
    {
        a[6] += 3,a[11] += 3,a[15] += 3, a[14] += 3;
    }
    else if(str2.checked==true)
    {
        a[7] += 2,a[10] += 2,a[2] += 2,a[3] += 2;
    }
    else if(str3.checked==true)
    {
        a[13] += 1;
    }
    else if(str4.checked==true)
    {
        a[8] += 2,a[12] += 2,a[1] += 2,a[9] += 2;
    }
    else if(str5.checked==true)
    {
        a[0] += 3,a[4] += 3,a[5] += 3;
    }
    else 
    {
        question_no.push(15);
    }

    //question 16
    var str1 = document.getElementById("r31");
    var str2 = document.getElementById("r32");
    var str3 = document.getElementById("r33");
    var str4 = document.getElementById("r34");
    var str5 = document.getElementById("r35");
    if(str1.checked==true)
    {
        a[0] += 3,a[11] += 3,a[2] += 3;
    }
    else if(str2.checked==true)
    {
        a[8] += 2,a[4] += 2,a[10] += 2,a[9] += 2;
    }
    else if(str3.checked==true)
    {
        a[3] += 1,a[13] += 1;
    }
    else if(str4.checked==true)
    {
        a[12] += 2,a[14] += 2;
    }
    else if(str5.checked==true)
    {
        a[6] += 3,a[1] += 3,a[5] += 3,a[7] += 3,a[15] += 3;
    }
    else 
    {
        question_no.push(16);
    }

    //question 17
    var str1 = document.getElementById("r36");
    var str2 = document.getElementById("r37");
    var str3 = document.getElementById("r38");
    var str4 = document.getElementById("r39");
    var str5 = document.getElementById("r40");
    if(str1.checked==true)
    {
        a[1] += 5;
    }
    else if(str2.checked==true)
    {
        a[1] += 4;
    }
    else if(str3.checked==true)
    {
        a[0] += 0;
    }
    else if(str4.checked==true)
    {
        a[0] += 0;
    }
    else if(str5.checked==true)
    {
        a[0] += 0;
    }
    else 
    {
        question_no.push(17);
    }

    //question 18
    var str1 = document.getElementById("r41");
    var str2 = document.getElementById("r42");
    var str3 = document.getElementById("r43");
    var str4 = document.getElementById("r44");
    var str5 = document.getElementById("r45");
    if(str1.checked==true)
    {
        a[8] += 3,a[9] += 3,a[10] += 3,a[11] += 3,a[12] += 3,a[13] += 3,a[14] += 3,a[15] += 3;
    }
    else if(str2.checked==true)
    {
        a[8] += 2,a[9] += 2,a[10] += 2,a[11] += 2,a[12] += 2,a[13] += 2,a[14] += 2,a[15] += 2;
    }
    else if(str3.checked==true)
    {
        a[0] += 1;
    }
    else if(str4.checked==true)
    {
        a[0] += 2,a[1] += 2,a[2] += 2,a[3] += 2,a[4] += 2,a[5] += 2,a[6] += 2,a[7] += 2;
    }
    else if(str5.checked==true)
    {
        a[0] += 3,a[1] += 3,a[2] += 3,a[3] += 3,a[4] += 3,a[5] += 3,a[6] += 3,a[7] += 3;
    }
    else 
    {
        question_no.push(18);
    }

    //question 19
    var str1 = document.getElementById("r46");
    var str2 = document.getElementById("r47");
    var str3 = document.getElementById("r48");
    var str4 = document.getElementById("r49");
    var str5 = document.getElementById("r50");
    if(str1.checked==true)
    {
        a[9] += 5;
    }
    else if(str2.checked==true)
    {
        a[9] += 4;
    }
    else if(str3.checked==true)
    {
        a[0] += 0;
    }
    else if(str4.checked==true)
    {
        a[0] += 0;
    }
    else if(str5.checked==true)
    {
        a[0] += 0;
    }
    else 
    {
        question_no.push(19);
    }
    //question 20
    var str1 = document.getElementById("r51");
    var str2 = document.getElementById("r52");
    var str3 = document.getElementById("r53");
    var str4 = document.getElementById("r54");
    var str5 = document.getElementById("r55");
    if(str1.checked==true)
    {
        a[3] += 4,a[13] += 10;
    }
    else if(str2.checked==true)
    {
        a[3] += 3,a[13] += 8;
    }
    else if(str3.checked==true)
    {
        a[0] += 0;
    }
    else if(str4.checked==true)
    {
        a[0] += 0;
    }
    else if(str5.checked==true)
    {
        a[0] += 0;
    }
    else 
    {
        question_no.push(20);
    }
    if(question_no.length!=0)
    {
        alert("The numbers of question not attempted : " + question_no);
    }
    for(var i = 0; i < a.length; i++)
    {
        if(a[i]>=highest)
        {
            highest = a[i];
            personality_type = i;
        }
    }
    if(question_no.length>=8)
    {
        alert("Personality cannot be displayed as you have not attempted enough questions.");
        document.getElementById("p10").innerHTML = ("Please attempt the all the questions again to get your proper personality");
        location.reload();
    }
   else
   {
        document.getElementById("p10").innerHTML = ("Please scroll downwards to see your personality.");
        if(personality_type==0)
        {
            document.getElementById("head").style.visibility="visible";
            var img = document.getElementById("img1");
            img.style.visibility="visible";
            img.src="Images/intj.png";
            document.getElementById("type1").innerHTML = ("Architect");
            document.getElementById("type2").innerHTML = ("INTJ-A/INTJ-T");
            document.getElementById("type3").innerHTML = ("Imaginative and strategic thinkers,with a plan for everything.");
            var text2 = document.getElementById("type2");
            var text = document.getElementById("type1");
            var text3 = document.getElementById("type3");
            text.style.color = "darkorchid";
            text.style.size = "30px";
            text2.style.color = "darkorchid";
            text2.style.size = "25px";
            text3.style.color = "darkorchid";
            text3.style.size = "20px";
        }
        else if(personality_type==1)
        {
            document.getElementById("head").style.visibility="visible";
            var img = document.getElementById("img1");
            img.style.visibility="visible";
            img.src="Images/intp.png";
            document.getElementById("type1").innerHTML = ("Logician");
            document.getElementById("type2").innerHTML = ("INTP-A/INTP-T");
            document.getElementById("type3").innerHTML = ("Innovative inventors with an unquenchable thirst for knowledge.");
            var text2 = document.getElementById("type2");
            var text = document.getElementById("type1");
            var text3 = document.getElementById("type3");
            text.style.color = "darkorchid";
            text.style.size = "30px";
            text2.style.color = "darkorchid";
            text2.style.size = "25px";
            text3.style.color = "darkorchid";
            text3.style.size = "20px";
        }
        else if(personality_type==2)
        {
            document.getElementById("head").style.visibility="visible";
            var img = document.getElementById("img1");
            img.style.visibility="visible";
            img.src="Images/entj.png";
            document.getElementById("type1").innerHTML = ("Commander");
            document.getElementById("type2").innerHTML = ("ENTJ-A/ENTJ-T");
            document.getElementById("type3").innerHTML = ("Bold,imaginative and strong-willed leaders, always finding a way - or making one.");
            var text2 = document.getElementById("type2");
            var text = document.getElementById("type1");
            var text3 = document.getElementById("type3");
            text.style.color = "darkorchid";
            text.style.size = "30px";
            text2.style.color = "darkorchid";
            text2.style.size = "25px";
            text3.style.color = "darkorchid";
            text3.style.size = "20px";
        }
        else if(personality_type==3)
        {
            document.getElementById("head").style.visibility="visible";
            var img = document.getElementById("img1");
            img.style.visibility="visible";
            img.src="Images/entp.png";
            document.getElementById("type1").innerHTML = ("Debater");
            document.getElementById("type2").innerHTML = ("ENTP-A/ENTP-T");
            document.getElementById("type3").innerHTML = ("Smart and curious thinkers who cannot resist an intellectual challenge.");
            var text2 = document.getElementById("type2");
            var text = document.getElementById("type1");
            var text3 = document.getElementById("type3");
            text.style.color = "darkorchid";
            text.style.size = "30px";
            text2.style.color = "darkorchid";
            text2.style.size = "25px";
            text3.style.color = "darkorchid";
            text3.style.size = "20px";
        }
        else if(personality_type==4)
        {
            document.getElementById("head").style.visibility="visible";
            var img = document.getElementById("img1");
            img.style.visibility="visible";
            img.src="Images/infj.png";
            document.getElementById("type1").innerHTML = ("Advocate");
            document.getElementById("type2").innerHTML = ("INFJ-A/INFJ-T");
            document.getElementById("type3").innerHTML = ("Quite and mystical, yet very inspiring and tireless idealists.");
            var text2 = document.getElementById("type2");
            var text = document.getElementById("type1");
            var text3 = document.getElementById("type3");
            text.style.color = "green";
            text.style.size = "30px";
            text2.style.color = "green";
            text2.style.size = "25px";
            text3.style.color = "green";
            text3.style.size = "20px";
        }
        else if(personality_type==5)
        {
            document.getElementById("head").style.visibility="visible";
            var img = document.getElementById("img1");
            img.style.visibility="visible";
            img.src="Images/infp.png";
            document.getElementById("type1").innerHTML = ("Mediator");
            document.getElementById("type2").innerHTML = ("INFP-A/INFP-T");
            document.getElementById("type3").innerHTML = ("Poetic, kind and altruistic people, always eager to help a good cause.");
            var text2 = document.getElementById("type2");
            var text = document.getElementById("type1");
            var text3 = document.getElementById("type3");
            text.style.color = "green";
            text.style.size = "30px";
            text2.style.color = "green";
            text2.style.size = "25px";
            text3.style.color = "green";
            text3.style.size = "20px";
        }
        else if(personality_type==6)
        {
            document.getElementById("head").style.visibility="visible";
            var img = document.getElementById("img1");
            img.style.visibility="visible";
            img.src="Images/enfj.png";
            document.getElementById("type1").innerHTML = ("Protagonist");
            document.getElementById("type2").innerHTML = ("ENFJ-A/ENFJ-T");
            document.getElementById("type3").innerHTML = ("Charismatic and inspiring leaders, able to mesmerize their listeners.");
            var text2 = document.getElementById("type2");
            var text = document.getElementById("type1");
            var text3 = document.getElementById("type3");
            text.style.color = "green";
            text.style.size = "30px";
            text2.style.color = "green";
            text2.style.size = "25px";
            text3.style.color = "green";
            text3.style.size = "20px";
        }
        else if(personality_type==7)
        {
            document.getElementById("head").style.visibility="visible";
            var img = document.getElementById("img1");
            img.style.visibility="visible";
            img.src="Images/enfp.png";
            document.getElementById("type1").innerHTML = ("Campaigner");
            document.getElementById("type2").innerHTML = ("ENFP-A/ENFP-T");
            document.getElementById("type3").innerHTML = ("Enthusiastic, creative and sociable free spirits, who can always find a reason to smile.");
            var text2 = document.getElementById("type2");
            var text = document.getElementById("type1");
            var text3 = document.getElementById("type3");
            text.style.color = "green";
            text.style.size = "30px";
            text2.style.color = "green";
            text2.style.size = "25px";
            text3.style.color = "green";
            text3.style.size = "20px";
        }
        else if(personality_type==8)
        {
            document.getElementById("head").style.visibility="visible";
            var img = document.getElementById("img1");
            img.style.visibility="visible";
            img.src="Images/istj.png";
            document.getElementById("type1").innerHTML = ("Logistician");
            document.getElementById("type2").innerHTML = ("ISTJ-A/ISTJ-T");
            document.getElementById("type3").innerHTML = ("Practical and fact minded individuals, whose reliability cannot be doubted.");
            var text2 = document.getElementById("type2");
            var text = document.getElementById("type1");
            var text3 = document.getElementById("type3");
            text.style.color = "blue";
            text.style.size = "30px";
            text2.style.color = "blue";
            text2.style.size = "25px";
            text3.style.color = "blue";
            text3.style.size = "20px";
        }
        else if(personality_type==9)
        {
            document.getElementById("head").style.visibility="visible";
            var img = document.getElementById("img1");
            img.style.visibility="visible";
            img.src="Images/isfj.png";
            document.getElementById("type1").innerHTML = ("Defender");
            document.getElementById("type2").innerHTML = ("ISFJ-A/ISFJ-T");
            document.getElementById("type3").innerHTML = ("Very dedicated and warm protectors, always ready to defend their loved ones.");
            var text2 = document.getElementById("type2");
            var text = document.getElementById("type1");
            var text3 = document.getElementById("type3");
            text.style.color = "blue";
            text.style.size = "30px";
            text2.style.color = "blue";
            text2.style.size = "25px";
            text3.style.color = "blue";
            text3.style.size = "20px";
        }
        else if(personality_type==10)
        {
            document.getElementById("head").style.visibility="visible";
            var img = document.getElementById("img1");
            img.style.visibility="visible";
            img.src="Images/estj.png";
            document.getElementById("type1").innerHTML = ("Executive");
            document.getElementById("type2").innerHTML = ("ESTJ-A/ESTJ-T");
            document.getElementById("type3").innerHTML = ("Excellent administrators, unsurpassed at managing things - or people.");
            var text2 = document.getElementById("type2");
            var text = document.getElementById("type1");
            var text3 = document.getElementById("type3");
            text.style.color = "blue";
            text.style.size = "30px";
            text2.style.color = "blue";
            text2.style.size = "25px";
            text3.style.color = "blue";
            text3.style.size = "20px";
        }
        else if(personality_type==11)
        {
            document.getElementById("head").style.visibility="visible";
            var img = document.getElementById("img1");
            img.style.visibility="visible";
            img.src="Images/esfj.png";
            document.getElementById("type1").innerHTML = ("Consul");
            document.getElementById("type2").innerHTML = ("ESFJ-A/ESFJ-T");
            document.getElementById("type3").innerHTML = ("Extraordinarily caring, social and popular poeple, always eager to help.");
            var text2 = document.getElementById("type2");
            var text = document.getElementById("type1");
            var text3 = document.getElementById("type3");
            text.style.color = "blue";
            text.style.size = "30px";
            text2.style.color = "blue";
            text2.style.size = "25px";
            text3.style.color = "blue";
            text3.style.size = "20px";
        }
        else if(personality_type==12)
        {
            document.getElementById("head").style.visibility="visible";
            var img = document.getElementById("img1");
            img.style.visibility="visible";
            img.src="Images/istp.png";
            document.getElementById("type1").innerHTML = ("Virtuoso");
            document.getElementById("type2").innerHTML = ("ISTP-A/ISTP-T");
            document.getElementById("type3").innerHTML = ("Bold and practical experiments, masters of all kinds of tools.");
            var text2 = document.getElementById("type2");
            var text = document.getElementById("type1");
            var text3 = document.getElementById("type3");
            text.style.color = "darkgoldenrod";
            text.style.size = "30px";
            text2.style.color = "darkgoldenrod";
            text2.style.size = "25px";
            text3.style.color = "darkgoldenrod";
            text3.style.size = "20px";
        }
        else if(personality_type==13)
        {
            document.getElementById("head").style.visibility="visible";
            var img = document.getElementById("img1");
            img.style.visibility="visible";
            img.src="Images/isfp.png";
            document.getElementById("type1").innerHTML = ("Adventure");
            document.getElementById("type2").innerHTML = ("ISFP-A/ISFP-T");
            document.getElementById("type3").innerHTML = ("Flexible and charming artists, always ready to explore and experience something new.");
            var text2 = document.getElementById("type2");
            var text = document.getElementById("type1");
            var text3 = document.getElementById("type3");
            text.style.color = "darkgoldenrod";
            text.style.size = "30px";
            text2.style.color = "darkgoldenrod";
            text2.style.size = "25px";
            text3.style.color = "darkgoldenrod";
            text3.style.size = "20px";
        }
        else if(personality_type==14)
        {
            document.getElementById("head").style.visibility="visible";
            var img = document.getElementById("img1");
            img.style.visibility="visible";
            img.src="Images/estp.png";
            document.getElementById("type1").innerHTML = ("Entrepreneur");
            document.getElementById("type2").innerHTML = ("ESTP-A/ESTP-T");
            document.getElementById("type3").innerHTML = ("Smart, energetic and very perceptive people, who truly enjoy living on the edge.");
            var text2 = document.getElementById("type2");
            var text = document.getElementById("type1");
            var text3 = document.getElementById("type3");
            text.style.color = "darkgoldenrod";
            text.style.size = "30px";
            text2.style.color = "darkgoldenrod";
            text2.style.size = "25px";
            text3.style.color = "darkgoldenrod";
            text3.style.size = "20px";
        }
        else if(personality_type==15)
        {
            document.getElementById("head").style.visibility="visible";
            var img = document.getElementById("img1");
            img.style.visibility="visible";
            img.src="Images/esfp.png";
            document.getElementById("type1").innerHTML = ("Entertainer");
            document.getElementById("type2").innerHTML = ("ESFP-A/ESFP-T");
            document.getElementById("type3").innerHTML = ("Spontaneous, energetic and enthusiastic people - life is never boring around them.");
            var text2 = document.getElementById("type2");
            var text = document.getElementById("type1");
            var text3 = document.getElementById("type3");
            text.style.color = "darkgoldenrod";
            text.style.size = "30px";
            text2.style.color = "darkgoldenrod";
            text2.style.size = "25px";
            text3.style.color = "darkgoldenrod";
            text3.style.size = "20px";
        }    
        else
        {
            document.getElementById("head").style.visibility="visible";
            var img = document.getElementById("img1");
            img.style.visibility="visible";
            img.src="Images/isfp.png";
            document.getElementById("type1").innerHTML = ("Adventure");
            document.getElementById("type2").innerHTML = ("INFP-A/INFP-T");
            document.getElementById("type3").innerHTML = ("Flexible and charming artists, always ready to explore and experience something new.");
            var text2 = document.getElementById("type2");
            var text = document.getElementById("type1");
            var text3 = document.getElementById("type3");
            text.style.color = "darkgoldenrod";
            text.style.size = "30px";
            text2.style.color = "darkgoldenrod";
            text2.style.size = "25px";
            text3.style.color = "darkgoldenrod";
            text3.style.size = "20px";
        }
    }
}
