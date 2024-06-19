import { differenceInYears } from "date-fns"

const CalcAge = (dob:Date) => {
    return differenceInYears(new Date(), dob)
}
export default CalcAge