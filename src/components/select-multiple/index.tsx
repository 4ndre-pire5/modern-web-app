import { DetailedHTMLProps, SelectHTMLAttributes } from 'react'
import React from 'react'
import Select from 'react-select'

import styles from './styles.module.css'
import { Roles } from '@/model/roles';

// interface Props extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>{
//     label: string ,
//     rolesLista: Roles[] , 
// }

// export default function SelectMultiple({ label, rolesLista , ...rest }: Props){
//     return(
//         <div className={styles.divInput}>
//             <label className={styles.label}>{label}:</label>
//             <select className={styles.input} {...rest}>
//             {rolesLista.map(o => (
//                 <option key={o.name} value={o.name} >{o.description}</option>
//             ))}
//             </select>
//         </div>
//     )
// }


interface Props {
    label: string;
    rolesLista: Roles[];
    value: string[];
    onChange: (selectedOptions: { value: string; label: string }[]) => void;
}

export default function SelectMultiple({ label, rolesLista, value }: Props) {
    const options = rolesLista.map((role) => ({
        label: role.description,
        value: role.name,
    }));

    return(
        <div className={styles.divInput}>
            <label className={styles.label}>{label}:</label>
            <Select
                className={styles.input}
                options={options}
                isMulti={true}
                value={options.filter((option) => value?.includes(option.value))}
            />
        </div>
    );
}