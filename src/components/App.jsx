import { Profile } from './Profile/Profile';
import { user } from '../data/user.json';


export const App = () => {
  return (
    <div>
      <Profile propsUser={user} />
    </div>
  );
};
