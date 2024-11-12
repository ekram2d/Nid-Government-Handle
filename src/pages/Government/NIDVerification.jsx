import { useState, useEffect } from "react";

export default function NIDVerification() {
  const [user, setUser] = useState(null);
  const [decryptionKey, setDecryptionKey] = useState("");
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [emailStatus, setEmailStatus] = useState(""); 
  const [showDemoEmail, setShowDemoEmail] = useState(false); 
  const [showToaster, setShowToaster] = useState(false); // To control toaster visibility

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userRegistrationData"));
    if (storedUserData) {
      setUser(storedUserData);
    }
  }, []);

  const mockDatabase = [
    { name: "raju chowdhury", email: "rajuchowdhury123@gmail.com", mobileNumber: "1234567890", encryptedNIDUrl: "https://th.bing.com/th/id/OIP.U7MdEN7mGzrct1itttG_dAHaFj?rs=1&pid=ImgDetMain" },
    { name: "Mohammad Jabed", email: "mdjabed45@gmail.com", mobileNumber: "0987654321", encryptedNIDUrl: "https://th.bing.com/th/id/R.bc4cc3e02b3f13d2f3746f60d0bb1c72?rik=Mx8stEshi0dF6w&riu=http%3a%2f%2finfozone24.com%2fwp-content%2fuploads%2f2015%2f04%2fNID.jpg&ehk=ece5qtsTB%2b71dmr2RbpnZEreBPuHyUG4J8wkm2y7YxI%3d&risl=&pid=ImgRaw&r=0" },
    { name: "Mehedi Rahman", email: "rahmanmehedi786@gmail.com", mobileNumber: "0194926667", encryptedNIDUrl: "https://i.ibb.co.com/MSnP8Qg/plain-nid.png" },
  ];

  const handleRequestVerification = () => {
    if (!user) return;
    setShowDemoEmail(true);
    setEmailStatus(`Email has been sent to ${user.name} for key and confirmation. Please check your email for a reply with the key.`);
    
    setTimeout(() => {
      const matchingUser = mockDatabase.find(record => record.name === user.name && record.email === user.email && record.mobileNumber === user.mobileNumber);
      let verificationStatus = matchingUser ? "Verified" : "Fake";
      setEmailStatus(`Email from Government To Company : The user ${user.name} has been ${verificationStatus}.`);
      setUser({ ...user, status: verificationStatus });
      localStorage.setItem("userRegistrationData", JSON.stringify({ ...user, status: verificationStatus }));
      setShowDemoEmail(false);

      // Show toaster message
      setShowToaster(true);
      setTimeout(() => {
        setShowToaster(false); // Hide toaster after 3 seconds
      }, 30000);
    }, 20000);
  };

  const handleDecrypt = () => {
    if (decryptionKey === "KEY-8YMTJWSL62") {
      setIsDecrypted(true);
    } else {
      alert("Invalid decryption key. Please try again.");
    }
  };

  if (!user) return <p>No user data available.</p>;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Government NID Verification</h2>
      
      {/* Toaster message */}
      {showToaster && (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-3xl font-bold p-4 rounded-lg shadow-md font-bold z-50">
          {emailStatus}
        </div>
      )}

      <button onClick={handleRequestVerification} className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 mb-4">
        Send to the user for key Request
      </button>

      {showDemoEmail && !isDecrypted && (
        <div className="mb-6 text-2xl font-bold text-black bg-gray-100 p-4 border rounded shadow-md">
          <p>{emailStatus}</p>
        </div>
      )}

      <div className="mb-6">
        <p className="text-gray-700 mb-2">Enter the decryption key to view your NID:</p>
        <input
          type="text"
          value={decryptionKey}
          onChange={(e) => setDecryptionKey(e.target.value)}
          placeholder="Enter decryption key"
          className="border border-gray-300 rounded p-2 mb-2 w-full"
        />
        <button onClick={handleDecrypt} className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600">
          Decrypt NID
        </button>
      </div>

      {isDecrypted && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Decrypted NID Image</h3>
          <img src={`https://i.ibb.co.com/MSnP8Qg/plain-nid.png`} alt="Decrypted NID" className="mt-4 w-[30%] h-auto object-cover border rounded shadow" />
        </div>
      )}

      <div>
        <h3 className="text-xl font-bold mb-4">Government NID Database</h3>
        <table className="min-w-full table-auto border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Mobile Number</th>
              <th className="px-4 py-2 border">NID Image</th>
            </tr>
          </thead>
          <tbody>
            {mockDatabase?.map((record, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border">{record.name}</td>
                <td className="px-4 py-2 border">{record.email}</td>
                <td className="px-4 py-2 border">{record.mobileNumber}</td>
                <td className="px-4 py-2 border">
                  <img src={record?.encryptedNIDUrl} alt="NID" className="w-[80%] h-auto object-cover border rounded shadow" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isDecrypted && !showDemoEmail && (
        <div className="mt-6 text-2xl font-bold bg-yellow-100 p-4 border rounded shadow-md">
          <p>{emailStatus}</p>
        </div>
      )}
    </div>
  );
}
