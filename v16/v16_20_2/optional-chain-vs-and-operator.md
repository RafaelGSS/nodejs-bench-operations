## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|772,208,377|84|
|Using optional chain (obj.field?.field2) (undefined)|820,763,446|84|
|Using and operator (obj.field && obj.field.field2) (Valid)|828,166,140|84|
|Using and operator (obj.field && obj.field.field2) (undefined)|822,965,402|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":772208377.3193958,"cycles":5,"stats":{"deviation":1.8108625387647783e-10,"mean":1.2949872461515482e-9,"moe":3.8725935066231e-11,"rme":2.9904491477670527,"sem":1.9758130135832144e-11,"variance":3.2792231343016185e-20}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":820763445.9458706,"cycles":9,"stats":{"deviation":8.180557010841553e-11,"mean":1.2183778467955187e-9,"moe":1.749441014023878e-11,"rme":1.4358772351492763,"sem":8.9257194593055e-12,"variance":6.692151300762888e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":828166140.3354691,"cycles":8,"stats":{"deviation":6.879859371178713e-11,"mean":1.2074871831815358e-9,"moe":1.4712822291569612e-11,"rme":1.2184661250650857,"sem":7.5065419854947e-12,"variance":4.7332464967195554e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":822965402.3456701,"cycles":8,"stats":{"deviation":7.787424754409533e-11,"mean":1.2151179103638309e-9,"moe":1.645889630466927e-11,"rme":1.3545102219537808,"sem":8.397396073810852e-12,"variance":6.064398430559038e-21}}]}-->
