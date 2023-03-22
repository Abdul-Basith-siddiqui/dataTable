import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveData } from "./redux/Slice";

const DataTable = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.table.data);
  const [editingId, setEditingId] = useState(null);
  const [editedData, setEditedData] = useState({});

  const handleEdit = (id) => {
    setEditingId(id);
    setEditedData(data.find((item) => item.id === id));
  };

  const handleSave = () => {
    const newData = data.map((item) =>
      item.id === editingId ? editedData : item
    );
    dispatch(saveData(newData));
    setEditingId(null);
  };

  //   return (
  //     <table>
  //       <thead>
  //         <tr>
  //           <th>SN</th>
  //           <th>Account No</th>
  //           <th>Division</th>
  //           <th>Country</th>
  //           <th>Legacy No</th>
  //           <th>Legacy Division</th>
  //           <th>Edit</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {data.map((item) => (
  //           <tr key={item.id}>
  //             <td>{item.id}</td>
  //             <td>
  //               {editingId === item.id ? (
  //                 <input
  //                   type="text"
  //                   value={editedData.accountNo}
  //                   onChange={(e) =>
  //                     setEditedData({ ...editedData, accountNo: e.target.value })
  //                   }
  //                 />
  //               ) : (
  //                 item.accountNo
  //               )}
  //             </td>
  //             <td>
  //               {editingId === item.id ? (
  //                 <input
  //                   type="text"
  //                   value={editedData.division}
  //                   onChange={(e) =>
  //                     setEditedData({ ...editedData, division: e.target.value })
  //                   }
  //                 />
  //               ) : (
  //                 item.division
  //               )}
  //             </td>
  //             <td>
  //               {editingId === item.id ? (
  //                 <input
  //                   type="text"
  //                   value={editedData.country}
  //                   onChange={(e) =>
  //                     setEditedData({ ...editedData, country: e.target.value })
  //                   }
  //                 />
  //               ) : (
  //                 item.country
  //               )}
  //             </td>
  //             <td>
  //               {editingId === item.id ? (
  //                 <input
  //                   type="text"
  //                   value={editedData.legacyNo}
  //                   onChange={(e) =>
  //                     setEditedData({ ...editedData, legacyNo: e.target.value })
  //                   }
  //                 />
  //               ) : (
  //                 item.legacyNo
  //               )}
  //             </td>
  //             <td>
  //               {editingId === item.id ? (
  //                 <input
  //                   type="text"
  //                   value={editedData.legacyDivision}
  //                   onChange={(e) =>
  //                     setEditedData({
  //                       ...editedData,
  //                       legacyDivision: e.target.value,
  //                     })
  //                   }
  //                 />
  //               ) : (
  //                 item.legacyDivision
  //               )}
  //             </td>
  //             <td>
  //               {editingId === item.id ? (
  //                 <button onClick={handleSave}>Save</button>
  //               ) : (
  //                 <button onClick={() => handleEdit(item.id)}>Edit</button>
  //               )}
  //             </td>
  //           </tr>
  //         ))}
  //         <td>
  //           <button
  //             onClick={() => {
  //               const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
  //               const newRow = {
  //                 id: newId,
  //                 accountNo: "",
  //                 division: "",
  //                 country: "",
  //                 legacyNo: "",
  //                 legacyDivision: "",
  //               };
  //               const newData = [...data, newRow];
  //               dispatch(saveData(newData));
  //               setEditingId(newId);
  //               setEditedData(newRow);
  //             }}
  //           >
  //             Add New
  //           </button>
  //         </td>
  //       </tbody>
  //     </table>
  //   );
  // };
  // export default DataTable;

  return (
    <table className="border-collapse w-full">
      <thead>
        <tr>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
            SN
          </th>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
            Account No
          </th>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
            Division
          </th>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
            Country
          </th>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
            Legacy No
          </th>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
            Legacy Division
          </th>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
            Edit
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="border px-4 py-2">{item.id}</td>
            <td className="border px-4 py-2">
              {editingId === item.id ? (
                <input
                  type="text"
                  value={editedData.accountNo}
                  onChange={(e) =>
                    setEditedData({ ...editedData, accountNo: e.target.value })
                  }
                  className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                />
              ) : (
                item.accountNo
              )}
            </td>
            <td className="border px-4 py-2">
              {editingId === item.id ? (
                <input
                  type="text"
                  value={editedData.division}
                  onChange={(e) =>
                    setEditedData({ ...editedData, division: e.target.value })
                  }
                  className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                />
              ) : (
                item.division
              )}
            </td>
            <td className="border px-4 py-2">
              {editingId === item.id ? (
                <input
                  type="text"
                  value={editedData.country}
                  onChange={(e) =>
                    setEditedData({ ...editedData, country: e.target.value })
                  }
                  className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                />
              ) : (
                item.country
              )}
            </td>
            <td className="border px-4 py-2">
              {editingId === item.id ? (
                <input
                  className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                  type="text"
                  value={editedData.legacyNo}
                  onChange={(e) =>
                    setEditedData({ ...editedData, legacyNo: e.target.value })
                  }
                />
              ) : (
                item.legacyNo
              )}
            </td>
            <td className="border px-4 py-2">
              {editingId === item.id ? (
                <input
                  className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                  type="text"
                  value={editedData.legacyDivision}
                  onChange={(e) =>
                    setEditedData({
                      ...editedData,
                      legacyDivision: e.target.value,
                    })
                  }
                />
              ) : (
                item.legacyDivision
              )}
            </td>

            <td className="border px-4 py-2">
              {editingId === item.id ? (
                <button
                  onClick={handleSave}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(item.id)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Edit
                </button>
              )}
            </td>
          </tr>
        ))}
        <td>
          <button
            onClick={() => {
              const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
              const newRow = {
                id: newId,
                accountNo: "",
                division: "",
                country: "",
                legacyNo: "",
                legacyDivision: "",
              };
              const newData = [...data, newRow];
              dispatch(saveData(newData));
              setEditingId(newId);
              setEditedData(newRow);
            }}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Add New
          </button>
        </td>
      </tbody>
    </table>
  );
};
export default DataTable;
