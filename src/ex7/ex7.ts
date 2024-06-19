
/**
 * call by document
 */
function changerCouleurs(){
  document.querySelectorAll('.divFirst').forEach((item)=>(item as HTMLInputElement).style.color="purple") ;

  document.querySelectorAll('#divSecond').forEach((item)=>(item as HTMLInputElement).style.backgroundColor="yellow") ;
}

/**
 * call by document
 */
function documentChangerCouleurs(){
  let elementsDivFirst = document.getElementsByClassName('divFirst');
    Array.from(elementsDivFirst).forEach(el => {
      (el as HTMLInputElement).style.backgroundColor= 'yellow';
      (el as HTMLInputElement).style.color= 'pink';
    });


  }

