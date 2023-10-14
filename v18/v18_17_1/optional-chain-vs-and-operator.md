## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|706,987,303|98|
|Using optional chain (obj.field?.field2) (undefined)|709,603,454|91|
|Using and operator (obj.field && obj.field.field2) (Valid)|705,892,765|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|707,949,865|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":706987303.2261463,"cycles":9,"stats":{"deviation":2.0905448143561297e-11,"mean":1.41445255867647e-9,"moe":4.139067560895656e-12,"rme":0.29262682127484435,"sem":2.1117691637222736e-12,"variance":4.370377620831304e-22}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":709603453.6784859,"cycles":6,"stats":{"deviation":1.9052862001818766e-11,"mean":1.4092377860002495e-9,"moe":3.914673961201718e-12,"rme":0.2777866162893978,"sem":1.9972826332661827e-12,"variance":3.630115504603494e-22}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":705892764.5515935,"cycles":9,"stats":{"deviation":5.122232043843642e-11,"mean":1.4166457714511823e-9,"moe":1.0300386415027323e-11,"rme":0.7270968242453314,"sem":5.255299191340471e-12,"variance":2.6237261110978615e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":707949864.703982,"cycles":6,"stats":{"deviation":9.896230859249327e-12,"mean":1.4125294033612595e-9,"moe":1.9900504512500673e-12,"rme":0.14088559477165832,"sem":1.0153318628826873e-12,"variance":9.793538521955867e-23}}]}-->
