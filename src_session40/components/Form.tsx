import { useState } from "react";

type PropTypes = {
    handleCloseForm: () => void;
};

export default function Form({ handleCloseForm }: PropTypes) {
    const [student, setStudent] = useState({
        userName: "",
        dateOfBirth: "",
        email: "",
        address: "",
        status: true,
    });
    const [userNameError, setUserNameError] = useState<string>("");
    const [dateOfBirthError, setDateOfBirthError] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");

    // Validate input data
    const validateField = (value: string, name: string) => {
        switch (name) {
            case "userName":
                if (!value) {
                    setUserNameError("Tên không được để trống");
                } else {
                    setUserNameError("");
                }
                break;
            case "dateOfBirth":
                if (!value) {
                    setDateOfBirthError("Ngày sinh không được để trống");
                } else if (new Date(value) > new Date()) {
                    setDateOfBirthError("Ngày sinh không được lớn hơn ngày hiện tại");
                } else {
                    setDateOfBirthError("");
                }
                break;
            case "email":
                if (!value) {
                    setEmailError("Email không được để trống");
                } else if (!/^\S+@\S+\.\S+$/.test(value)) {
                    setEmailError("Email không hợp lệ");
                } else {
                    setEmailError("");
                }
                break;
            default:
                break;
        }
    };

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, name } = e.target;

        // Update the student state
        setStudent({
            ...student,
            [name]: value,
        });

        // Validate the field
        validateField(value, name);
    };

    return (
        <>
            <div className="overlay">
                <form className="form">
                    <div className="d-flex justify-content-between align-items-center">
                        <h4>Chỉnh sửa nhân viên</h4>
                        <i className="fa-solid fa-xmark" onClick={handleCloseForm} />
                    </div>
                    <div>
                        <label className="form-label" htmlFor="userName">
                            Họ và tên
                        </label>
                        <input
                            name="userName"
                            onChange={handleChange}
                            value={student.userName}
                            id="userName"
                            type="text"
                            className="form-control"
                        />
                        {userNameError && <div className="form-text error">{userNameError}</div>}
                    </div>
                    <div>
                        <label className="form-label" htmlFor="dateOfBirth">
                            Ngày sinh
                        </label>
                        <input
                            name="dateOfBirth"
                            onChange={handleChange}
                            value={student.dateOfBirth}
                            id="dateOfBirth"
                            type="date"
                            className="form-control"
                        />
                        {dateOfBirthError && <div className="form-text error">{dateOfBirthError}</div>}
                    </div>
                    <div>
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                        <input
                            name="email"
                            onChange={handleChange}
                            value={student.email}
                            id="email"
                            type="email"
                            className="form-control"
                        />
                        {emailError && <div className="form-text error">{emailError}</div>}
                    </div>
                    <div>
                        <label className="form-label" htmlFor="address">
                            Địa chỉ
                        </label>
                        <textarea
                            name="address"
                            onChange={handleChange}
                            value={student.address}
                            className="form-control"
                            id="address"
                            rows={3}
                        />
                    </div>
                    <div>
                        <button className="w-100 btn btn-primary" type="button">
                            Thêm mới
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
