// // import { registerFormControls } from "@/config";
// import { Label } from "@radix-ui/react-label";
// import { Select, SelectContent, SelectTrigger } from "@radix-ui/react-select";
// import { Textarea } from "../ui/textarea";
// import { Button } from "../ui/button";

// function CommonForm({ formControls, formData, setFormData, onSubmit }) {
//     // const formControls = registerFormControls; 
//     function renderInputByComponentType(getControlItem) {
//         let element = null;
//         const value = formData[getControlItem.name]

//         switch (getControlItem.componentType) {
//             case 'input':
//                 element = <Input
//                     name={getControlItem.name}
//                     placeholder={getControlItem.placeholder}
//                     id={getControlItem.name}
//                     type={getControlItem.type}
//                     value={value}
//                     onChange={(event) =>
//                         setFormData({
//                             ...formData,
//                             [getControlItem.name]: event.target.value,
//                         })}
//                 />
//                 break;
//             case 'select':
//                 element = (
//                     <Select onValueChange={(value) => setFormData({
//                         ...formData,
//                         [getControlItem.name]: value
//                     })} value={value} >
//                         <SelectTrigger className="w-full">
//                             <SelectValue placeholder={getControlItem.placeholer} />
//                         </SelectTrigger>
//                         <SelectContent>
//                             {
//                                 getControlItem.option &&
//                                     getControlItem.options.length > 0 ?
//                                     getControlItem.options.map(optionItem => <SelectItem>{optionItem.id} value={optionItem.id}>{optionItem.label}</SelectItem>) : null
//                             }
//                         </SelectContent>
//                     </Select >
//                 );
//                 break;
//             case 'textarea':
//                 element = (
//                     <Textarea
//                         name={getControlItem.name}
//                         placeholder={getControlItem.placeholder}
//                         id={getControlItem.id}
//                         value={value}
//                         onChange={(event) =>
//                             setFormData({
//                                 ...formData,
//                                 [getControlItem.name]: event.target.value,
//                             })}
//                     />
//                 );
//                 break;
//             default:
//                 <Input
//                     name={getControlItem.name}
//                     placeholder={getControlItem.placeholder}
//                     id={getControlItem.name}
//                     type={getControlItem.type}
//                 />
//                 break;
//         }
//         return element;

//     }

//     return (
//         <form onSubmit={onSubmit}>
//             <div className="flex flex-col gap-3">
//                 {formControls.map(controlItem => (
//                     <div className="grid w-full gap-1.5" key={controlItem.name}>
//                         <Label className="mb-1">{controlItem.label}</Label>
//                         {
//                             renderInputByComponentType(controlItem)
//                         }
//                     </div>
//                 ))}
//             </div>
//             <Button type="submit" className='mt-2 w-full'></Button>
//         </form>
//     );
// }

// export default CommonForm;


import { Label } from "@radix-ui/react-label";
import { Select, SelectContent, SelectTrigger, SelectItem, SelectValue } from "@radix-ui/react-select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Input } from "../ui/input";  // Import Input from your UI library or define it if custom

function CommonForm({ formControls, formData, setFormData, onSubmit }) {
    function renderInputByComponentType(getControlItem) {
        let element = null;
        const value = formData[getControlItem.name];

        switch (getControlItem.componentType) {
            case 'input':
                element = (
                    <Input
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.name}
                        type={getControlItem.type}
                        value={value}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                [getControlItem.name]: event.target.value,
                            })}
                    />
                );
                break;
            case 'select':
                element = (
                    <Select onValueChange={(value) => setFormData({
                        ...formData,
                        [getControlItem.name]: value
                    })} value={value} >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder={getControlItem.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                            {getControlItem.options && getControlItem.options.length > 0
                                ? getControlItem.options.map(optionItem => (
                                    <SelectItem key={optionItem.id} value={optionItem.id}>
                                        {optionItem.label}
                                    </SelectItem>
                                ))
                                : null
                            }
                        </SelectContent>
                    </Select >
                );
                break;
            case 'textarea':
                element = (
                    <Textarea
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.id}
                        value={value}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                [getControlItem.name]: event.target.value,
                            })}
                    />
                );
                break;
            default:
                element = (
                    <Input
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.name}
                        type={getControlItem.type}
                    />
                );
                break;
        }
        return element;
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-3">
                {formControls.map(controlItem => (
                    <div className="grid w-full gap-1.5" key={controlItem.name}>
                        <Label className="mb-1">{controlItem.label}</Label>
                        {renderInputByComponentType(controlItem)}
                    </div>
                ))}
            </div>
            <Button type="submit" className="mt-2 w-full">
                Create Account
            </Button>
        </form>
    );
}

export default CommonForm;
