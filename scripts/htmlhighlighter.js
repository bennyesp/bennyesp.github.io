function htmlhighlighter(){
  let code=document.getElementsByTagName('code');
  for(a of code){
    let b=a.innerHTML;
    b=b.replace(/(height|allow|allowfullscreen|class|id|title|src|srcdoc)(\s?\=\s?)("[A-Za-z0-9\s\.,\?\!\[\]<>\*\{\}\=:;#%\-'\\\/\&]*")/gi,'<span class="htmlattribute">$1</span>$2<span class="htmlattrvalue">$3</span>');
    b=b.replace(/(\&lt;\/?)(iframe)/gi,'$1<span class="htmltag">$2</span>');
    a.innerHTML=b;
    console.log('ver6');
  }
}
