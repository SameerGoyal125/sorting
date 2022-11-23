

   let arr=[];
   var n=20;
   for(let i=0;i<n;i++){

      arr[i]= Math.floor((Math.random()*30)+1);


      var board = document.createElement('div');
      board.id = "bar";
      board.className="bar"+i;
      board.style.height=arr[i]*10+"px";
      document.getElementById('bars').appendChild(board);
   }

var b_sort=document.getElementById('bs');
var s_sort=document.getElementById('ss');
b_sort.addEventListener('click',Bubble_Sort);
s_sort.addEventListener('click',Selection_Sort);




function swap(el1,el2)
{

   const b1=document.getElementsByClassName("bar"+el1);
   const b2=document.getElementsByClassName("bar"+el2);



     const style1 = window.getComputedStyle(b1[0]);
     const style2 = window.getComputedStyle(b2[0]);

     const transform1 = style1.getPropertyValue("height");
     const transform2 = style2.getPropertyValue("height");





   b1[0].style.height = transform2;
   b2[0].style.height = transform1;




   let temp=arr[el1];
   arr[el1]=arr[el2];
   arr[el2]=temp;


}
const timer = ms => new Promise(res => setTimeout(res, ms))

async function Bubble_Sort(){
   for (let i = 0; i < n-1; i++)
   {
       for (let j = 0; j < n-i-1; j++)
       {

          if (arr[j] > arr[j+1])
          {
            const b1=document.getElementsByClassName("bar"+j);
            const b2=document.getElementsByClassName("bar"+(j+1));
            b1[0].style.background="red";
            b2[0].style.background="red";
            await timer(100);
            swap(j,j+1)

            b1[0].style.background="green";
            b2[0].style.background="green";
          }
       }

   }
   check();

}
async function Selection_Sort()
{
    for (i = 0; i < n-1; i++)
    {
        var min_idx = i;
        for (j = i + 1; j < n; j++){
            const b1=document.getElementsByClassName("bar"+i);
            var b2=document.getElementsByClassName("bar"+j);
         if (arr[j] < arr[min_idx]){
            min_idx = j;
            b2=document.getElementsByClassName("bar"+min_idx);
            b1[0].style.background="red";
            b2[0].style.background="red";
            await timer(100);
         }
         swap(min_idx, i);
         b1[0].style.background="green";
         b2[0].style.background="green";
    }}
    check();
}
async function check(){
  for (let i = 0; i < n; i++){
    const b1=document.getElementsByClassName("bar"+i);
    const b2=document.getElementsByClassName("bar"+(i+1));
    b1[0].style.background="#023020";
    await timer(100);
    b1[0].style.background="green";
  }
}
