import React, { useEffect, useState } from 'react';
import { useUser } from '../hooks/useUser'; // Importing the custom hook

const UserComponent: React.FC = () => {
    const { user, loading, fetchUser, updateUser } = useUser(); // Using the custom hook
    
    // Local state for form inputs
    const [name, setName] = useState<string>(user?.name || '');

    useEffect(() => {
        // Fetch user data when the component mounts
        fetchUser();
    }, [fetchUser]);

    const handleUpdateUser = () => {
        // Update user with the new name from local state
        const updatedUserData = { name };
        updateUser(updatedUserData);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>User Info:</h2>
            {user ? (
                <>
                    <p><strong>ID:</strong> {user.id}</p>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>

                    <div>
                        <label htmlFor="name">Update Name: </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <button onClick={handleUpdateUser}>Update User</button>
                </>
            ) : (
                <p>No user data available</p>
            )}
        </div>
    );
};

export default UserComponent;
