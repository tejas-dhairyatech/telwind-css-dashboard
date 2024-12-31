// menuService.ts
import { apiRequest } from '../api/apiService';
import { MenuResponse } from '../types/Menu/MenuResponse';
import { API_ENDPOINTS } from '../../utils/constants/api/apiEndpoints';
import { HTTP_METHODS } from '../../utils/constants/api/httpMethods';

export const fetchMenu = async (): Promise<MenuResponse> => {
    return apiRequest<MenuResponse>(API_ENDPOINTS.MENU, HTTP_METHODS.GET);
};

export const updateRoles = async (newRoles: string[]): Promise<MenuResponse> => {
    return apiRequest<MenuResponse>(API_ENDPOINTS.ROLES, HTTP_METHODS.PUT, { roles: newRoles });
};
