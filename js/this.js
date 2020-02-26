let arr = ["toyota","mazda","subaru","hyundai","ford"];
let input = prompt("Nhap vao loai xe can tim:");
for (let index=0;index<arr.length;index++){
    if(arr[index]===input){
        alert("Tim thay gia tri can tim o vi tri:"+index);
    }
}

