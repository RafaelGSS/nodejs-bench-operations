## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,227,505|96|
|Function returning explicitly undefined|1,203,445|93|
|Function returning implicitly undefined|1,225,280|89|
|Function returning string|1,217,010|96|
|Function returning integer|1,239,548|97|
|Function returning float|1,247,439|90|
|Function returning functions|1,173,518|96|
|Function returning arrow functions|1,229,149|93|
|Function returning empty object|1,250,268|95|
|Function returning empty array|1,219,476|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:57:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Function returning null","hz":1227505.2851124387,"cycles":6,"stats":{"deviation":1.194915468052099e-8,"mean":8.146604435258302e-7,"moe":2.3903287656973713e-9,"rme":0.29341411930498157,"sem":1.2195554927027405e-9,"variance":1.4278229757901668e-16}},{"name":"Function returning explicitly undefined","hz":1203445.0597677024,"cycles":6,"stats":{"deviation":5.1501787942828e-8,"mean":8.309477793635442e-7,"moe":1.0467353792636646e-8,"rme":1.2596885210589295,"sem":5.3404866288962475e-9,"variance":2.6524341613080237e-15}},{"name":"Function returning implicitly undefined","hz":1225279.5445308075,"cycles":6,"stats":{"deviation":3.968916170448886e-8,"mean":8.161402877111826e-7,"moe":8.245803744133608e-9,"rme":1.0103414655902456,"sem":4.20704272659878e-9,"variance":1.5752295568050647e-15}},{"name":"Function returning string","hz":1217010.1505079959,"cycles":6,"stats":{"deviation":1.9803733874708486e-8,"mean":8.216858335837109e-7,"moe":3.961571844584007e-9,"rme":0.4821273146825421,"sem":2.0212101247877586e-9,"variance":3.921878753802764e-16}},{"name":"Function returning integer","hz":1239547.7455933376,"cycles":5,"stats":{"deviation":1.4019799873899788e-8,"mean":8.067458502950424e-7,"moe":2.7900502074293698e-9,"rme":0.3458400444711299,"sem":1.4234950037904947e-9,"variance":1.9655478850420052e-16}},{"name":"Function returning float","hz":1247438.6815073185,"cycles":6,"stats":{"deviation":5.597915966873265e-9,"mean":8.016426096324585e-7,"moe":1.156541420895489e-9,"rme":0.14427145051904694,"sem":5.900721535181067e-10,"variance":3.133666317217464e-17}},{"name":"Function returning functions","hz":1173517.7978646972,"cycles":6,"stats":{"deviation":4.447124576967948e-8,"mean":8.521387590538246e-7,"moe":8.896101929532275e-9,"rme":1.0439733945924599,"sem":4.5388275150674875e-9,"variance":1.977691700307235e-15}},{"name":"Function returning arrow functions","hz":1229148.7784450362,"cycles":6,"stats":{"deviation":7.203241774882446e-9,"mean":8.135711620403461e-7,"moe":1.4640050981394004e-9,"rme":0.17994800780153491,"sem":7.469413766017349e-10,"variance":5.188669206741161e-17}},{"name":"Function returning empty object","hz":1250268.2082671893,"cycles":6,"stats":{"deviation":3.8956417626345955e-9,"mean":7.998283835321633e-7,"moe":7.833814467246217e-10,"rme":0.09794369177861513,"sem":3.9968441159419475e-10,"variance":1.517602474278278e-17}},{"name":"Function returning empty array","hz":1219476.0965133877,"cycles":6,"stats":{"deviation":2.1583336951900533e-8,"mean":8.200242734229123e-7,"moe":4.363256410281132e-9,"rme":0.5320886895296651,"sem":2.2261512297352713e-9,"variance":4.658404339792749e-16}}]}-->
