import { useState } from 'react';
import Form from './Form';

export default function ListStudent() {
    const [show, setShow] = useState<boolean>(false);

    // Ham mo form them moi
    const handleShowForm = (): void => {
        setShow(true);
    };

    // Ham dong form them moi
    const handleCloseForm = (): void => {
        setShow(false);
    };

    return (
        <>ListStudent
            <div className="w-[80%] m-auto mt-4 h-[100vh]">
                <main className="main">
                    <header className="d-flex justify-content-between mb-3">
                        <h3>Nhân viên</h3>
                        <button className="btn btn-primary" onClick={handleShowForm}>Thêm mới nhân viên</button>
                    </header>
                    <div className="d-flex align-items-center justify-content-end gap-2 mb-3">
                        <input
                            style={{ width: 350 }}
                            type="text"
                            className="form-control"
                            placeholder="Tìm kiếm theo email"
                        />
                        <i className="fa-solid fa-arrows-rotate" title="Refresh" />
                    </div>
                    {/* Danh sách nhân viên */}
                    <table className="table table-bordered table-hover table-striped">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Họ và tên</th>
                                <th>Ngày sinh</th>
                                <th>Email</th>
                                <th>Địa chỉ</th>
                                <th>Trạng thái</th>
                                <th colSpan={3}>Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nguyễn Văn A</td>
                                <td>28/02/1990</td>
                                <td>nvana@gmail.com</td>
                                <td>Ba Đình, Hà Nội</td>
                                <td>
                                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                        <div className="status status-active" />
                                        <span> Đang hoạt động</span>
                                    </div>
                                </td>
                                <td>
                                    <span className="button button-block">Chặn</span>
                                </td>
                                <td>
                                    <span className="button button-edit">Sửa</span>
                                </td>
                                <td>
                                    <span className="button button-delete">Xóa</span>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Trần Thị B</td>
                                <td>15/07/1985</td>
                                <td>ttb@gmail.com</td>
                                <td>Cầu Giấy, Hà Nội</td>
                                <td>
                                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                        <div className="status status-stop" />
                                        <span> Ngừng hoạt động</span>
                                    </div>
                                </td>
                                <td>
                                    <span className="button button-block">Bỏ chặn</span>
                                </td>
                                <td>
                                    <span className="button button-edit">Sửa</span>
                                </td>
                                <td>
                                    <span className="button button-delete">Xóa</span>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Lê Văn C</td>
                                <td>03/10/2000</td>
                                <td>lvc@gmail.com</td>
                                <td>Hai Bà Trưng, Hà Nội</td>
                                <td>
                                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                        <div className="status status-stop" />
                                        <span> Ngừng hoạt động</span>
                                    </div>
                                </td>
                                <td>
                                    <span className="button button-block">Bỏ chặn</span>
                                </td>
                                <td>
                                    <span className="button button-edit">Sửa</span>
                                </td>
                                <td>
                                    <span className="button button-delete">Xóa</span>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Phạm Thị D</td>
                                <td>20/05/1995</td>
                                <td>ptd@gmail.com</td>
                                <td>Hoàn Kiếm, Hà Nội</td>
                                <td>
                                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                        <div className="status status-active" />
                                        <span> Đang hoạt động</span>
                                    </div>
                                </td>
                                <td>
                                    <span className="button button-block">Chặn</span>
                                </td>
                                <td>
                                    <span className="button button-edit">Sửa</span>
                                </td>
                                <td>
                                    <span className="button button-delete">Xóa</span>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Ngô Văn E</td>
                                <td>12/11/1988</td>
                                <td>nve@gmail.com</td>
                                <td>Cầu Giấy, Hà Nội</td>
                                <td>
                                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                        <div className="status status-active" />
                                        <span> Đang hoạt động</span>
                                    </div>
                                </td>
                                <td>
                                    <span className="button button-block">Chặn</span>
                                </td>
                                <td>
                                    <span className="button button-edit">Sửa</span>
                                </td>
                                <td>
                                    <span className="button button-delete">Xóa</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <footer className="d-flex justify-content-end align-items-center gap-3">
                        <select className="form-select">
                            <option>Hiển thị 10 bản ghi trên trang</option>
                            <option>Hiển thị 20 bản ghi trên trang</option>
                            <option>Hiển thị 50 bản ghi trên trang</option>
                            <option>Hiển thị 100 bản ghi trên trang</option>
                        </select>
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    Previous
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    Next
                                </a>
                            </li>
                        </ul>
                    </footer>
                </main>
            </div>
            {show && <Form handleCloseForm={handleCloseForm} />}
        </>
    );
}
