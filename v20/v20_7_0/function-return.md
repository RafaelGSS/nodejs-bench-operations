## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,420,387|94|
|Function returning explicitly undefined|1,435,936|95|
|Function returning implicitly undefined|1,447,725|88|
|Function returning string|1,441,499|97|
|Function returning integer|1,457,136|95|
|Function returning float|1,427,268|95|
|Function returning functions|1,374,754|95|
|Function returning arrow functions|1,432,928|95|
|Function returning empty object|1,454,594|95|
|Function returning empty array|1,430,101|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:57:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Function returning null","hz":1420387.092383138,"cycles":8,"stats":{"deviation":6.440421727519995e-8,"mean":7.040334324090423e-7,"moe":1.3019864097076533e-8,"rme":1.849324690807015,"sem":6.642787804630884e-9,"variance":4.147903202831165e-15}},{"name":"Function returning explicitly undefined","hz":1435936.1433903284,"cycles":6,"stats":{"deviation":8.518340631536046e-9,"mean":6.964097983068676e-7,"moe":1.7129680843940993e-9,"rme":0.24597127848555816,"sem":8.739633083643364e-10,"variance":7.256212711487792e-17}},{"name":"Function returning implicitly undefined","hz":1447725.2774403591,"cycles":5,"stats":{"deviation":1.945222641301055e-8,"mean":6.907387855850962e-7,"moe":4.064284033846067e-9,"rme":0.588396673049622,"sem":2.0736143029826875e-9,"variance":3.7838911242302525e-16}},{"name":"Function returning string","hz":1441498.736576469,"cycles":6,"stats":{"deviation":1.8272637562478566e-8,"mean":6.937224255742188e-7,"moe":3.63639828528407e-9,"rme":0.5241863533925826,"sem":1.8553052475939134e-9,"variance":3.338892834897026e-16}},{"name":"Function returning integer","hz":1457135.602939639,"cycles":6,"stats":{"deviation":8.693733180667046e-9,"mean":6.862779263526268e-7,"moe":1.7482380802650852e-9,"rme":0.2547419949169102,"sem":8.919582042168803e-10,"variance":7.558099661663115e-17}},{"name":"Function returning float","hz":1427268.245207922,"cycles":5,"stats":{"deviation":1.6824999267379992e-8,"mean":7.006391428923871e-7,"moe":3.3833686643473684e-9,"rme":0.482897465645454,"sem":1.726208502218045e-9,"variance":2.830806003473373e-16}},{"name":"Function returning functions","hz":1374753.9347481478,"cycles":5,"stats":{"deviation":1.7984419046119646e-8,"mean":7.274029007839851e-7,"moe":3.616518424764752e-9,"rme":0.49718229345345166,"sem":1.8451624616146694e-9,"variance":3.23439328426431e-16}},{"name":"Function returning arrow functions","hz":1432927.8347328359,"cycles":6,"stats":{"deviation":7.327880439164518e-9,"mean":6.978718507386985e-7,"moe":1.4735763526612055e-9,"rme":0.2111528572332331,"sem":7.518246697251048e-10,"variance":5.3697831730689975e-17}},{"name":"Function returning empty object","hz":1454593.988796746,"cycles":7,"stats":{"deviation":8.99966176008702e-9,"mean":6.87477060748209e-7,"moe":1.8097577958198201e-9,"rme":0.2632462810977559,"sem":9.233458141937858e-10,"variance":8.099391179597259e-17}},{"name":"Function returning empty array","hz":1430100.8548295605,"cycles":5,"stats":{"deviation":1.363094020125911e-8,"mean":6.992513826020893e-7,"moe":2.741069714751584e-9,"rme":0.392000614221366,"sem":1.3985049565059101e-9,"variance":1.8580253077030176e-16}}]}-->
