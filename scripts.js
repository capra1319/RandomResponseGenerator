
function responseFunction(){
    let doc = document.getElementById("responseText");
    const text = (doc.innerHTML = new Date());
    console.log('the response is:' + text + ' | ' + doc);
}