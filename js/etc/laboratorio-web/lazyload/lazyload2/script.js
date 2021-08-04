const observer = lozad(); // so no ponemos nada como parametro el automaticamento buscará una clase llamada lozad
observer.observe();

/**
 * lozad('.lozad', {
    loaded: function(el) {
        // Custom implementation on a loaded element
        el.classList.add('loaded');
    }
});
 */

 /**
  * const observer = lozad('.lozad', {
    rootMargin: '10px 0px', // syntax similar to that of CSS Margin
    threshold: 0.1 // ratio of element convergence
});
observer.observe();
  */