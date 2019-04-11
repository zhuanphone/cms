import RenderAuthorized from '@/components/Authorized';
import { getAuthority, getFromStorage } from './authority';

let Authorized = RenderAuthorized(getFromStorage('token')); // eslint-disable-line

// Reload the rights component
const reloadAuthorized = () => {
  Authorized = RenderAuthorized(getFromStorage('token'));
};

export { reloadAuthorized };
export default Authorized;
