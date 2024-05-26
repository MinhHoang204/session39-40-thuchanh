import React from 'react'
interface Props {
  action: 'block' | 'unblock' | 'delete' | null;
  onConfirm: () => void;
  onCancel: () => void;
}
export default function Modal({action, onConfirm, onCancel}: Props) {
  const getMessage = () => {
    switch (action) {
      case 'block':
        return 'Bạn có chắc chắn muốn xóa tài khoản này?';
      case 'unblock':
        return 'Bạn có chắc chắn muốn xóa tài khoản này?';
      case 'delete':
        return 'Bạn có chắc chắn muốn xóa tài khoản này?';
      default:
        return '';
    }
  }  
  return (
    <>
      {/* Modal xác nhận xóa tài khoản */}
  <div className="overlay">
    <div className="modal-custom">
      <div className="modal-title">
        <h4>Cảnh báo</h4>
        <i className="fa-solid fa-xmark" />
      </div>
      <div className="modal-body-custom">
        <span>Bạn có chắc chắn muốn xóa tài khoản này?</span>
      </div>
      <div className="modal-footer-custom">
        <button className="btn btn-light">Hủy</button>
        <button className="btn btn-danger">Xác nhận</button>
      </div>
    </div>
  </div>
    </>
  )
}
