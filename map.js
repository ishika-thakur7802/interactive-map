document.querySelectorAll('path.land').forEach(path => {
    path.addEventListener('mouseover', e => {
    path.parentNode.parentNode.append(path.parentNode);
   const paths = [...document.querySelectorAll('path.land')]
   setTimeout(()=> {
   paths[paths.length - 1].classList.add('scaled');    
   },20)
   
    });
  });
  
  
  document.querySelectorAll('path.land').forEach(path => {
    path.addEventListener('mouseout', e => {
   path.parentNode.parentNode.append(path.parentNode);
   const paths = [...document.querySelectorAll('path.land')]
   
      setTimeout(()=> {
  paths[paths.length - 1].classList.remove('scaled');       
   },20)
    });
  });