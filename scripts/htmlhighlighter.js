function htmlhighlighter(){
  let code=document.getElementsByTagName('code');
  for(a of code){
    let b=a.textContent;
    b=b.replace(/(\<)(iframe)/gi),'$1<span class="htmltag">$2</span>');
  }
}
