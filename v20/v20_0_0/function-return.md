## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,733,187|94|
|Function returning explicitly undefined|1,771,561|98|
|Function returning implicitly undefined|1,732,429|95|
|Function returning string|1,721,263|98|
|Function returning integer|1,799,757|95|
|Function returning float|1,738,444|96|
|Function returning functions|1,725,200|96|
|Function returning arrow functions|1,736,170|93|
|Function returning empty object|1,738,440|98|
|Function returning empty array|1,741,639|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:47:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1733187.2348522511,"samples":4},{"name":"Function returning explicitly undefined","opsSec":1771560.6710454272,"samples":7},{"name":"Function returning implicitly undefined","opsSec":1732428.9447714519,"samples":6},{"name":"Function returning string","opsSec":1721263.0546174524,"samples":5},{"name":"Function returning integer","opsSec":1799757.2095855286,"samples":6},{"name":"Function returning float","opsSec":1738443.9639073657,"samples":5},{"name":"Function returning functions","opsSec":1725200.2615021707,"samples":5},{"name":"Function returning arrow functions","opsSec":1736169.7309572105,"samples":5},{"name":"Function returning empty object","opsSec":1738440.091241788,"samples":6},{"name":"Function returning empty array","opsSec":1741638.5167569804,"samples":6}]}-->
