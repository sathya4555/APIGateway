import { DtoBase } from "./submodules/atpl-api-common/DtoBase";

export class IotDeviceDto extends DtoBase {
    
    iotDeviceName?: string;

   
    iotDeviceDetails?: string;

    
    tenantId?:number;

    
    subscriptionStartDate?:Date;

    
    subscriptionEndDate?:Date;

    
    isActive?: boolean;




}