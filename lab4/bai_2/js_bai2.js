var a = parseFloat(prompt('nhap a'));
var b = parseFloat(prompt('nhap b'));
var c = parseFloat(prompt('nhap c'));
var delta, x1, x2;
if(a > 0) {
    delta = (b**2) - (4*a*c);
    if(delta > 0){
        document.write('phuong co 2 nghiem:');
        x1 = (-b + Math.sqrt(delta))/(2*a);
        x2 = (-b - Math.sqrt(delta))/(2*a);
        document.write('\n x1 = '+ x1 + '\n x2 = '+x2);
    }else if(delta == 0){
        document.write('phuong co nghiem kep:\n');
        x1 = x2 = (-b)/(2*a);
        document.write('\n x1 = x2 = '+x1);
    }else {
        document.write('phuong trinh vo nghiem');
    }
}else{
    document.write('khong phai la phuong trinh bac 2');
}
