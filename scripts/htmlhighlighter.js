function htmlhighlighter(){
  let code=document.getElementsByTagName('code');
  for(a of code){
    let b=a.innerHTML;
    b=b.replace(/(\&lt;\/?)(iframe)/gi,'$1<span class="htmltag">$2</span>');
    a.innerHTML=b;
  }
}
