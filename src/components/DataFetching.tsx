import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const DataFetching: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [userId, setUserId] = useState<number>(1);

  // Simulate fetching user data
  const fetchUser = async (id: number): Promise<User> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate potential API error
    if (id > 10) {
      throw new Error(`User with ID ${id} not found`);
    }
    
    return {
      id,
      name: `User ${id}`,
      email: `user${id}@example.com`
    };
  };

  useEffect(() => {
    let isCancelled = false; // Flag to prevent state updates if component unmounts

    const loadUser = async () => {
      setLoading(true);
      setError('');
      
      try {
        console.log(`DataFetching: Fetching user ${userId}`);
        const user = await fetchUser(userId);
        
        // Only update state if component is still mounted
        if (!isCancelled) {
          setUsers(prev => {
            const exists = prev.find(u => u.id === user.id);
            if (exists) {
              return prev; // User already exists
            }
            return [...prev, user];
          });
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err instanceof Error ? err.message : 'An error occurred');
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    loadUser();

    // Cleanup function to prevent state updates if component unmounts
    return () => {
      isCancelled = true;
    };
  }, [userId]); // Effect runs when userId changes

  const handleFetchUser = () => {
    const newId = Math.floor(Math.random() * 12) + 1; // Random ID between 1-12
    setUserId(newId);
  };

  const clearUsers = () => {
    setUsers([]);
    setError('');
  };

  return (
    <div className="component-container">
      <h3>Data Fetching with useEffect Example</h3>
      
      <div style={{ margin: '1rem 0' }}>
        <button className="button" onClick={handleFetchUser} disabled={loading}>
          {loading ? 'Loading...' : 'Fetch Random User'}
        </button>
        <button className="button" onClick={clearUsers}>
          Clear Users
        </button>
      </div>

      {loading && (
        <div className="status info">
          Loading user {userId}...
        </div>
      )}

      {error && (
        <div className="status error">
          Error: {error}
        </div>
      )}

      {users.length > 0 && (
        <div style={{ margin: '1rem 0' }}>
          <h4>Loaded Users:</h4>
          <div style={{ backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '4px' }}>
            {users.map(user => (
              <div key={user.id} style={{ margin: '0.5rem 0', padding: '0.5rem', backgroundColor: 'white', borderRadius: '4px' }}>
                <strong>ID:</strong> {user.id} | <strong>Name:</strong> {user.name} | <strong>Email:</strong> {user.email}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="code-explanation">
        <strong>Pattern:</strong> useEffect with async function and cleanup flag
        <br />
        <strong>Behavior:</strong> Fetches data when component mounts or dependencies change
        <br />
        <strong>Use case:</strong> API calls, data loading, preventing memory leaks with cleanup
        <br />
        <strong>Key concept:</strong> Using cleanup flag to prevent state updates after unmount
      </div>
    </div>
  );
};

export default DataFetching;