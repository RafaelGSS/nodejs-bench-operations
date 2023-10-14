## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|595,885,584|98|
|Using optional chain (obj.field?.field2) (undefined)|597,116,824|99|
|Using and operator (obj.field && obj.field.field2) (Valid)|597,118,008|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|595,520,684|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":595885584.3311387,"cycles":6,"stats":{"deviation":1.2937677204939405e-11,"mean":1.6781745125156298e-9,"moe":2.561529399636276e-12,"rme":0.15263784430836536,"sem":1.3069027549164673e-12,"variance":1.673834914592087e-22}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":597116823.6084614,"cycles":8,"stats":{"deviation":1.0392591393166568e-11,"mean":1.6747141605504575e-9,"moe":2.0472096803392848e-12,"rme":0.12224233415846872,"sem":1.044494734866982e-12,"variance":1.0800595586531983e-22}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":597118007.8201387,"cycles":8,"stats":{"deviation":9.070862239197915e-12,"mean":1.6747108392370168e-9,"moe":1.8145503610710212e-12,"rme":0.10835006966920416,"sem":9.257910005464394e-13,"variance":8.228054176250662e-23}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":595520683.5109665,"cycles":8,"stats":{"deviation":1.5249138626434246e-11,"mean":1.6792028013273612e-9,"moe":3.003888350060482e-12,"rme":0.1788877643418648,"sem":1.5325960969696336e-12,"variance":2.3253622884820895e-22}}]}-->
