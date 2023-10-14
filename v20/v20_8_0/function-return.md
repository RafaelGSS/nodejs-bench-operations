## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,222,733|96|
|Function returning explicitly undefined|1,219,198|98|
|Function returning implicitly undefined|1,244,644|97|
|Function returning string|1,219,073|98|
|Function returning integer|1,256,713|97|
|Function returning float|1,230,152|97|
|Function returning functions|1,176,317|91|
|Function returning arrow functions|1,203,183|98|
|Function returning empty object|1,232,115|99|
|Function returning empty array|1,239,640|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:57:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Function returning null","hz":1222732.663274091,"cycles":6,"stats":{"deviation":3.461188046344372e-8,"mean":8.178402606194526e-7,"moe":6.923818104180835e-9,"rme":0.8465978550550399,"sem":3.53256025723512e-9,"variance":1.197982269215717e-15}},{"name":"Function returning explicitly undefined","hz":1219198.250485173,"cycles":6,"stats":{"deviation":9.264965894117252e-9,"mean":8.202111507312741e-7,"moe":1.83436965913387e-9,"rme":0.22364602791590976,"sem":9.35902887313199e-10,"variance":8.583959301915587e-17}},{"name":"Function returning implicitly undefined","hz":1244643.9933821133,"cycles":6,"stats":{"deviation":2.913016813813121e-8,"mean":8.034425950850942e-7,"moe":5.797132083714816e-9,"rme":0.721536562683838,"sem":2.957720450874906e-9,"variance":8.485666957557946e-16}},{"name":"Function returning string","hz":1219073.3215668993,"cycles":6,"stats":{"deviation":1.597837746158914e-8,"mean":8.202952048156382e-7,"moe":3.1635573355254326e-9,"rme":0.38566083489863184,"sem":1.6140598650639963e-9,"variance":2.553085463050198e-16}},{"name":"Function returning integer","hz":1256712.7963945381,"cycles":6,"stats":{"deviation":3.0244790479281173e-9,"mean":7.957267586269213e-7,"moe":6.018950677567955e-10,"rme":0.07564092337367224,"sem":3.0708932028407935e-10,"variance":9.147473511356172e-18}},{"name":"Function returning float","hz":1230152.003075861,"cycles":6,"stats":{"deviation":8.394171174319518e-9,"mean":8.129076711655218e-7,"moe":1.6705059442188163e-9,"rme":0.2054976233430909,"sem":8.522989511320491e-10,"variance":7.046210970377673e-17}},{"name":"Function returning functions","hz":1176317.4272967055,"cycles":6,"stats":{"deviation":2.2338775141305716e-8,"mean":8.501106731863179e-7,"moe":4.589810253307976e-9,"rme":0.539907378895128,"sem":2.341739925157131e-9,"variance":4.990208748138182e-16}},{"name":"Function returning arrow functions","hz":1203182.544878931,"cycles":5,"stats":{"deviation":5.295530290780423e-9,"mean":8.311290786724502e-7,"moe":1.0484615060050899e-9,"rme":0.12614905830028006,"sem":5.349293397985152e-10,"variance":2.804264106057299e-17}},{"name":"Function returning empty object","hz":1232114.8147604493,"cycles":6,"stats":{"deviation":4.627562729571202e-9,"mean":8.116126744198123e-7,"moe":9.115716049978266e-10,"rme":0.11231608792327827,"sem":4.650875535703197e-10,"variance":2.141433681611647e-17}},{"name":"Function returning empty array","hz":1239640.416040725,"cycles":6,"stats":{"deviation":1.0551308497301724e-8,"mean":8.06685541274856e-7,"moe":2.0997932014959065e-9,"rme":0.2602988517901872,"sem":1.0713230619877075e-9,"variance":1.1133011100523155e-16}}]}-->
