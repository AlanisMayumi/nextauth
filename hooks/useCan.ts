import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { validateUserPermissions } from "../utils/validateUserPermissions";

type UseCanParams = {
  permissions?: string[];
  roles?: string[];
};
export function useCan({ permissions, roles }: UseCanParams) {
  const { user, isAuthentcated } = useContext(AuthContext);

  if (!isAuthentcated) {
    return false;
  }

  const userHasValidPermissions = validateUserPermissions({
    user,
    permissions,
    roles,
  });
  return userHasValidPermissions;
}
