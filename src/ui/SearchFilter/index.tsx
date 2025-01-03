
import { SEARCHFILTER } from "../../utils/constants/Forms/SearchFilter";
import { DEFAULT_VALUE } from "../../utils/constants/ui";
import Button from "../Button";

const SearchFilter = () => {




    return (
        <div className="flex items-center gap-3 bg-white p-4">
            <div>
                <label htmlFor="startDate" className="input-label">Select Date</label>
            </div>
            <div>
                <input
                    type="date"
                    id="startDate"
                    className="input-field"
                />
            </div>
            <div>
                <label htmlFor="selectMonth" className="input-label">
                    Select Month
                </label>
            </div>
            <div>
                <input
                    type="month"
                    id="selectMonth"
                    className="input-field"
                />
            </div>
            <div>
                <label htmlFor="startDate" className="input-label">Select Status</label>
            </div>
            <div>
                <select
                    className="input-field"
                >
                    <option>{DEFAULT_VALUE.OPTION}</option>
                    <option>{SEARCHFILTER.PAID}</option>
                    <option>{SEARCHFILTER.PENDING}</option>

                </select>
            </div>
            <div>
                <Button text={"Search"} type="button" />
            </div>
        </div>
    );
};

export default SearchFilter;
