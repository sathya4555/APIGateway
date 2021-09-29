import { DtoBase } from "./submodules/atpl-api-common/DtoBase";

export class NotificationsDto extends DtoBase
{       
    notificationData?: string;

    
    notificationType?: string;

    
    userId?: number;
}