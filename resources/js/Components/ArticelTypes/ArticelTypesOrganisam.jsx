import React, { useEffect, useState } from 'react';
import {
  postArticleTypeApi,
  getAllArticleTypesApi,
} from '../../services/api/apis'; // adjust path as needed
import { Pencil } from 'lucide-react';

const ArticelTypesOrganisam = () => {
  const [title, setTitle] = useState('');
  const [articleTypes, setArticleTypes] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchArticleTypes();
  }, []);

  const fetchArticleTypes = async () => {
    try {
      const response = await getAllArticleTypesApi();
      if (response?.success) {
        setArticleTypes(response.data || []);
      }
    } catch (error) {
      console.error('Error fetching article types:', error);
    }
  };

  const handleSave = async () => {
    if (!title.trim()) return;

    try {
      const payload = { title };
      if (editId) payload.id = editId;

      const response = await postArticleTypeApi(payload);

      if (response) {
        setTitle('');
        setEditId(null);
        fetchArticleTypes();
      }
    } catch (error) {
      console.error('Error saving article type:', error);
    }
  };

  const handleEdit = (type) => {
    setTitle(type.title);
    setEditId(type.id);
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className="card-title mb-4">{editId ? 'Edit Article Type' : 'Add New Article Type'}</h4>
          <div className="input-group mb-3">
            <input
              type="text"
              placeholder="Enter article type title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
            />
            <button onClick={handleSave} className="btn btn-primary">
              {editId ? 'Update' : 'Save'}
            </button>
          </div>
        </div>
      </div>

      <div className="card shadow-sm mt-4">
        <div className="card-body">
          <h5 className="card-title">All Article Types</h5>
          <table className="table table-bordered table-hover mt-3">
            <thead className="table-light">
              <tr>
                <th scope="col" style={{ width: '10%' }}>#</th>
                <th scope="col">Title</th>
                <th scope="col" className="text-center" style={{ width: '15%' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {articleTypes.length > 0 ? (
                articleTypes.map((type, index) => (
                  <tr key={type.id}>
                    <td className="text-center">{index + 1}</td>
                    <td>{type.title}</td>
                    <td className="text-center">
                      <button
                        onClick={() => handleEdit(type)}
                        className="btn btn-sm btn-warning"
                        title="Edit"
                      >
                        <Pencil size={16} className="me-1" />
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center text-muted py-3">
                    No article types found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ArticelTypesOrganisam;
