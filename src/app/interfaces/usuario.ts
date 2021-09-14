import { StringMap } from "@angular/compiler/src/compiler_facade_interface";
import { Rol } from "./rol";

export interface Usuario {
    usuario_id?:string,
    nombres?:string,
    fecha_registro?:Date,
    contrasena?:StringMap,
    correo?:string
    roles?:Rol[];
}
