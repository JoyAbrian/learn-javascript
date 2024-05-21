let toastBox = document.getElementById('toast-box');
let successMsg = '<i class="bi bi-check-circle-fill"></i>Successfully Submitted';
let errorMsg = '<i class="bi bi-x-circle-fill"></i> Please fix the error';
let invalidMsg = '<i class="bi bi-exclamation-circle-fill"></i> Invalid input, check again';


function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if (msg.includes('error')) {
        toast.classList.add('error')
    } 
    if (msg.includes('Invalid')) {
        toast.classList.add('invalid');
    }
    
    setTimeout(() => {
        toast.remove();
    }, 6000);
}