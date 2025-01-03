import { FSEARCH_FILTER } from "../constants/Forms/RegisterForm";
import { SEARCHFILTER } from "../constants/Forms/SearchFilter";

export const FilterForm = [
        { id: 'selectMonth', label: 'Select Month', type: FSEARCH_FILTER.MONTH, required: false },
        {
            id: 'selectStatus', label: 'Select Status', type: FSEARCH_FILTER.SELECT, 
            options: [
                { value: '0', text: SEARCHFILTER.PAID },
                { value: '1', text: SEARCHFILTER.PENDING },
            ],
            required:false

        },
        
        {
            id: 'search', label: 'Search', type: FSEARCH_FILTER.SEARCH,
        },
    ];