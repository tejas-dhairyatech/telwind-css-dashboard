import useSWR, { mutate } from 'swr';
import { fetchMenu, updateRoles } from '../services/Menu/menuService';
import { MenuResponse } from '../services/types/Menu/MenuResponse';

export const useMenu = () => {
    const { data, error, isValidating } = useSWR<MenuResponse>('/menu', fetchMenu);

    const updateUserRoles = async (newRoles: string[]) => {
        const updatedData = await updateRoles(newRoles);
        mutate('/menu', updatedData, false);
    };

    return {
        roles: data?.roles || [],
        menu: data?.menu || [],
        error,
        isValidating,
        updateUserRoles,
    };
};
