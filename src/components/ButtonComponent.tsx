import { Button } from "@nextui-org/react";


const ButtonComponent = ({label, isDisabled ,isLoading}:{label:string, isDisabled:boolean,isLoading:boolean}) => {
    
    return (
        
        <Button  
        isLoading={isLoading} 
        isDisabled={isDisabled} 
        fullWidth 
        type="submit"  
        className="bg-jade text-white text-xl">
                         <div className="text-xl font-semibold">{label}</div> 
                      </Button>
    )
}
export default ButtonComponent
  

