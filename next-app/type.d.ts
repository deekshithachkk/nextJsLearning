
interface InPutProps{
    name:string;
    value?:string;
    placeholder?:string;
    fieldType?:'textarea'|'input',
    register:UseFormRegister,
    formState?:FormState
}

interface ButtonProps{
    name:string;   
    type:any;
    isDirty?:any;
    handleClick?:(event?: React.MouseEvent<HTMLButtonElement>) => void;
}

interface ContactDetailProps{
    firstName: string,
    lastName: string,
    email: string,
    message: string,
}