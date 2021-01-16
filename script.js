const toast1               = document.querySelector('#toast-1');
const primaryToastButton   = document.querySelector('#primary-toast-button');
const secondaryToastButton = document.querySelector('#secondary-toast-button');
const successToastButton   = document.querySelector('#success-toast-button');
const infoToastButton      = document.querySelector('#info-toast-button');
const warningToastButton   = document.querySelector('#warning-toast-button');
const dangerToastButton    = document.querySelector('#danger-toast-button');
const lightToastButton     = document.querySelector('#light-toast-button');
const darkToastButton      = document.querySelector('#dark-toast-button');




(function initializeToastDismissElements(){
  const toastDismissElements = document.querySelectorAll('[data-xx-dismiss="toast"]');
  toastDismissElements.forEach(element => {
    element.addEventListener('click', function(){
      const toast = element.closest('.toast');
      toast.classList.remove('show');
    });
  });
})();




primaryToastButton.addEventListener('click', () => {
  function showToast(){
    toast1.querySelector('.toast-header strong').textContent = "Primary Header";
    toast1.querySelector('.toast-body').textContent          = "Hello. This toast builds on top of Bootstrap styles, but the javascript is custom, so you can use it without bootstrap.js.";
    toast1.className = "toast toast-primary rounded-3 fade show";
  }
  if (toast1.classList.contains('show')){
    toast1.classList.remove('show');
    return setTimeout(function(){ showToast(); }, 750);
  }
  showToast();
});




secondaryToastButton.addEventListener('click', () => {
  function showToast(){
    toast1.querySelector('.toast-header strong').textContent = "Secondary Header";
    toast1.querySelector('.toast-body').textContent          = "Hello, world! This is a toast message. This is some extra text. Bla, bla, bla...";
    toast1.className = "toast toast-secondary rounded-3 fade show";
  }
  if (toast1.classList.contains('show')){
    toast1.classList.remove('show');
    return setTimeout(function(){ showToast(); }, 750);
  }
  showToast();
});




successToastButton.addEventListener('click', () => {
  function showToast(){
    toast1.querySelector('.toast-header strong').textContent = "Success Header";
    toast1.querySelector('.toast-body').textContent          = "Hello, world! This is a toast message. This is some extra text. Bla, bla, bla...";
    toast1.className = "toast toast-success rounded-3 fade show";
  }
  if (toast1.classList.contains('show')){
    toast1.classList.remove('show');
    return setTimeout(function(){ showToast(); }, 750);
  }
  showToast();
});




infoToastButton.addEventListener('click', () => {
  function showToast(){
    toast1.querySelector('.toast-header strong').textContent = "Info Header";
    toast1.querySelector('.toast-body').textContent          = "Hello, world! This is a toast message. This is some extra text. Bla, bla, bla...";
    toast1.className = "toast toast-info rounded-3 fade show";
  }
  if (toast1.classList.contains('show')){
    toast1.classList.remove('show');
    return setTimeout(function(){ showToast(); }, 750);
  }
  showToast();
});




warningToastButton.addEventListener('click', () => {
  function showToast(){
    toast1.querySelector('.toast-header strong').textContent = "Warning Header";
    toast1.querySelector('.toast-body').textContent          = "Hello, world! This is a toast message. This is some extra text. Bla, bla, bla...";
    toast1.className = "toast toast-warning rounded-3 fade show";
  }
  if (toast1.classList.contains('show')){
    toast1.classList.remove('show');
    return setTimeout(function(){ showToast(); }, 750);
  }
  showToast();
});




dangerToastButton.addEventListener('click', () => {
  function showToast(){
    toast1.querySelector('.toast-header strong').textContent = "Danger Header";
    toast1.querySelector('.toast-body').textContent          = "Hello, world! This is a toast message. This is some extra text. Bla, bla, bla...";
    toast1.className = "toast toast-danger rounded-3 fade show";
  }
  if (toast1.classList.contains('show')){
    toast1.classList.remove('show');
    return setTimeout(function(){ showToast(); }, 750);
  }
  showToast();
});




lightToastButton.addEventListener('click', () => {
  function showToast(){
    toast1.querySelector('.toast-header strong').textContent = "Light Header";
    toast1.querySelector('.toast-body').textContent          = "Hello, world! This is a toast message. This is some extra text. Bla, bla, bla...";
    toast1.className = "toast toast-light rounded-3 fade show";
  }
  if (toast1.classList.contains('show')){
    toast1.classList.remove('show');
    return setTimeout(function(){ showToast(); }, 750);
  }
  showToast();
});




darkToastButton.addEventListener('click', () => {
  function showToast(){
    toast1.querySelector('.toast-header strong').textContent = "Dark Header";
    toast1.querySelector('.toast-body').textContent          = "Hello, world! This is a toast message. This is some extra text. Bla, bla, bla...";
    toast1.className = "toast toast-dark rounded-3 fade show";
  }
  if (toast1.classList.contains('show')){
    toast1.classList.remove('show');
    return setTimeout(function(){ showToast(); }, 750);
  }
  showToast();
});
