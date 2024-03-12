## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,677,419|97|
|Function returning explicitly undefined|1,654,893|98|
|Function returning implicitly undefined|1,685,768|93|
|Function returning string|1,670,365|97|
|Function returning integer|1,671,717|97|
|Function returning float|1,689,899|98|
|Function returning functions|1,610,558|98|
|Function returning arrow functions|1,658,196|92|
|Function returning empty object|1,638,564|98|
|Function returning empty array|1,662,859|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:47:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Function returning null","opsSec":1677418.6861384856,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1654893.239130121,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1685768.0824300733,"samples":6},{"name":"Function returning string","opsSec":1670365.2441681598,"samples":6},{"name":"Function returning integer","opsSec":1671717.1605209196,"samples":6},{"name":"Function returning float","opsSec":1689898.9876584376,"samples":6},{"name":"Function returning functions","opsSec":1610557.5280583291,"samples":6},{"name":"Function returning arrow functions","opsSec":1658196.4541604184,"samples":7},{"name":"Function returning empty object","opsSec":1638564.0268838904,"samples":7},{"name":"Function returning empty array","opsSec":1662858.644440669,"samples":6}]}-->
