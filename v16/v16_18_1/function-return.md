## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,270,392|96|
|Function returning explicitly undefined|1,275,281|91|
|Function returning implicitly undefined|1,288,454|95|
|Function returning string|1,284,150|95|
|Function returning integer|1,293,194|94|
|Function returning float|1,272,105|93|
|Function returning functions|1,262,703|94|
|Function returning arrow functions|1,268,137|98|
|Function returning empty object|1,268,342|97|
|Function returning empty array|1,283,998|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:57:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Function returning null","hz":1270391.6852656058,"cycles":5,"stats":{"deviation":2.378061016705399e-8,"mean":7.871588043264988e-7,"moe":4.757112788974802e-9,"rme":0.6043396532984264,"sem":2.427098361721838e-9,"variance":5.655174199173916e-16}},{"name":"Function returning explicitly undefined","hz":1275281.3008441564,"cycles":6,"stats":{"deviation":6.895714698103193e-9,"mean":7.841407220023242e-7,"moe":1.4168199386508794e-9,"rme":0.18068439744246312,"sem":7.228673156382038e-10,"variance":4.7550881197636417e-17}},{"name":"Function returning implicitly undefined","hz":1288454.4343294897,"cycles":6,"stats":{"deviation":1.3412069261738478e-8,"mean":7.761236822630821e-7,"moe":2.697056572965237e-9,"rme":0.34750345010745565,"sem":1.3760492719210394e-9,"variance":1.798836018816701e-16}},{"name":"Function returning string","hz":1284150.3988098064,"cycles":6,"stats":{"deviation":7.023597443978235e-9,"mean":7.787249849603547e-7,"moe":1.4123875505313289e-9,"rme":0.18137180362888117,"sem":7.20605893128229e-10,"variance":4.933092105505759e-17}},{"name":"Function returning integer","hz":1293193.9152194988,"cycles":6,"stats":{"deviation":1.3656615867627858e-8,"mean":7.73279233865144e-7,"moe":2.7608018565418017e-9,"rme":0.35702521620065536,"sem":1.4085723757866336e-9,"variance":1.86503156955945e-16}},{"name":"Function returning float","hz":1272105.0331793407,"cycles":6,"stats":{"deviation":5.730108012597878e-9,"mean":7.860986112921233e-7,"moe":1.1646016620717448e-9,"rme":0.14814956359704923,"sem":5.941845214651759e-10,"variance":3.283413783603841e-17}},{"name":"Function returning functions","hz":1262703.430212769,"cycles":6,"stats":{"deviation":1.541981035230812e-8,"mean":7.919515985091585e-7,"moe":3.1172467220877687e-9,"rme":0.3936158128799736,"sem":1.5904320010651883e-9,"variance":2.377705513011486e-16}},{"name":"Function returning arrow functions","hz":1268136.6692824834,"cycles":5,"stats":{"deviation":8.167710302008793e-9,"mean":7.885585396452606e-7,"moe":1.6171241355689394e-9,"rme":0.20507344150967102,"sem":8.250633344739487e-10,"variance":6.671149157754055e-17}},{"name":"Function returning empty object","hz":1268342.4021653063,"cycles":6,"stats":{"deviation":6.718888843422215e-9,"mean":7.88430630634761e-7,"moe":1.3371116121410494e-9,"rme":0.16959153541061037,"sem":6.821998021127803e-10,"variance":4.514346729026351e-17}},{"name":"Function returning empty array","hz":1283998.0261578404,"cycles":6,"stats":{"deviation":1.602341310462385e-8,"mean":7.78817396621972e-7,"moe":3.2053501936058835e-9,"rme":0.4115663321734606,"sem":1.6353827518397366e-9,"variance":2.5674976752143125e-16}}]}-->
