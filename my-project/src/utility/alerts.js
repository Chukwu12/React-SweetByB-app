// src/utils/alerts.js
import Swal from 'sweetalert2';

// ✅ Success Alert
export const showSuccess = (message = 'Success!', title = 'Success') => {
  return Swal.fire({
    icon: 'success',
    title,
    text: message,
    timer: 2000,
    showConfirmButton: false,
  });
};

// ✅ Error Alert
export const showError = (message = 'Something went wrong', title = 'Error') => {
  return Swal.fire({
    icon: 'error',
    title,
    text: message,
  });
};

// ✅ Confirmation Dialog (Optional)
export const showConfirm = async (text = 'Are you sure?', title = 'Confirm') => {
  const result = await Swal.fire({
    icon: 'warning',
    title,
    text,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'Cancel',
  });
  return result.isConfirmed;
};
