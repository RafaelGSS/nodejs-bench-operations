## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|186,431|56|
|[True conditional] Using constructor name|147,039|96|
|[True conditional] Check if property is valid then instanceof |145,369|89|
|[False conditional] Using instanceof only|711,546,374|99|
|[False conditional] Using constructor name|711,012,360|97|
|[False conditional] Check if property is valid then instanceof |710,393,528|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:38:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"[True conditional] Using instanceof only","hz":186431.22694752403,"cycles":4,"stats":{"deviation":0.000001067643555158578,"mean":0.00000536390826994598,"moe":2.79632947622048e-7,"rme":5.213231352013113,"sem":1.4266987123573877e-7,"variance":1.1398627608716476e-12}},{"name":"[True conditional] Using constructor name","hz":147039.09863156595,"cycles":3,"stats":{"deviation":2.1990088769223852e-7,"mean":0.000006800912201629361,"moe":4.3989339121202735e-8,"rme":0.6468152773779932,"sem":2.244354036796058e-8,"variance":4.83564004078345e-14}},{"name":"[True conditional] Check if property is valid then instanceof ","hz":145368.9392529347,"cycles":3,"stats":{"deviation":4.0337741856876267e-7,"mean":0.000006879048613404613,"moe":8.380552487096401e-8,"rme":1.2182720254027477,"sem":4.275792085253266e-8,"variance":1.6271334181119876e-13}},{"name":"[False conditional] Using instanceof only","hz":711546373.8386632,"cycles":11,"stats":{"deviation":1.2003984263860308e-11,"mean":1.4053897774858748e-9,"moe":2.3646337913154004e-12,"rme":0.16825465996668434,"sem":1.2064458118956125e-12,"variance":1.4409563820700589e-22}},{"name":"[False conditional] Using constructor name","hz":711012359.7508119,"cycles":10,"stats":{"deviation":1.154460985267358e-11,"mean":1.40644531179524e-9,"moe":2.2974679670076795e-12,"rme":0.16335281206740307,"sem":1.1721775341875915e-12,"variance":1.3327801665044792e-22}},{"name":"[False conditional] Check if property is valid then instanceof ","hz":710393527.8499533,"cycles":6,"stats":{"deviation":3.159099495604374e-11,"mean":1.4076704823403407e-9,"moe":6.386390184071106e-12,"rme":0.45368502530885857,"sem":3.258362338811789e-12,"variance":9.97990962312781e-22}}]}-->
