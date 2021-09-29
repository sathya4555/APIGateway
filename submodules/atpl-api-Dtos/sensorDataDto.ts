import { DtoBase } from "./submodules/atpl-api-common/DtoBase";
import { SensorsDto } from "./sensorsDto";

export class SensorDataDto extends DtoBase {
    
 sensorId?: number;


 sensorData?: string;
 isOptimum?: boolean;


 isCritical?: boolean;

 
 dateTimeOfRecording?:Date;

 
 sensors?:SensorsDto;

}