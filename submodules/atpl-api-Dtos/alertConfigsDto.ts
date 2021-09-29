
import { DtoBase } from "./submodules/atpl-api-common/DtoBase";

export class AlertConfigsDto extends DtoBase{
    
    alertType?: string;

   
    notificationType?:string;

   
    roleId?: number;

    
    tenantId?: number;

   
    notificationConditions?: string;
    
    
}