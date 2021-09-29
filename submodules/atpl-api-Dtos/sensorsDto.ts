import { DtoBase } from "./submodules/atpl-api-common/DtoBase";
import { IotDeviceDto} from "./iotDeviceDto";
import { SensorTypeDto } from "./sensorTypeDto";
export class SensorsDto extends DtoBase {
    
 iotDeviceId?: number;

 
 sensorName?: string;


 sensorDetails?: string;

 
 minValue?: string;

 
 maxValue?: string;

 
 sensorTypeId?: number;

 
 iotDevice?: IotDeviceDto ;

 
 sensorType?: SensorTypeDto;

}