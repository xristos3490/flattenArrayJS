// The below function will recurse itself to achive
// endless depth.

function ArrFlatten(A, F){
    // Check if is the first loop
    if(!F){ F = []}
    for(var i=0, size=A.length; i<size; i=i+1){
        if(A[i].constructor == Array){
            F.concat(ArrFlatten(A[i], F));
        }else{
            F.push(A[i]);
        }
    }
    return F;
}

// Test it
a = [[1,2,[3]],4];
f = ArrFlatten(a);
console.log(f);
