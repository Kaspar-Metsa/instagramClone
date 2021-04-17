import { useState, useEffect } from 'react';
import { getUserByUserId } from '../services/firebase';

export default function useUser(loggedInUserUid) {
  const [activeUser, setActiveUser] = useState();

  useEffect(() => {
    async function getUserObjByUserId(userId) {
      const [user] = await getUserByUserId(userId);
      setActiveUser(user || {});
    }

    if (loggedInUserUid) {
      getUserObjByUserId(loggedInUserUid);
    }
  }, [loggedInUserUid]);

  return { user: activeUser };
}
