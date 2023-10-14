## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|780,036|93|
|Using brackets {}|786,549|95|
|Using '' + |784,913|98|
|Using date.toString()|866,593|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:46:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","hz":780036.3381287124,"cycles":4,"stats":{"deviation":4.5313492120342e-8,"mean":0.0000012819915574689443,"moe":9.209628879875113e-9,"rme":0.7183845186982218,"sem":4.698790244834241e-9,"variance":2.053312568140297e-15}},{"name":"Using brackets {}","hz":786549.0793824826,"cycles":6,"stats":{"deviation":2.1909718373969882e-8,"mean":0.0000012713764801366205,"moe":4.405863763387187e-9,"rme":0.3465428086976832,"sem":2.2478896751975445e-9,"variance":4.800357592266735e-16}},{"name":"Using '' + ","hz":784913.2114080137,"cycles":7,"stats":{"deviation":1.3495833824698568e-8,"mean":0.000001274026205019729,"moe":2.6720387722591183e-9,"rme":0.20973185337406305,"sem":1.3632850878873052e-9,"variance":1.8213753062387798e-16}},{"name":"Using date.toString()","hz":866592.7829135316,"cycles":4,"stats":{"deviation":1.2276149719536504e-8,"mean":0.000001153944528176136,"moe":2.430553639792767e-9,"rme":0.21063002427286273,"sem":1.2400783876493709e-9,"variance":1.5070385193647619e-16}}]}-->
