import { Button, Input, Modal, Space, Table, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import type { RootState } from "./store";
import {
  addUsers,
  deleteUsers,
  getUsers,
  updateusers,
} from "./store/actions/UserActions";

const { Title } = Typography;

function App() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state: RootState) => state.user);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    id: null as number | null,
  });

  useEffect(() => {
    dispatch(getUsers() as any);
  }, []);

  const handleAdd = () => {
    if (!form.name || !form.email) return;

    if (form.id) {
      dispatch(updateusers(form) as any);
    } else {
      dispatch(addUsers(form) as any);
    }

    setForm({ name: "", email: "", id: null });
    setIsModalOpen(false);
  };

  const handleEdit = (user: any) => {
    setForm(user);
    setIsModalOpen(true);
  };

  const columns = [
    { title: "👤 Name", dataIndex: "name" },
    { title: "📧 Email", dataIndex: "email" },
    {
      title: "⚙️ Actions",
      render: (_: any, record: any) => (
        <Space>
          <Button
            size="small"
            type="default"
            onClick={() => handleEdit(record)}
          >
            ✏️ Edit
          </Button>
          <Button
            size="small"
            type="primary"
            danger
            onClick={() => dispatch(deleteUsers(record.id) as any)}
          >
            🗑️ Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <Title level={3} style={{ margin: 0 }}>
            👥 User Management
          </Title>
          <Button type="primary" onClick={() => setIsModalOpen(true)}>
            ➕ Add User
          </Button>
        </div>

        <Table
          dataSource={users}
          columns={columns}
          rowKey="id"
          loading={loading}
          bordered
          pagination={{ pageSize: 5 }}
        />
      </div>

      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleAdd}
        title={form.id ? "✏️ Edit User" : "➕ Add New User"}
        okText={form.id ? "Update" : "Create"}
      >
        <Input
          placeholder="👤 Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{ marginBottom: 12 }}
          allowClear
        />
        <Input
          placeholder="📧 Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          allowClear
        />
      </Modal>
    </div>
  );
}

export default App;
